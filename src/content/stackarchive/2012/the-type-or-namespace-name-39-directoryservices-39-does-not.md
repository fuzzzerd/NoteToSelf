---
title: "The type or namespace name &#39;DirectoryServices&#39; does not exist in the namespace?"
description: "My answer to \"The type or namespace name &#39;DirectoryServices&#39; does not exist in the namespace?\" on Stack Overflow"
date: 2012-05-21
author:
  name: Nate Bross
tags:
  - c#
  - asp.net
  - active-directory
  - directoryservices
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/10691055"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/10691001):*

> > CS0234: The type or namespace name 'DirectoryServices' does not exist in the namespace 'System' (are you missing an assembly reference?)
> 
> This page was working fine,show records from directly services with no error. but now it gives the above error.
> 
> ```
>  <asp:GridView ID="gvUsers" runat="server" AutoGenerateColumns="false" DataSourceID="odsUsers"
>                                     AllowPaging="true" AllowSorting="true" Width="100%">
> <Columns>
>  <asp:TemplateField HeaderText="User Name">
>  <ItemTemplate>
> 
> <%#((System.DirectoryServices.DirectoryEntry)Container.DataItem).Properties["userPrincipalName"].Value%>
> 
>    </ItemTemplate>
>    </asp:TemplateField>
> /Columns>
> </asp:GridView>
> 
> ```
> 
> Project builds successfully but when I open the page then it gives error

Looks like you need to add a reference (in your project) to [`System.DirectoryServices`](http://msdn.microsoft.com/en-us/library/system.directoryservices.aspx). Since you're using it in what looks like an aspx markup page, sometimes the compiler will let those fly during "build" but fail when you actually execute the page.

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/10691055) — 0 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
