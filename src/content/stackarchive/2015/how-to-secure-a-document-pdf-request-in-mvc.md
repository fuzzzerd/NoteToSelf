---
title: "How to secure a document/pdf request in MVC?"
description: "My answer to \"How to secure a document/pdf request in MVC?\" on Stack Overflow"
date: 2015-03-04
author:
  name: Nate Bross
tags:
  - c#
  - asp.net-mvc-3
  - model-view-controller
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/28861570"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/28861466):*

> I am wondering what is the preferred practice to secure document.
> 
> If I have a link in my page like:
> 
> ```
> option 1)   http://myserver/documents/mydoc.pdf
> 
> ```
> 
> can I secure it using a filter to check if the user is logged in or has the correct role?
> 
> my first thinking was to create an action call ViewDoc. In ViewDoc I would check the permissions etc and then read the file in and send it to the response.
> 
> so my request would look something like this:
> 
> ```
> option 2)    http://myserver/mycontroller/ViewDoc/17
> 
> ```
> 
> If I go with option 2, do I need to have my files outside the web folder? If I have in the web folder, could a user make a request directly to the file? any other options or suggestions?

*I posted the following answer, which received 2 upvotes:*

Your proposed solution is the correct way to do this.

You will use a [`FileResult`](https://msdn.microsoft.com/en-us/library/system.web.mvc.fileresult\(v=vs.118\).aspx) action (unless you have good reason not to) and in that action you will probably use `[Authorize]` and perform any business logic necessary to validate the user should be reading it. Then you return the file using the controller's [`File()`](https://msdn.microsoft.com/en-us/library/dd492593\(v=vs.118\).aspx) function.

```
[Authorize]
public FileResult ViewDoc(int id)
{
    // do things, maybe lookup file path of document from database
    return File(pathToYourFile, "document/pdf", "downloadedFileName.pdf");
}

```

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/28861570) — 2 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
