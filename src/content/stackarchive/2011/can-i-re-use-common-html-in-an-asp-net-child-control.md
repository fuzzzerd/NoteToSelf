---
title: "Can I Re-Use Common Html in an ASP.NET Child Control?"
description: "My answer to \"Can I Re-Use Common Html in an ASP.NET Child Control?\" on Stack Overflow"
date: 2011-02-04
author:
  name: Nate Bross
tags:
  - c#
  - asp.net
  - html
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/4902110"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/4902038):*

> I have 5 or so different pieces of HTML in my page that contain the same scaffolding HTML surrounding it, something like this:
> 
> ```
> //PanelBase.ascx
> 
> <div class="panel" id="[PANEL-SPECIFIC-ID]">
>     <h3>[PANEL-SPECIFIC-HEADER]</h3>
>         ...
>         [PANEL-SPECIFIC-HTML]
>         ...
>     </h3>
> </div>
> 
> ```
> 
> Where all the PANEL-SPECIFIC things are different for each panel type. Is there a way I can create a common base control to handle this scaffolding and inherit from it to supply the PANEL-SPECIFIC-HTML? The PANEL-SPECIFIC-ID and PANEL-SPECIFIC-HEADER I can just pass to the panel directly, but since the panel specific HTML is so large I don't want to pass it directly as a string.
> 
> Or is there some way to do it like this in each child control's ascx file:
> 
> ```
> <my:PanelBase PanelId="myChildPanel" Header="My Child's Header">
>     // HTML for my child panel.
> </my:PanelBase>
> 
> ```
> 
> Basically, I'm looking for some way to reuse the common portions of my control so I don't have to duplicate it for each child.

You might want to look into [Nested Master Pages](http://msdn.microsoft.com/en-us/library/x2b3ktt7.aspx).

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/4902110) — -1 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
