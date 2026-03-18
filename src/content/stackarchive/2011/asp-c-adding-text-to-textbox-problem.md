---
title: "ASP/C#, adding text to textbox problem"
description: "My answer to \"ASP/C#, adding text to textbox problem\" on Stack Overflow"
date: 2011-03-03
author:
  name: Nate Bross
tags:
  - c#
  - asp.net
  - textbox
  - label
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/5184530"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/5184498):*

> For some reason, I cannot get text into any textbox or label!
> 
> I'm using Master pages and the code is going in the code behind view. I have created the textbox:
> 
> ```
> <asp:Textbox ID="whatever" runat="Server">
> 
> ```
> 
> When I want to add some text I simply add the code in the code behind view like:
> 
> ```
> whatever.Text = "myText";
> 
> ```
> 
> I get an error that says:
> 
> ```
> "System.NullReferenceException:Object reference not set to an instance of an object"
> 
> ```
> 
> hightlighting this line in red: whatever.Text = "myText";
> 
> I guess its because it saying it not there but how can it let me reference the textbox?
> 
> Apologies if the answer is on the site, I have searched but found nothing. :)
> 
> This is my code in Basket.asp - I've changed the textbox to a label, it's called bskItems
> 
> `<asp:Content ID="Content3" ContentPlaceHolderID="ContentPlaceHolder3" runat="server"> <asp:Label ID="bskItems" runat="server"></asp:Label> <div id="cart"> <asp:Button ID="btnCheckout" CssClass="BasketBtnAdd" runat="server" CommandName="checkout" Text="Checkout" /> </div> </asp:Content>`
> 
> This is my masterpage, where I'm using a loginView. ContentPlaceHolder3 is where the textbox should be. I only want it to display a count of items.
> 
> ```
> <asp:LoginView ID="loginView" runat="server">
>     <LoggedInTemplate>
>     <asp:LoginName ID="loginName" runat="server" FormatString="Hi, {0}!"/>
>     (<asp:LoginStatus ID="loginStatus" runat="server" />)
>     <% 
>     if (HttpContext.Current.User.IsInRole("Admin"))
>     { 
>     %>
>     <asp:SiteMapDataSource ID="admin" SiteMapProvider="admin" runat="server" ShowStartingNode="false" />
>     <asp:Menu ID="Menu" runat="server" DataSourceID="admin">
>         <StaticItemTemplate>
>             <%# Eval("Text") %>
>         </StaticItemTemplate>        
>     </asp:Menu>
>     <%
>     }
>     if (HttpContext.Current.User.IsInRole("Users"))
>     { 
>     %>
>     <asp:SiteMapDataSource ID="user" runat="server" SiteMapProvider="user" ShowStartingNode="false" />
>     <asp:Menu ID="Menu1" runat="server" DataSourceID="user">
>         <StaticItemTemplate>
>             <%# Eval("Text") %>
>         </StaticItemTemplate>        
>     </asp:Menu>
> 
>     <%
>     }
>     %>
>     <asp:ContentPlaceHolder ID="ContentPlaceHolder2" runat="server"></asp:ContentPlaceHolder>
>     <asp:ContentPlaceHolder ID="ContentPlaceHolder3" runat="server"></asp:ContentPlaceHolder>
>     </LoggedInTemplate>
>     <AnonymousTemplate>
>         <asp:LoginStatus ID="loginStatus" runat="server" />
>         <asp:SiteMapDataSource ID="anon" runat="server" SiteMapProvider="anon" ShowStartingNode="false" />
>         <asp:Menu ID="Menu2" runat="server" DataSourceID="anon">
>         <StaticItemTemplate>
>             <%# Eval("Text") %>
>         </StaticItemTemplate>        
>     </asp:Menu>
>     </AnonymousTemplate>
> 
> </asp:LoginView>
> 
> ```

When accessing Master Page members from Code-Behind in a Content Place Holder file, I believe you need to do:

```
this.Master.whatever.Text = "new Text";

```

Check this link on [ASP.NET Master Pages](http://msdn.microsoft.com/en-us/library/wtxbf3hh.aspx), from MSDN.

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/5184530) — 0 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
