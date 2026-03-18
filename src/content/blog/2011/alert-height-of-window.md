---
title: "Alert height of window"
description: "My answer to \"Alert height of window\" on Stack Overflow"
date: 2011-08-31
author:
  name: Nate Bross
tags:
  - jquery
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/7258122"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/7258098):*

> I'm trying to get the height of the window & document to display through an alert and also when a modal window pops up. I know I need to use `$(window).height();` & `$(document).height();` but other than that I'm not sure what to do.
> 
> **Edit:** The problem that I am trying to solve is that my modal window is adding extra pixels to the bottom of the document so I'm trying to find out the original document height and the height after the modal window is activated.

Something like this

```
alert($(window).height());

```

will show an alert with the height of the window.

<details>
<summary>Notable comments</summary>

**Nate** (0 upvotes): @Rikudo -- OP says: "I'm trying to get the height of the window & document to display through an alert" that is what I answered.

</details>

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/7258122) — 6 upvotes *(accepted answer)*. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
