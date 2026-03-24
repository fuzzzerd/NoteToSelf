---
title: "Download text as a file from a webpage"
description: "My answer to \"Download text as a file from a webpage\" on Stack Overflow"
date: 2010-09-02
author:
  name: Nate Bross
tags:
  - c#
  - asp.net
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/3629070"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/3629009):*

> I'm downloading text from a website and I want to have the user be able to save it as a file. So, I have the following code that does just that.
> 
> ```
> protected void DownloadFile(string fileName, string content)
> {
>     Response.Clear();
>     Response.ClearContent();
>     Response.ClearHeaders();
>     Response.AddHeader("Content-Disposition", "attachment; filename=" + fileName);
>     Response.ContentType = "text/plain";
>     Response.Write(content);
>     Response.End();
> }
> 
> ```
> 
> The problem I am having is that I get an exception after this code runs. I believe it's due to the fact that I call Response.End(). So, every time a user downloads a file it redirects them to the generic error page because all generic exceptions redirect to that page.
> 
> Any ideas on how I can write text out to a file and not get this error? If I remove Response.End() I get my text and then the rest of the HttpResponse text, but I don't get the error.
> 
> Thanks.

*I posted the following answer, which received 1 upvote:*

First, if this code is inside a .ASPX file, you need to move it out to a .ASHX file. Second, after you've moved to .ASHX you can simply write to the output stream and be done, you shouldn't need a `Response.End();`

This is the link I started with: [http://dotnetperls.com/ashx-handler](http://dotnetperls.com/ashx-handler) -- there isn't much to it. It simply removes a bunch of the asp.net "page" overhead.

* * *

Ideally you should have a page with a list, and a link/button to your "download.ashx" file. Then pass it a record id on the query string so it can do the lookup and response.write calls.

<details>
<summary>Notable comments</summary>

**Nate** (0 upvotes): Posted the link I used, when I started learning about ASHX handlers.

</details>

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/3629070) — 1 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
