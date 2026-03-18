---
title: "Pure Javascript application with ASP.NET"
description: "My answer to \"Pure Javascript application with ASP.NET\" on Stack Overflow"
date: 2010-12-02
author:
  name: Nate Bross
tags:
  - javascript
  - asp.net
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/4337085"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/4337049):*

> In your opinion, what's the best way to create the server side to a pure Javascript application with ASP.NET?
> 
> WCF rendering JSON? IHttpHandler?
> 
> **Update**
> 
> Like GMail, that runs in the browser (with a lot of Javascript) and submit and receive data with Ajax, for example.

Yeah, I'd say a WCF service returning JSON. Another option, though less intuitive, would be to use ASP.NET MVC and return JSON.

After your updated question, I would really recommend ASP.NET MVC it will allow you to have a ton of flexibility, and provide exactly what your asking for.

<details>
<summary>Notable comments</summary>

**Nate** (0 upvotes): After the update, yes that would make much more sense; at first I was thinking the OP wanted to simply create a Web Service style back-end for his app.

</details>

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/4337085) — 1 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
