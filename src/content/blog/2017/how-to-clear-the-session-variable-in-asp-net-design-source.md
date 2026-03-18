---
title: "How to clear the session variable in asp.net design source file"
description: "My answer to \"How to clear the session variable in asp.net design source file\" on Stack Overflow"
date: 2017-09-01
author:
  name: Nate Bross
tags:
  - javascript
  - c#
  - jquery
  - .net
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/46008309"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/45992987):*

> Session\["pageIndex"\] this is my variable which is used in all aspx.cs pages
> 
> I used
> 
> ```
> $('#btn_click').click(function(){
> sessionStorage.removeItem('pageIndex');
> )}; 
> 
> ```
> 
> to clear the session variable in design source file but it doesn't works
> 
> help me thanks in advance

I recommend you throw the page number into the query string, then in the `Page_Load` event, you check for it. If its there, you go to that page directly, otherwise you load the first page.

This should support browser back button functionality taking you to the correct page.

The issue you're experiencing is that ASP.NET is letting you change the page content without changing the url.

<details>
<summary>Notable comments</summary>

**Nate** (0 upvotes): @SatG\_shanu I recommend that you revert the edit to your question here, and post a new question.

</details>

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/46008309) — 0 upvotes *(accepted answer)*. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
