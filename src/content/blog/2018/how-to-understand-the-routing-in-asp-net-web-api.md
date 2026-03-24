---
title: "How to understand the routing in ASP.Net Web API"
description: "My answer to \"How to understand the routing in ASP.Net Web API\" on Stack Overflow"
date: 2018-08-13
author:
  name: Nate Bross
tags:
  - c#
  - asp.net
  - .net
  - asp.net-mvc
  - routes
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/51829300"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/51829204):*

> I am trying to learn ASP.Net Web API. And I have a _MVC controller_ Home and from there I want to make a call to _API Controller_ which is CoursesController via ajax call. But I am not able to make the ajax call to the api controller when I give the complete valid path.
> 
> **Case 1:** _Working example_: If I go to **localhost:port/**
> 
> q. HomeController's Index mathod gets hit
> 
> b. Then CoursesApiController gets hit and result is displayed
> 
> **Case 2:** _Non Working Example_: If I go to **localhost:port/Home/Index**
> 
> a. HomeController's Index method gets hit
> 
> b. But ApiController does not get hit
> 
> **Chrome Dev error:**
> 
> It tries to attempt to open API URI pointing at **localhost:port/Home/api/Courses** (which obviously is wrong).
> 
> But why does it work fine when I don't explicitly tell the URL in browser?
> 
> Routes.Config File:
> 
> ```
>   routes.MapRoute(
>                 name: "Default",
>                 url: "{controller}/{action}/{id}",
>                 defaults: new { controller = "Home", action = "Index", id = UrlParameter.Optional }
>             );
> 
> ```
> 
> WebApi.config File:
> 
> ```
>    config.Routes.MapHttpRoute(
>                 name: "DefaultApi",
>                 routeTemplate: "api/{controller}/{id}",
>                 defaults: new { id = RouteParameter.Optional }
>             );
> 
> ```
> 
> Index.cshtml File:
> 
> ```
> <div >
>     hello worl
>     <ol id="courses"></ol>
> </div>
> @section scripts
> {
>     <script>
>         $.ajax({
>             url: 'api/courses', // here I am making the API Call to Courses controller
>             success: function (courses) {
>                 debugger;
>                 var list = $('#courses');
>                 for (var i = 0; i < courses.length; i++)
>                 {
>                     var course = courses[i];
>                     list.append('<li>' + course.title + '</li>');
>                 }
>             }
>         });
>     </script>
> }
> 
> ```

*I posted the following answer, which was chosen as the accepted answer and received 2 upvotes:*

You have a bug/typo in your url in the javascript.

You have: `url: 'api/courses',`

Should be: `url: '/api/courses',`

This is due to how the browser handles relative paths.

If your browser is sitting at [http://localhost:port/](http://localhost:port/) the script will work since the relative path is correct. Once you manually route to `/home` or `/home/index` the relative path is now pointing to `/home/index/api` which isn't what you want.

Ultimately a javascript path fragment that does not start with a '/' is treated as relative to the current browser path. A path that starts with a '/' is treated as an absolute path.

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/51829300) — 2 upvotes *(accepted answer)*. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
