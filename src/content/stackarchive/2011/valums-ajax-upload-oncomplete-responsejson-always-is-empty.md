---
title: "valums Ajax-Upload onComplete responseJSON always is empty !"
description: "My answer to \"valums Ajax-Upload onComplete responseJSON always is empty !\" on Stack Overflow"
date: 2011-07-11
author:
  name: Nate Bross
tags:
  - asp.net
  - ajax
  - file-upload
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/6655204"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/6653917):*

> I'm using [ajax-upload](http://valums.com/ajax-upload/) in a ASP.Net forms app.
> 
> I need to send a string hash which identifies the file once it is saved on the server.
> 
> I'm doing it in the ashx handler emitting a json string, but no matter what i send from the server, in the javascript i'm getting an empty object... what am I doing wrong?
> 
> This is the snippet for the on load method on the ashx // EDITED context.Response.ContentType = "application/json"; context.Response.ContentEncoding = System.Text.Encoding.UTF8; context.Response.Cache.SetCacheability(HttpCacheability.NoCache);
> 
> ```
> ProcessFile(context.Response);
> context.Response.Write("{\"success\": true, \"hash\": " + _myHash + "}");
> 
> ```
> 
> And this is the on complete
> 
> ```
> onComplete: function(id, file, responseJSON) {
>     console.log(responseJSON);
> }
> 
> ```

These are the headers I set when returning JSON data:

```
context.Response.ContentType = "application/json";
context.Response.ContentEncoding = System.Text.Encoding.UTF8;
context.Response.Cache.SetCacheability(HttpCacheability.NoCache);

```

When they are not correct, I've seen strange behavior from various browsers. If changing these does not help, I would try to eliminate the ajax post, to verify that you are infact sending the correct data.

If you're using jQuery, the `$.ajax()` method has a noCache option you may wish to investiage as well.

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/6655204) — 0 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
