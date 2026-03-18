---
title: "Why does max-width behave counter intuitively on columns in a table?"
description: "A question I asked on Stack Overflow"
date: 2012-11-27
author:
  name: Nate Bross
tags:
  - html
  - cross-browser
  - css
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/q/13595873"
---

*I [asked this on Stack Overflow](https://stackoverflow.com/q/13595873):*

Basically, I have a stretchy table, I want my label column to be fixed width and my data column to be dynamically sized. My inclination would be to set the `max-width` via CSS on my label column. However, this has **_the opposite_** effect. [I've created a jsfiddle that replicates this.](http://jsfiddle.net/gTbpZ/) (Re-size the window to see the left column dynamically sized and the right column fixed size)

On my own site, I see the same behavior and it happens in IE and Chrome.

[If I switch it, and set `max-width` on the data column](http://jsfiddle.net/5ZNSA/1/), everything behaves as I want, but it feels backwards to me. Am I doing something wrong here?

---

> [Anagio answered](https://stackoverflow.com/a/13609946) (1 upvotes):
>
> Using chrome developer tool removing max-width from your data column doesn't affect it. It's not needed in that column for that class. Because the table is 100% width and now only your label column has the width set which is holding it's size. So I guess its working?

<details>
<summary>Notable comments</summary>

**Nate** (0 upvotes): @Anagio post your suggestion as an answer and I can accept it. Removing the width completely from the data column behaves correctly.

**Nate** (0 upvotes): @Anagio That JS fiddle works as I would expect. I will try on my full site and report back.

**Nate** (0 upvotes): @Anagio That doesn't seem to do what I want, checkout my second fiddle which does what I want, but with max-width assigned to what seems to me the wrong class: [jsfiddle.net/5ZNSA/1](http://jsfiddle.net/5ZNSA/1/)

**Nate** (0 upvotes): @Anagio, I am using this for a detail view of my data. In this case, I am not using a `<th>` tag on the table.

</details>

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/q/13595873) — 0 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
