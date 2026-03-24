---
title: "How to reduce App (.apk) Size"
description: "My answer to \"How to reduce App (.apk) Size\" on Stack Overflow"
date: 2010-09-28
author:
  name: Nate Bross
tags:
  - android
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/3815311"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/3815269):*

> Help!
> 
> When I install my app on the phone to test, **it is showing up to be a HUGE size, 11.35 MB**. It is a very simple app that lets user browse through fun-facts. The only reason I can think of is that there are 14 JPEG files in the drawables which serve as background images of the fun-facts. The average size of these is about 500 KB.
> 
> I'd like to trim the size of my app, so as not to use up the precious resources on the user's device. Other than just getting rid of the pictures, are there ways to optimize the size of apk file?
> 
> EDIT: The pictures are photos taken by me using the Android phone itself.

*I posted the following answer, which was chosen as the accepted answer and received 24 upvotes:*

I would recommend that you compress the `.jpg` files as much as possible, this should greatly reduce the size of your `.apk` file. A tool such as [Paint.NET](http://www.getpaint.net/) which is free should help you do this. It has great resizing options.

<details>
<summary>Notable comments</summary>

**Nate** (0 upvotes): Good point, but depending on the level of compression in the images, there could be room for additional compression in addition to reducing the size.

</details>

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/3815311) — 24 upvotes *(accepted answer)*. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
