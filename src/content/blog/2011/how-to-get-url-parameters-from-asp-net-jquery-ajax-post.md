---
title: "How to get URL Parameters from asp.net / jQuery.ajax POST?"
description: "My answer to \"How to get URL Parameters from asp.net / jQuery.ajax POST?\" on Stack Overflow"
date: 2011-01-12
author:
  name: Nate Bross
tags:
  - asp.net
  - web-services
  - post
  - jquery
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/4674605"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/739067):*

> I am trying to figure out how to get the parameters that are passed in the URL from a jQuery plugin that I am using. Basically, I'm sending a POST ajax request to my web service and trying to use the URL parameters, but they are always returned as nothing. I'm assuming this has to do with the fact that I'm in a POST.
> 
> Can anyone please provide some insight for me on how to accomplish this?

*I posted the following answer, which was chosen as the accepted answer:*

If you're using asp.net WebForms, I recommend using the ScriptManager to generate a javascript proxy to your web-service, and then use that javascript proxy instead of manually doing an ajax call. Here's a quick tutorial/walk-through on using ScriptManager with web services: [http://msdn.microsoft.com/en-us/magazine/cc163354.aspx](http://msdn.microsoft.com/en-us/magazine/cc163354.aspx)

Something roughly like this:

```
// in html you have this
<script src="WebService.asmx/jsdebug" type="text/javascript"></script>

// csharp web-service like this
[WebMethod]
public int Add(int a, int b) { return a + b; } 


// further javascript to call it
function CallAdd()
{
    // method will return immediately
    // processing done asynchronously
    WebService.Add(0,6, OnMethodSucceeded, OnMethodFailed);
}

```

This should eliminate the need to post parameters via query-string, which is typically not supported in a soap environment, as the service expects a well-formed soap message.

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/4674605) — 0 upvotes *(accepted answer)*. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
