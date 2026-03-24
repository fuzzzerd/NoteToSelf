---
title: "How do I add one single value to a JSON array?"
description: "My answer to \"How do I add one single value to a JSON array?\" on Stack Overflow"
date: 2011-06-30
author:
  name: Nate Bross
tags:
  - javascript
  - json
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/6538271"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/6538214):*

> I am kind of new to the world of interface, and i found JSON is amazing, so simple and easy to use. But using JS to handle it is pain !, there is no simple and direct way to push a value, check if it exists, search, .... nothing !
> 
> and i cannot simply add a one single value to the json array, i have this :
> 
> ```
> loadedRecords = {}
> 
> ```
> 
> i want to do this :
> 
> ```
> loadedRecords.push('654654')
> loadedRecords.push('11')
> loadedRecords.push('3333')
> 
> ```
> 
> Why this is so hard ???!!!

*I posted the following answer:*

Whats wrong with:

```
var loadedRecords = [ '654654', '11', '333' ];

```

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/6538271) — 0 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
