---
title: "Importance of Code Formatting Specificly Spacing"
description: "A question I asked on Stack Overflow"
date: 2009-05-15
author:
  name: Nate Bross
tags:
  - coding-style
  - code-formatting
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/q/870578"
---

*I [asked this on Stack Overflow](https://stackoverflow.com/q/870578):*

How important is it for readability that code be in this form:

```
public void DoStuff()
{
    var v = new Object();
    v.PropertyID = "abc";
    v.Type = "abc";
    v.Style = "abc";
    v.SetMode(Mode.Abc);
    v.Draw();
}

```

vs.

```
public void DoStuff()
  {
    var v = new Object();
        v.PropertyID = "abc";
        v.Type = "abc";
      v.Style = "abc";
       v.SetMode(Mode.Abc);
   v.Draw();
    }

```

I tend to like the first style best, it makes things easy to read, how would you gently guide people towards the former and away from the latter? Or would you not?

---

> [John G answered](https://stackoverflow.com/a/870609) (2 upvotes):
>
> Do people actually write code that looks like the latter? That's a maintainability nightmare.
> 
> I would argue that it's not so important what your code formatting conventions are -- more that you follow them consistently. The former example is not consistent and therefore unreadable and unmaintainable.
> 
> If you're having troubles guiding people toward consistency, have them imagine going back to maintain highly inconsistent code in a year.

<details>
<summary>Notable comments</summary>

**Nate** (0 upvotes): Yes, thats exactly what it was (before it was edited by Bob). The question was (or should be), how would you encourage someone to spend time to format their code to appear as the first style, for the benifit of the next person instead of leaving the formatting to look as though it was a random amount of spaces different on every line.

</details>

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/q/870578) — 1 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
