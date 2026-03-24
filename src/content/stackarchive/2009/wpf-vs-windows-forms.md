---
title: "WPF vs. Windows Forms"
description: "My answer to \"WPF vs. Windows Forms\" on Stack Overflow"
date: 2009-05-19
author:
  name: Nate Bross
tags:
  - wpf
  - winforms
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/885283"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/885266):*

> ### Duplicate:
> 
> > *   [WPF vs WinForms or Rich UI vs Stable Applications? What do you think about the future of the Windows Forms platform?](https://stackoverflow.com/questions/442667/wpf-vs-winforms-or-rich-ui-vs-stable-applications-what-do-you-think-about-the-fu)
> > *   [When is Winforms the correct choice vs. WPF?](https://stackoverflow.com/questions/388711/when-is-winforms-the-correct-choice-vs-wpf)
> > *   [WPF versus Winforms](https://stackoverflow.com/questions/202079/wpf-versus-winforms)
> > *   [Advantage of WPF app vs Winform for business apps?](https://stackoverflow.com/questions/636028/advantage-of-wpf-app-vs-winform-for-business-apps/636921)
> > *   [WPF, Winforms, or something else?](https://stackoverflow.com/questions/504014/wpf-winforms-or-something-else)
> 
> * * *
> 
> What are the pros and cons of WPF compared to Windows Forms?

*I posted the following answer, which received 3 upvotes:*

WPF will require .NET 3.0 (or later) and will lend itself toward better seperation of your presentation / business logic / data access layers. If you have a UI Designer or you are proficent in Expression Blend WPF is probably the way to go.

If there is not a UI Designer and seperation of concerns is not an issue, WinForms will not introduce any additional learning curve to your project.

<details>
<summary>Notable comments</summary>

**Nate** (0 upvotes): Yes, but even with WinForms a high level of separation can be achieved, WPF just makes it easier to do the right thing ;)

</details>

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/885283) — 3 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
