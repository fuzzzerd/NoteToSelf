---
title: "ASP.NET code blocks in server tags"
description: "My answer to \"ASP.NET code blocks in server tags\" on Stack Overflow"
date: 2009-09-29
author:
  name: Nate Bross
tags:
  - asp.net
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/1494261"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/1494235):*

> Can you not have code blocks in server tags? For example, I wish to create custom id fields using code blocks. (I know there are other way to do this with repeaters, but in my particular situation I'd like to do things this way if its possible for irrelevant reasons.)
> 
> ```
> <% foreach(var reference in references) { %>
> ...
> <asp:LinkButton runat="server" ID='lbUpdateEmail_<%=reference.ReferenceId%>' OnClick="lbUpdateEmail_Click" style="float:right;">Update Email</asp:LinkButton>
> ...
> <% } %>
> 
> ```

*I posted the following answer, which received 1 upvote:*

I believe if you turn on ASP 3.0 Classic Compatibility Mode you can do this; that said, I'd really recommend looking into another approach.

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/1494261) — 1 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
