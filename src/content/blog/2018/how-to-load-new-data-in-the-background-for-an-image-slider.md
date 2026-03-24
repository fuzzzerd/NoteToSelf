---
title: "How to load new data in the background for an Image Slider using AngularJS"
description: "My answer to \"How to load new data in the background for an Image Slider using AngularJS\" on Stack Overflow"
date: 2018-02-05
author:
  name: Nate Bross
tags:
  - c#
  - asp.net
  - angularjs
  - image
  - loading
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/48626700"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/48626379):*

> Basically I've created a project in ASP and AngularJs to grab image/video data from a folder and display it on a webpage in full screen, like a slider. The data sits in a folder, with a specific naming convention that gets trimmed to make up the slide interval and start/end date.
> 
> **Example:**
> 
> ```
> *10000*_*2018-02-05*,*2018-02-12*~backgroundVideo.mp4 <br/>
> 10 Second slide, Start 02/05/2018 and End 02/12/2018.
> 
> ```
> 
> The app works great. On initial startup of the web app a loading bar appears, loads all the image data first and then begins showing the content.
> 
> **My question:**  
> I need to figure out the best way to load new data on the fly while images are being displayed. Technically, I need to figure out a way to check for new content/change and load it in the background while images are being displayed (I'm going to assume AJAX calls will get this to work). I want the loading bar to only be there on start up, not when new content gets loaded in.
> 
> **The HTML:**
> 
> ```
> <body ng-controller="SlideCtrl" style="background-color: #1f567c;">
> 
> 
> <div class="col-xs-12" height="100%" ng-if="progress !== 100">
>     <progressbar class="progress-striped progress-bar-warning" value="progress">{{progress | number:0}}%</progressbar>
> </div>
> <embed ng-show="loaded" width="100%" height="100%" bg-image class="fullBg {{currentAnimation}}" ng-repeat="slide in slides"
>     ng-if="isCurrentSlideIndex($index)"
>     ng-src="{{slide.src}}" />
> 
> ```
> 
> **Angular App Start:**
> 
> ```
>     var app = angular.module('website', ['ngAnimate', 'ui.bootstrap']);
>     app.controller('SlideCtrl', function ($scope, $timeout, QueueService) {
> 
>         slides = [<%=getLocation()%>];
> 
>         function setCurrentSlideIndex(index) {
>             $scope.currentIndex = index;
>         }
> 
>         function isCurrentSlideIndex(index) {
>             return $scope.currentIndex === index;
>         }
> 
>         function nextSlide() {
>             $scope.currentIndex = ($scope.currentIndex < $scope.slides.length - 1) ? ++$scope.currentIndex : 0;
>             var interval = $scope.slides[$scope.currentIndex].interval;
>             $timeout(nextSlide, interval);
>         }
> 
>         function setCurrentAnimation(animation) {
>             $scope.currentAnimation = animation;
>         }
> 
>         function isCurrentAnimation(animation) {
>             return $scope.currentAnimation === animation;
>         }
> 
>         function loadSlides() {
>             QueueService.loadManifest(slides);
>         }
> 
>         $scope.$on('queueProgress', function (event, queueProgress) {
>             $scope.$apply(function () {
>                 $scope.progress = queueProgress.progress * 100;
>             });
>         });
> 
>         $scope.$on('queueComplete', function (event, slides) {
>             $scope.$apply(function () {
>                 $scope.slides = slides;
>                 $scope.loaded = true;
>                 var interval = $scope.slides[$scope.currentIndex].interval;
>                 $timeout(nextSlide, interval);
>             });
>         });
> 
>         $scope.progress = 0;
>         $scope.loaded = false;
>         $scope.currentIndex = 0;
>         $scope.currentAnimation = 'fade-in-animation';
> 
>         $scope.setCurrentSlideIndex = setCurrentSlideIndex;
>         $scope.isCurrentSlideIndex = isCurrentSlideIndex;
>         $scope.setCurrentAnimation = setCurrentAnimation;
>         $scope.isCurrentAnimation = isCurrentAnimation;
> 
>         $scope.refreshData = function () {
>             location.reload();
>          };
>         loadSlides();
>     });
> 
>     app.factory('QueueService', function ($rootScope) {
>         var queue = new createjs.LoadQueue(true);
> 
>         function loadManifest(manifest) {
>             queue.loadManifest(manifest);
> 
>             queue.on('progress', function (event) {
>                 $rootScope.$broadcast('queueProgress', event);
>             });
> 
>             queue.on('complete', function () {
>                 $rootScope.$broadcast('queueComplete', manifest);
>             });
>         }
> 
>         return {
>             loadManifest: loadManifest
>         }
>     })
> 
>     app.animation('.slide-left-animation', function ($window) {
>         return {
>             enter: function (element, done) {
>                 TweenMax.fromTo(element, 1, { left: $window.innerWidth }, { left: 0, onComplete: done });
>             },
> 
>             leave: function (element, done) {
>                 TweenMax.to(element, 1, { left: -$window.innerWidth, onComplete: done });
>             }
>         };
>     });
> 
>     app.animation('.slide-down-animation', function ($window) {
>         return {
>             enter: function (element, done) {
>                 TweenMax.fromTo(element, 1, { top: -$window.innerHeight }, { top: 0, onComplete: done });
>             },
> 
>             leave: function (element, done) {
>                 TweenMax.to(element, 1, { top: $window.innerHeight, onComplete: done });
>             }
>         };
>     });
> 
>     app.animation('.fade-in-animation', function ($window) {
>         return {
>             enter: function (element, done) {
>                 TweenMax.fromTo(element, 1, { opacity: 0 }, { opacity: 1, onComplete: done });
>             },
> 
>             leave: function (element, done) {
>                 TweenMax.to(element, 1, { opacity: 0, onComplete: done });
>             }
>         };
>     });
> 
>     app.directive('bgImage', function ($window, $timeout) {
>         return function (scope, element, attrs) {
>             var resizeBG = function () {
>                 var bgwidth = element.width();
>                 var bgheight = element.height();
> 
>                 var winwidth = $window.innerWidth;
>                 var winheight = $window.innerHeight;
> 
>                 var widthratio = winwidth / bgwidth;
>                 var heightratio = winheight / bgheight;
> 
>                 var widthdiff = heightratio * bgwidth;
>                 var heightdiff = widthratio * bgheight;
> 
>                 if (heightdiff > winheight) {
>                     element.css({
>                         width: winwidth + 'px',
>                         height: heightdiff + 'px'
>                     });
>                 } else {
>                     element.css({
>                         width: widthdiff + 'px',
>                         height: winheight + 'px'
>                     });
>                 }
>             };
> 
>             var windowElement = angular.element($window);
>             windowElement.resize(resizeBG);
> 
>             element.bind('load', function () {
>                 resizeBG();
>             });
>         }
>     });
> 
> ```
> 
> **Back End (<%=getLocation()%>)**
> 
> ```
>  //CONDITIONS TO DETERMINE LOCATION OF DEVICE AND PULL ACCURATE DATA
>     [WebMethod]
>     public static string getLocation()
>     {
>         var location = HttpContext.Current.Request.QueryString["location"];
> 
>         //ATRIUM & CAFE
>         if (location == "atrium")
>         {
>             return getFiles(@"\\\HOST\\FOLDER\\FOLDER\\FOLDER\\FOLDER\\FOLDER\\FOLDER\\IMAGES\\", "/FOLDER/FOLDER/FOLDER/FOLDER/FOLDER/IMAGES/");
>         }
>         else if (location == "cafeteria")
>         {
>             return getFiles(@"\\\HOST\\FOLDER\\FOLDER\\FOLDER\\FOLDER\\FOLDER\\FOLDER\\IMAGES\\", "/FOLDER/FOLDER/FOLDER/FOLDER/FOLDER/IMAGES/");
>         }
> 
>         //GLOBAL
>         return location;
>     }
> 
>     [WebMethod]
>     public static string getFiles(string location, string imageData)
>     {
> 
>         DirectoryInfo d = new DirectoryInfo(location);
>         FileInfo[] Files = d.GetFiles();
>         string displayedFiles = "";
>         string Interval = "";
>         string DateStart = "";
>         string DateEnd = "";
> 
>         foreach (FileInfo file in Files)
>         {
>             if (file.Name != "Thumbs.db") {
>                 string fileName = file.Name;
>                 string[] plusParts = null;
> 
>                 string[] underscoreParts = fileName.Split(new char[] { '~' });
> 
>                 if (underscoreParts.Length > 0)
>                 {
>                     underscoreParts = underscoreParts[0].Split(new char[] { ',' });
>                 }
>                 if (underscoreParts.Length > 0)
>                 {
>                     plusParts = underscoreParts[0].Split(new char[] { '_' });
>                 }
> 
>                 Interval = plusParts[0];
>                 DateStart = plusParts[1];
>                 DateEnd = underscoreParts[1];
> 
>                 DateTime today = DateTime.Now;
>                 DateTime startDate = Convert.ToDateTime(DateStart);
>                 DateTime endDate = Convert.ToDateTime(DateEnd);
> 
>                 if (today > startDate && today < endDate)
>                 {
>                     try
>                     {
>                         displayedFiles += "{interval:" + Interval + ", src:\"" + imageData + "" + file.Name + "\"},";
>                     }
>                     catch
>                     {
>                     }
>                 } else
>                 {
>                     string rootFolderPath = location;
>                     string filesToDelete = fileName;   // Only delete DOC files containing "DeleteMe" in their filenames
>                     string[] fileList = System.IO.Directory.GetFiles(rootFolderPath, filesToDelete);
>                     foreach (string fileDel in fileList)
>                     {
>                       //File.Delete(fileDel);
>                     }
>                 }
>                 }
>             }
>         return displayedFiles.TrimEnd(displayedFiles[displayedFiles.Length - 1]);
>     }
> 
> ```
> 
> Thank you all for your assistance.

*I posted the following answer, which was chosen as the accepted answer and received 1 upvote:*

It looks like you're doing a couple things that are not typically done.

First, it looks like you're using ASP.NET to generate the javascript for your angular app; and embedding via `<%=var%>` syntax hard coded JSON.

This creates a very tight coupling between your front and back ends. It also means you'd be generating your initial load very differently than subsequent loads. This means more code you need to maintain.

Second, it seems that you are manually generating JSON strings in your C# code; you really should use [something like JSON.NET](https://www.nuget.org/packages/newtonsoft.json/).

You'll need to look into the [Angular Http APIs to call your existing WebMethods](https://stackoverflow.com/a/20369746/86860), and handle the response data. In this link, you'd replace their endpoints the route/url to your WebMethod.

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/48626700) — 1 upvotes *(accepted answer)*. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
