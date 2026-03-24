---
title: "Is it possible to optimize ASP.NET WebForms to perform as fast as ASP.NET MVC?"
description: "My answer to \"Is it possible to optimize ASP.NET WebForms to perform as fast as ASP.NET MVC?\" on Stack Overflow"
date: 2010-07-13
author:
  name: Nate Bross
tags:
  - asp.net
  - asp.net-mvc
  - performance
  - optimization
  - webforms
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/3239679"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/3239664):*

> There's so much hype about ASP.NET MVC these days, but the truth is that ASP.NET webforms is not going anywhere for some time. Is there any way for current developers to optimize ASP.NET webforms to perform as fast as ASP.NET MVC?
> 
> I have noticed a significant difference in speed between ASP.NET MVC and ASP.NET webforms. MVC is a lot snappier and loads pages faster than webforms. Can I achieve the same with ASP.NET webforms by optimizing it? If yes, what would you recommend?

*I posted the following answer, which received 5 upvotes:*

One reason for that is because of ViewState, among other bloated code rendered as part of an `<ASP:TextBox>`, etc. You should focus on page weight.

Everything else being equal, that is the main performance difference that I'm aware of.

<details>
<summary>Notable comments</summary>

**Nate** (2 upvotes): Yes, but most people do, and that is why MVC seems faster, because its not even an option.

**rick schott** (4 upvotes): You don't have to use ViewState or ASP.NET controls, implementation detail.

</details>

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/3239679) — 5 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
