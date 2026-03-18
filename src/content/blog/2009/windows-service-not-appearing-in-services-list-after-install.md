---
title: "Windows Service not appearing in services list after install"
description: "My answer to \"Windows Service not appearing in services list after install\" on Stack Overflow"
date: 2009-10-13
author:
  name: Nate Bross
tags:
  - c#
  - visual-studio-2008
  - windows-services
  - setup-deployment
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/1560480"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/1560407):*

> I've created a windows service in C#, using Visual Studio 2008 I pretty much followed this: [http://www.codeproject.com/KB/dotnet/simplewindowsservice.aspx](http://www.codeproject.com/KB/dotnet/simplewindowsservice.aspx)
> 
> I created a setup project, as instructed to in the article, and ran it... it installs my service to `C:\Program Files\Product etc....` however, it does not then appear in the services list..
> 
> What am I missing?

The most important part of the article you linked, is here

> **To add a custom action to the setup project**
> 
> > 1.In Solution Explorer, right-click the setup project, point to View, then choose Custom Actions. The Custom Actions editor appears.
> > 
> > 2.In the Custom Actions editor, right-click the Custom Actions node and choose Add Custom Action. The Select Item in Project dialog box appears.
> > 
> > 3.Double-click the application folder in the list box to open it, select primary output from MyNewService (Active), and click OK. The primary output is added to all four nodes of the custom actions � Install, Commit, Rollback, and Uninstall.
> > 
> > 4.Build the setup project.

If you skip these steps, your setup project will build and copy your files to the correct directory; however, they will not register your binary as a service without these steps.

* * *

I should also note that this works for older versions of Visual Studio that had/have the built-in Setup/Deployment project template. The newer versions of Visual Studio have different setup/deployment projects (some requiring third party software.)

I'd recommend looking into [WiX Toolset](http://wixtoolset.org/) and check here for [WiX Installation of Windows Services.](http://blog.tentaclesoftware.com/archive/2009/01/01/21.aspx)

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/1560480) — 118 upvotes *(accepted answer)*. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
