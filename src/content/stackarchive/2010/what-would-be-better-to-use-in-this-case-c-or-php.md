---
title: "What would be better to use in this case? c# or php?"
description: "My answer to \"What would be better to use in this case? c# or php?\" on Stack Overflow"
date: 2010-07-19
author:
  name: Nate Bross
tags:
  - c#
  - php
  - javascript
  - jquery
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/3283419"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/3283329):*

> I am making a website where users can upload pictures and draw on them, add text etc. My team knows some php, but we know nothing about c#. Time is not too much of an issue. We all know java, what would the perks of each be? I have been hearing that c# will be much better for handling the canvas because there is a lot more libraries for it? Will it really matter c# of php? for both you have to use javascript and possibly jquery anyway? Keep in mind we are all more than willing to learn c# and we have a windows server also. Let me know your guys thoughts! Thanks!

If you know java, moving into C# shouldn't be that hard. They are similar and the set of classes that come with Java and .NET Framework are similar, but layed out differently.

I use C# and ASP.NET (usually ASP.NET MVC) for ALL of my new web application development, partly because its what I know, but also I just really don't like php [(and I'm not alone).](https://stackoverflow.com/questions/961942/what-is-the-worst-programming-language-you-ever-worked-with/962146#962146)

Thats said, if you're going to be using HTML5/Javascript (you mention canvas) then your backend code will matter less since it will mostly be persisting your data to disk on the server; however, I think that something like Flash or Sliverlight would provide a better end user experience for an on-line image minipulation tool. Either of these can be hosted from a C# web app or a php one.

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/3283419) — 0 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
