---
title: "Visual Studio web project publish not working"
description: "My answer to \"Visual Studio web project publish not working\" on Stack Overflow"
date: 2016-01-20
author:
  name: Nate Bross
tags:
  - asp.net
  - visual-studio
  - visual-studio-2012
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/34908210"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/34908116):*

> I have a finished web project ready to publish. It works fine when I run it in Visual Studio. Then I go to publish it. Visual Studio claims the publication was successful, but when I go to the site on IIS it does not work. The published file system doesn't even have the Images folder, and the links to the Scripts and other folders don't work.
> 
> To describe what's happening, first I choose Build-->Publish site. I create a publish profile like so:
> 
> [![enter image description here](https://i.sstatic.net/9OXrO.png)](https://i.sstatic.net/9OXrO.png)
> 
> Then I publish it as a File System and pick the folder:
> 
> [![enter image description here](https://i.sstatic.net/gO92U.png)](https://i.sstatic.net/gO92U.png)
> 
> Then I publish it as Release:
> 
> [![enter image description here](https://i.sstatic.net/tWRjg.png)](https://i.sstatic.net/tWRjg.png)
> 
> Then I press Publish:
> 
> [![enter image description here](https://i.sstatic.net/DWZWM.png)](https://i.sstatic.net/DWZWM.png)
> 
> Here is the output of the publish website by Visual Studio:
> 
> \------ Build started: Project: LangSite, Configuration: Release Any CPU ------ LangSite -> C:\\Users\\Administrator\\documents\\visual studio 2013\\Projects\\LangSite\_151209\\LangSite\_151209\\bin\\LangSite\_151209.dll ------ Publish started: Project: LangSite, Configuration: Release Any CPU ------ Connecting to C:\\Users\\Administrator\\Documents\\LangTestSite... Transformed Web.config using C:\\Users\\Administrator\\documents\\visual studio 2013\\Projects\\LangSite\_151209\\LangSite\_151209\\Web.Release.config into obj\\Release\\TransformWebConfig\\transformed\\Web.config. Copying all files to temporary location below for package/publish: obj\\Release\\Package\\PackageTmp. Publishing folder /... Publishing folder Areas... Publishing folder Areas/HelpPage... Publishing folder Areas/HelpPage/Views... Publishing folder Areas/HelpPage/Views/Help... Publishing folder Areas/HelpPage/Views/Help/DisplayTemplates... Publishing folder Areas/HelpPage/Views/Shared... Publishing folder bin... Publishing folder Content... Publishing folder fonts... Publishing folder Scripts... Publishing folder Views... Publishing folder Views/Home... Publishing folder Views/Shared... Site was published successfully file:///C:/Users/Administrator/Documents/LangTestSite
> 
> \========== Build: 1 succeeded, 0 failed, 0 up-to-date, 0 skipped ========== ========== Publish: 1 succeeded, 0 failed, 0 skipped ==========
> 
> Here is the layout of the file folders in Visual Studio:
> 
> [![enter image description here](https://i.sstatic.net/6jFym.png)](https://i.sstatic.net/6jFym.png)
> 
> And here is the file structure of the published site. Notice, no Images folder:
> 
> [![enter image description here](https://i.sstatic.net/w60ou.png)](https://i.sstatic.net/w60ou.png)
> 
> When I try to go to the site, I get a page of broken links: [![enter image description here](https://i.sstatic.net/lOCNN.png)](https://i.sstatic.net/lOCNN.png) [![enter image description here](https://i.sstatic.net/6muCg.png)](https://i.sstatic.net/6muCg.png)
> 
> Clearly I am not using the publish web project correctly, but I don't see any different way to do it. What am I doing wrong?

*I posted the following answer, which was chosen as the accepted answer and received 1 upvote:*

Chances are that your images are in the file system, but they are not in your actual project.

You'll want to tell Visual Studio to 'show all files' its one of the icons in the top of the solution explorer. From there you can see the grayed out items show up under the images folder, and right click and "include in project".

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/34908210) — 1 upvotes *(accepted answer)*. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
