---
title: "Create dynamically HTML file (Client - Side)"
description: "My answer to \"Create dynamically HTML file (Client - Side)\" on Stack Overflow"
date: 2011-03-04
author:
  name: Nate Bross
tags:
  - javascript
  - jquery
  - html
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/5197323"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/5197290):*

> My question is relativelly simple. I need to construct a script in javascript / jquery if possible which will construct HTML files dynamically. I've read that apparently it's not possible to access to the client system file but aren't they solutions ?

*I posted the following answer:*

The Browser will not have access to save files to the users local drive; however, you can certainly user jQuery to generate HTML and render it to the current browser window.

<details>
<summary>Notable comments</summary>

**Nate** (0 upvotes): No, it will not be a "file" at all, but jQuery can be used to modify the contents of the DOM, which you can use to write your own HTML, giving the appearance of changing the current screen on the fly.

</details>

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/5197323) — 0 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
