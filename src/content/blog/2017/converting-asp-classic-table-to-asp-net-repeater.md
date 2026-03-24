---
title: "Converting ASP classic table to ASP.NET Repeater"
description: "My answer to \"Converting ASP classic table to ASP.NET Repeater\" on Stack Overflow"
date: 2017-07-18
author:
  name: Nate Bross
tags:
  - asp.net
  - vb.net
  - session
  - repeater
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/45174165"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/45174041):*

> I am trying to modernize this site. I have a report table being generated in the old style like:
> 
> ```
> Dim sTable = "<table class=""stat"">"
> sTable = sTable & "<thead><tr><th colspan=20><Status Report: " & Session("ProcessYear") & "</th></tr>"
> 
> ```
> 
> I am converting this into a Repeater, but I am at a loss as to how to include session data in the `<HeaderTemplate>`. I have:
> 
> ```
> <asp:Repeater id="Dashboard" runat="server">
> <HeaderTemplate>
>     <table class="stat">
>         <thead>
>             <tr><th colspan="20">Appeal Status Report: ???? </th></tr>
> ...
> 
> ```
> 
> Some candidates are `asp:PlaceHolder`, and something like `<%# ((RepeaterItem)Container.Parent.Parent).DataItem %>` (see [Accessing parent data in nested repeater, in the HeaderTemplate](https://stackoverflow.com/questions/1411336/accessing-parent-data-in-nested-repeater-in-the-headertemplate#1411385)), but I'm at a loss as to what that is referencing.
> 
> Not in a position to refactor out the Session dependencies, unfortunately. Any thoughts? I'm fairly new to ASP.NET. My CodeFile for this page is in VB.NET.

*I posted the following answer, which was chosen as the accepted answer and received 1 upvote:*

You need to look into [On Item Data Bound event](https://msdn.microsoft.com/en-us/library/system.web.ui.webcontrols.repeater.onitemdatabound\(v=vs.110\).aspx), so you can do some code-behind work during binding.

You'll want to check the item object, determine if [its a header row,](https://msdn.microsoft.com/en-us/library/system.web.ui.webcontrols.repeateritemeventargs.item\(v=vs.110\).aspx) then access your session object.

Rough adaptation might look like:

> ASPX

```
<asp:Repeater id="Dashboard" runat="server" OnItemDataBound="ItemDataBound">
<HeaderTemplate>
    <table class="stat">
        <thead>
            <tr>
                <th colspan="20">
                    Appeal Status Report: <asp:Label ID="YourLabel"/>
                </th>
            </tr>
        ...
    ...
...

```

> Code Behind

```
void ItemDataBound(Object Sender, RepeaterItemEventArgs e) 
{
    if (e.Item.ItemType == ListItemType.Header) 
    {
        ((Label)e.Item.FindControl("YourLabel")).Text = Session["YourSession"];
    }
}

```

You can also do things with the footer, item and alternating items here as well.

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/45174165) — 1 upvotes *(accepted answer)*. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
