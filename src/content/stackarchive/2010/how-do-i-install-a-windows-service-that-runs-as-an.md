---
title: "How do I install a windows service that runs as an administrator?"
description: "My answer to \"How do I install a windows service that runs as an administrator?\" on Stack Overflow"
date: 2010-09-20
author:
  name: Nate Bross
tags:
  - .net
  - windows-services
  - admin-rights
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/3755071"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/3755051):*

> I've written an installer that installs a windows service (A) that needs to start/stop another service (B). However, when A tries to start/stop B, I get this exception:
> 
> System.InvalidOperationException: Cannot open MyService service on computer '.'. ---> System.ComponentModel.Win32Exception: Access is denied
> 
> The installer installs the service as a local service, and it requests admin rights via the UAC pop-up, which I grant. I've also added an app.manifest file to the service that is set to ask for admin rights:
> 
> Yet I'm still getting that error.
> 
> This is how I start the service (stopping is the same, except it calls Stop, of course):
> 
> ```
> using (Mutex mutex = new Mutex(false, "MyServiceLock"))
> {
>     mutex.WaitOne();
> 
>     if (ServiceExists(serviceName) == true)
>     {
>         using (ServiceController serviceController = new ServiceController(serviceName, "."))
>         {
>             serviceController.Start(); // this line throws the exception
>         }
>     }
> 
>     mutex.ReleaseMutex();
> }
> 
> ```
> 
> Why might access to this service be denied?

*I posted the following answer, which received 1 upvote:*

As a quick test, if you open up `services.msc` and check your server to "run as" and enter your credentials, does the error go away? It may be that the LocalService does not have access to stop other services. Providing the UAC prompt permission is likely only allowing you to install the service in the first place, not telling it to run as administrator.

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/3755071) — 1 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
