---
title: "Updatepanel issue with client side &quot;class&quot; changing of a control inside repeater"
description: "My answer to \"Updatepanel issue with client side &quot;class&quot; changing of a control inside repeater\" on Stack Overflow"
date: 2011-11-21
author:
  name: Nate Bross
tags:
  - c#
  - javascript
  - asp.net
  - updatepanel
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/8215736"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/8215431):*

> I'm having trouble with using UpdatePanel and changing the 'class' attribute of a control inside a repeater by javascript.
> 
> Here some code:
> 
> \--on the aspx--
> 
> ```
> <script type="text/javascript">
>     function changeClass(ctl) {
>         if (ctl.className == "marked") {
>             ctl.className = "unmarked";
>         } else {
>             ctl.className = "marked";
>         }
>     }
> </script>
> <!-- some html -->
> <asp:UpdatePanel ID="upp" runat="server">
>     <ContentTemplate>
>      <asp:Repeater ID="rpt1" runat="server" onitemdatabound="rpt1_ItemDataBound">
>                         <ItemTemplate>
>                             <a id="aButton" runat="server" href="javascript:void(0)">
>                             <!-- some other controls -->
>                             </a>
>                         </ItemTemplate>
>                     </asp:Repeater>
>     </ContentTemplate>
> </asp:UpdatePanel>
> 
> ```
> 
> \--Codebehind--
> 
> ```
> protected void rpt1_ItemDataBound(object sender, RepeaterItemEventArgs e)
> {
>     if (e.Item.ItemType == ListItemType.Item || e.Item.ItemType == ListItemType.AlternatingItem)
>     {
>         MyClass obj = (MyClass)e.Item.DataItem;
> 
>         ((HtmlAnchor)e.Item.FindControl("aButton")).Attributes.Add("class", "marked");
> 
>         //some other code....
>     }
> }
> 
> //method called after the bind on 'rpt1'
> private void mymethod()
> {
>     foreach (RepeaterItem ri in rpt1.Items)
>     {
>         HtmlAnchor aButton = (HtmlAnchor)ri.FindControl("aButton");
>         if (Must-be-unmarked)
>             aButton.Attributes.Add("class", "unmarked");
> 
>         aButton.Attributes.Add("OnClick", "changeClass(this);");
>     }
> }
> 
> ```
> 
> The problem is, when I click on an "aButton" the class is changed normally, but when I come in codebehind and get de 'class' of control to check if it's marked or unmarked, I only get the controls marked in ItemDataBound of repeater, not the "aButton"s marked by me at execution time.
> 
> here is what I do to get the "aButton"s marked:
> 
> ```
> private void checkMarked()
> {
>     foreach (RepeaterItem ri in rpt1.Items)
>     {
>         if (((HtmlAnchor)ri.FindControl("aButton")).Attributes["class"] == "marked")
>         {
>             //do something...
>         }
>     }
> }
> 
> ```

When you change class property from client-side code, the server side will not know about it.

You'll need to add a hidden `<input>` with marked/unmakred so you can check the contents from the server on a post-back.

Another approach would be to sipmly have your javscript postback to the server directly when an item changes from marked/unmakred.

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/8215736) — 1 upvotes *(accepted answer)*. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
