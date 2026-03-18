---
title: "Use JavaScript in ASP.Net"
description: "My answer to \"Use JavaScript in ASP.Net\" on Stack Overflow"
date: 2014-05-18
author:
  name: Nate Bross
tags:
  - c#
  - javascript
  - asp.net
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/23724393"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/23724360):*

> I know JavaScript and asp.net but this is first time I am using JavaScript in asp.net . I face a little problem.
> 
> My problem is JS function `isvaliduser()` return true or false,all time '`cObj.Save(courseObj)`' is called ! I need when JS function return true only that time `cObj.Save(courseObj)` will call otherwise `cObj.Save(courseObj)` will not call.
> 
> This is my code :
> 
> ```
>  CGateway cObj = new CGateway ();
>  protected void saveButton_Click(object sender, EventArgs e)
>  {
>      CInfo cInfoObj = new CInfo();
>      cInfoObj.AName= ANameTextBox.Text;
> 
>      cObj.Save(courseObj);
>  }
> 
> ```
> 
> JavaScript :
> 
> ```
> function isvaliduser()
> {
>     var uid;
>     var temp = document.getElementById("<%=ANameTextBox.ClientID %>");
>     uid = temp.value;
>     if(uid == "")
>     {
>        alert ("Please Enter UserName”);
>        return false;
>     }
>     else
>     {
>         return true;
>     }
> }
> 
> ```
> 
> ASPX:
> 
> ```
> <asp:Button ID="saveButton" runat="server" Text="Save"
> OnClientClick ="javascript:isvaliduser()" />
> 
> ```
> 
> How can I do it? Thank you.

You need the OnClientClick to return true or false (which if true will submit the button and if false will not). Something like this should work:

```
<asp:Button ID="saveButton" 
    runat="server" 
    Text="Save" 
    OnClientClick="return isvaliduser();" />

```

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/23724393) — 3 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
