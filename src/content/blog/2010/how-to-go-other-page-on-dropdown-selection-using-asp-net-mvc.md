---
title: "how to go other page on dropdown selection using asp.net mvc"
description: "My answer to \"how to go other page on dropdown selection using asp.net mvc\" on Stack Overflow"
date: 2010-03-11
author:
  name: Nate Bross
tags:
  - asp.net
  - javascript
  - html
  - asp.net-mvc
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/2427956"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/2427926):*

> I have a dropdownlist box on my page.. with A B C D E F each pages have different images.
> 
> Once If I select A I need display one Image like B I need to display other image/table on the page.
> 
> Can any one tel me how to do this?

*I posted the following answer, which was chosen as the accepted answer:*

I'd use jQuery, quick example to get you started:

```
$('#dropDownList').change(
    function() { 
        $('#contentDiv').html("<img src='yourjpg.jpg' alt='alt text' />"); 
    });

```

You will want to check some values and pick the correct jpg based on the value selected, but that should get you started.

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/2427956) — 0 upvotes *(accepted answer)*. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
