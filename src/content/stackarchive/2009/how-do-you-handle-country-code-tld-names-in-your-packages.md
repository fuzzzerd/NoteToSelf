---
title: "How do you handle Country Code TLD names in your packages/namespaces?"
description: "My answer to \"How do you handle Country Code TLD names in your packages/namespaces?\" on Stack Overflow"
date: 2009-12-23
author:
  name: Nate Bross
tags:
  - naming-conventions
  - namespaces
  - package
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/1954394"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/1954378):*

> The convention is that you use your company's domain. That is quite simple but what if it is something like www.mycompany.co.uk.
> 
> Now this wouldn't be a problem if it were www.mycompany.com. That is fairly simple com.mycompany.Class
> 
> What are we meant to do with the first?
> 
> uk.co.mycompany.Class OR co.uk.mycompany.Class? Or something else altogether?

If that is how your supposed to write your namespaces, I'd say that `uk.co.mycompany.Class` fits best with your first example.

It also seems to me that this is pretty subjective, and you should define a standard, and stick with it.

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/1954394) — 0 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
