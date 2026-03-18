---
title: "How do I bind an ASP.NET Repeater Control to an IList&lt;String&gt;?"
description: "A question I asked on Stack Overflow"
date: 2009-05-29
author:
  name: Nate Bross
tags:
  - asp.net
  - data-binding
  - repeater
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/q/926961"
---

*I [asked this on Stack Overflow](https://stackoverflow.com/q/926961):*

I've never had to do this, but I'm binding a repeater to a generic list of Strings, and I'm not sure of the correct syntax.

If I was binding to an IList and myType had a property LayerName I'd use this:

```
<asp:Repeater ID="rptChecks" runat="server">
     <ItemTemplate>
          <input type="checkbox" id="<%#Eval("LayerName") %>"/>
     </ItemTemplate>
</asp:Repeater>

```

How can I do this when I'm only binding to a String which does not have any properties to use?

---

> [Andrew Hare answered](https://stackoverflow.com/a/926972) (12 upvotes):
>
> Try this:
> 
> ```
> <asp:Repeater ID="rptChecks" runat="server">
>      <ItemTemplate>
>           <input type="checkbox" id="<%# Container.DataItem %>"/>
>      </ItemTemplate>
> </asp:Repeater>
> 
> ```

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/q/926961) — 4 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
