---
title: "Dynamic width DIV next to a static width DIV"
description: "A question I asked on Stack Overflow"
date: 2010-01-20
author:
  name: Nate Bross
tags:
  - asp.net
  - html
  - css
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/q/2105154"
---

*I [asked this on Stack Overflow](https://stackoverflow.com/q/2105154):*

Its in all in the title.

I'm trying to get a div on the left of the page to a static width 170px; this works fine.

What I'm having issues with is getting a div next to it, that scales to fit the remaining width.

Is there a simple approach I can use here?

---

> [Nick Craver answered](https://stackoverflow.com/a/2105179) (4 upvotes):
>
> On the right-hand div, just set a margin:
> 
> ```
> style="margin-left: 170px;"
> 
> ```
> 
> Here's an example page, works here:
> 
> ```
> <html>
>   <head>
>     <title>Jquery Test</title>
>     <script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.4.0/jquery.min.js"></script>
>     <script type="text/javascript">
>       $(function()  {
>         var right = $("#right");
>         $("#toggle").click(function() {
>           $("#left").animate({"width": "toggle"}, {
>             duration: 250,
>             step: function() {
>                 right.css("margin-left", $(this).width());
>             }
>           }, function() { right.css("margin-left", $("#left").width()); });             
>         });
>       });
>     </script>
>     <style type="text/css">
>       #left { width: 170px; float: left; border: solid 1px red; }
>       #right { margin-left: 170px; border: solid 1px green; }
>     </style>
>   </head>
>   <body>
>     <div id="left">Test</div>
>     <div id="right">Test Right</div>
>     <input id="toggle" value="Open/Close" type="button" />    
>   </body>
> </html>
> 
> ```

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/q/2105154) — 2 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
