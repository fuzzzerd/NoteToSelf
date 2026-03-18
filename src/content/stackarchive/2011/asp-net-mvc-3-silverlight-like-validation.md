---
title: "asp.net mvc 3 silverlight like validation"
description: "My answer to \"asp.net mvc 3 silverlight like validation\" on Stack Overflow"
date: 2011-08-24
author:
  name: Nate Bross
tags:
  - c#
  - jquery
  - asp.net-mvc
  - validation
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/7179914"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/7131775):*

> **MAIN QUESTION**
> 
> As the title says, i'm asking if anyone knows how to create a validation structure similar to silverlight's dataform. Any hints, materials , ideas would be welcome. I'd like to do a validation like this:
> 
> ![enter image description here](https://i.sstatic.net/y4hth.png)
> 
> (You can check this out [here](http://www.silverlight.net/content/samples/sl4/toolkitcontrolsamples/run/default.html))
> 
> **DETAILS**
> 
> I've been trying to something like the example above, but without results until now. Mostly because i dont' know how the validation message helper works. I've managed to a single validation message by taking the data-val-number attribute and set it into a link title (using a third party jquery plugin callled qTip to show a tooltip error message). However, i can't do the same thing if there are more than one validation.
> 
> So, is it possible to rewrite the validation message helper? I'd like to understand more how it shows the validation messages so i can put them on any html content. This would do the tooltip part and i could set as many messages as i want, with any formatting i desire.
> 
> And i'd like to be able to show the validation messages through any jquery events (mouseover, click, dblclick, ready, etc.). As far as i understand on it's actual implementation, the validation only occurs when the user changes focus from the actual input to another html element.

I highly recommend that you checkout the validation rules section in [Professional ASP.NET MVC](http://aspnetmvcbook.s3.amazonaws.com/aspnetmvc-nerdinner_v1.pdf). It shows how to do exactly what you describe with ASP.NET MVC v1 and it works all the way up through v3.

The displayed user interface is slightly different; however, you can check the output and write your own CSS to make it look just like your screenshot.

For a quick example:

**Action Result**

```
try 
{
    // code
}
catch
{
    foreach (var issue in std.GetRuleViolations())
    {
        ModelState.AddModelError(issue.PropertyName, issue.ErrorMessage);
    }
}

```

**Model**

```
public IEnumerable<RuleViolation> GetRuleViolations()
{
    if (!String.IsNullOrEmpty(this.Phone) && !Utility.IsValidPhoneNumber(this.Phone))
    {
        yield return new RuleViolation("Phone is invalid. Try this format: ###-###-####.", "HomePhone");
    }  

    yield break;         
}

```

**Edit View**

```
<% 
    using (Html.BeginForm()) 
    {
%>
<fieldset>
    <legend>Edit</legend>
    <%= Html.ValidationSummary("Create was unsuccessful. Please correct the errors and try again.") %>
    <%= Html.TextBox("Phone", Model.Phone)%>
    <%= Html.ValidationMessage("Phone", "*")%>
    <!-- more fields go here -->
</fieldset>
<% } %>

```

**rule violation class -- lifted from link**

```
public class RuleViolation
{
    public string ErrorMessage { get; private set; }
    public string PropertyName { get; private set; }

    public RuleViolation(string errorMessage)
    {
        ErrorMessage = errorMessage;
    }

    public RuleViolation(string errorMessage, string propertyName)
    {
        ErrorMessage = errorMessage;
        PropertyName = propertyName;
    }
} 

```

<details>
<summary>Notable comments</summary>

**Nate** (0 upvotes): Its copied directly from the book, which is for MVC1. There may be a more elegent way to do it in MVC3, I just don't know it.

</details>

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/7179914) — 0 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
