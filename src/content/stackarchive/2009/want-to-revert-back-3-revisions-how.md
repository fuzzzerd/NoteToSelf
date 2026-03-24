---
title: "Want to revert back 3 revisions, how?"
description: "My answer to \"Want to revert back 3 revisions, how?\" on Stack Overflow"
date: 2009-10-15
author:
  name: Nate Bross
tags:
  - asp.net
  - visual-studio
  - svn
  - tortoisesvn
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/1573802"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/1573769):*

> Let's say I have a user's object, I deleted a property and all things in the web project that used this property (admin pages that updated the property, data layer etc etc).
> 
> Now I was told that we need that property, looking at Subversions log it seems the correct code is 3 revisions back.
> 
> How can I go back, then somehow get any updates that may have occurred by other devleopers also?

*I posted the following answer:*

You'll need to know which files you want, and update all to "HEAD" and then those specific files to "HEAD - 3" revision number. Then you'll need to commit those specific files back.

There maybe a better option that I'm not aware of.

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/1573802) — 0 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
