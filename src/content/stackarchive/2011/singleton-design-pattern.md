---
title: "Singleton design pattern"
description: "My answer to \"Singleton design pattern\" on Stack Overflow"
date: 2011-04-20
author:
  name: Nate Bross
tags:
  - design-patterns
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/5736338"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/5736295):*

> > **Possible Duplicate:**  
> > [How are singletons handled in a web application?](https://stackoverflow.com/questions/2391191/how-are-singletons-handled-in-a-web-application)
> 
> Is singleton design pattern creates single instance for JVM or single instance for an application?

*I posted the following answer, which received 1 upvote:*

Singleton design pattern is typically implemented at the class level, though it could be implemented at the application level. I believe there is only ever one JVM instance running at a time.

<details>
<summary>Notable comments</summary>

**Nate** (0 upvotes): I have always implemented my singleton classes with static loaders, which determine if an instance has been given, so what you say is true; though the way I've implemented it makes them one and the same.

</details>

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/5736338) — 1 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
