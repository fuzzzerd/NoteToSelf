---
title: "jQuery Syntax for accessing asp:textbox"
description: "My answer to \"jQuery Syntax for accessing asp:textbox\" on Stack Overflow"
date: 2013-07-18
author:
  name: Nate Bross
tags:
  - jquery
  - asp.net
  - textbox
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/17726444"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/17726362):*

> I'm trying to change the value of an asp:textbox using jQuery using this line of code that I've found referenced in several places:
> 
> ```
> $("#<%= element.ClientID %>").attr('value', "");
> 
> ```
> 
> However, I keep getting a syntax error saying that the first part is an invalid expression. I'm sure it's something simple I'm missing here, just don't know what it is.
> 
> jQuery is linked via the master page and the .js file with the function containing the line in question is individually linked on the specific page.

Your syntax is correct:

```
$('#<%= textbox.ClientID%>').val('new textbox value');

```

is the correct syntax for selecting an `<asp:textbox />` via javascript and in this case jQuery; however, this only works in .ASPX files.

You will need to convert this separate .js file to an in-line script in your .ASPX page for this to work.

Alternatively, you could use a CSS class as a selector, which will work from your external .js file:

In your .JS file

```
$('.uniqueCSSClassName').val('new textbox value');

```

In your .ASPX file

```
<asp:textbox ID="whatever" CssClass="uniqueCSSClassName" />

```

This will allow you to select your text box from an external javascript file. This is not a pretty approach, but it will work. I would go for the first option, and move my .js code into an inline script.

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/17726444) — 1 upvotes *(accepted answer)*. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
