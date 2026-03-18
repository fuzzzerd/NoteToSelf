---
title: "WebForms Text Input =&gt; Doubles &amp; Strings &amp; Booleans"
description: "A question I asked on Stack Overflow"
date: 2010-04-14
author:
  name: Nate Bross
tags:
  - c#
  - asp.net
  - webforms
  - input
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/q/2638973"
---

*I [asked this on Stack Overflow](https://stackoverflow.com/q/2638973):*

Is there a better way to do "input forms" in WebForms?

I always end up with code like this:

```
Double d = 0; // chuckle inside
if(Double.TryParse(myNumberTextField.Text, out d))
{
    myObject.DoubleVal = d;
}

```

Is there a better way to process free-form "numeric" input.

---

> [Jon answered](https://stackoverflow.com/a/2639087) (1 upvotes):
>
> You can validate the textbox using a compare validator, and then if the page passes validation use the double.Parse method.
> 
> ```
> <asp:TextBox ID="txtDouble" runat="server"></asp:TextBox>
>     <asp:CompareValidator ID="CompareValidator1" runat="server" 
>         ErrorMessage="Input must contain a double." ControlToValidate="txtDouble" 
>         Operator="DataTypeCheck" SetFocusOnError="True" Type="Double"></asp:CompareValidator>
> <br />
> <asp:Button ID="btnSubmit" runat="server" Text="Submit" />
> 
> /*C#*/
> protected void btnSubmit_Click(object sender, EventArgs e)
> {
>     if (Page.IsValid)
>     {
>         double d = double.Parse(txtDouble.Text);
>     }
> }
> 
> ```

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/q/2638973) — 1 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
