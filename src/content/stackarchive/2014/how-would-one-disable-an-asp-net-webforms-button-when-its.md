---
title: "How would one disable an ASP.NET WebForms button when its clicked, and have it be enabled again after postback completes?"
description: "My answer to \"How would one disable an ASP.NET WebForms button when its clicked, and have it be enabled again after postback completes?\" on Stack Overflow"
date: 2014-06-04
author:
  name: Nate Bross
tags:
  - c#
  - asp.net
  - user-interface
  - background-process
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/24046896"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/24046657):*

> What I would like to do is be able to disable a button as soon as it pressed, perform an operation, and re-enable the button. Seemed simple enough, but my button doesn't update when I need it to. I tried an update panel, but I'm not sure if I'm using it correctly. Am I doing something wrong? Or is there a better way to achieve this?
> 
> ## HTML
> 
> ```
> <asp:UpdatePanel runat="server" ID="updateSubmitButton">
>     <ContentTemplate>
>         <a href="#resultsSet"><asp:Button ID="btnSearch" CssClass="CrossoverButton" runat="server" Text="Search" OnClick="btnSearch_Click" /></a>
>     </ContentTemplate>
> </asp:UpdatePanel>
> 
> ```
> 
> ## C#
> 
> ```
> protected void btnSearch_Click(object sender, EventArgs e)
> {
>     btnSearch.Enabled = false;
>     updateContent();
> 
>     // Do a lengthy operation here.
> 
>     btnSearch.Enabled = true;
> }
> 
> ```

You will need to use a client side technology to disable the button. This is because when you click the button, the page does a post back to itself, which tells the server to execute `btnSearch_Click`. Based on your code this will

1.  Disable the button
2.  Update the content
3.  Re-enable the button

all of this happens on the server. Only after the method has finished executing, does it return context to the page.

In order to disable the button on click, you'll want to try something this:

```
<asp:Button ID="btnSearch" CssClass="CrossoverButton" runat="server" Text="Search"
    OnClientClick="this.disabled = true;"
    UseSubmitBehavior="false" />

```

> ```
>    OnClientClick="this.disabled = true;"
> 
> ```

This line registers the client click handler, to disable itself.

> ```
>    UseSubmitBehavior="false"
> 
> ```

This line tells ASP.NET to include the disabled element in the form post, so the server knows which control registered the postback.

See also -- [https://stackoverflow.com/a/11832053/86860](https://stackoverflow.com/a/11832053/86860)

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/24046896) — 6 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
