---
title: "Jquery .each loop"
description: "My answer to \"Jquery .each loop\" on Stack Overflow"
date: 2011-03-14
author:
  name: Nate Bross
tags:
  - jquery
  - ajax
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/5305173"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/5305130):*

> I'm totally new to jquery but I have a .each loop that fetches some data using ajax and then updates list elements. Right now the .each loop does all list elements at the same time... I need it to do the first one, wait till its done then do the second one etc. etc. I do **NOT** want to use delay. I want the loop to actually wait until the data is fetched then move on to the next element. Please no faking it using delay. Here is my code simplified.
> 
> ```
> $(document).ready(function() {
>     $.ajaxSetup({cache:false});
>     $('#friendslist li').each(function(index) {
>         var post_id = $(this).attr("id")
>         $(this).find(".status div").html("<img src='http://www.url.com/image.jpg'/>");
>         $(this).find("#replace").load("http://www.url.com/ajaxstuff",{id:post_id});
>     })
> });
> 
> ```
> 
> Thanks in advance for the help!

You'll need to restructure you code. You to run the next "query" in the callback of the prior query. Since .load will run asynchronously.

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/5305173) — 0 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
