---
title: "Pass Values from ASPX Page to User Control"
description: "My answer to \"Pass Values from ASPX Page to User Control\" on Stack Overflow"
date: 2014-06-05
author:
  name: Nate Bross
tags:
  - asp.net
  - user-controls
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/24066830"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/24066601):*

> I have a value in Page Load. I want to pass that value to User control.
> 
> ```
> Protected Sub Page_Load(ByVal sender As Object, ByVal e As System.EventArgs) Handles Me.Load
>     UserEmail = UserSession.EmployeeEmail
> End Sub
> 
> ```
> 
> How Can I pass this UserEmail to User control ?

Assuming that `UserEmail` is a custom user control and assuming that `UserSession.EmployeeEmail` is a `string` you could do the following:

In the definition for your custom control, you add a public property

```
' user control code behinde
Public Property  EmailAddress As String

```

Then in the page that is hosting the user control

```
' page load of host aspx
UserEmail.EmailAddress = UserSession.EmployeeEmail

```

In my example here I used `String` but as long as the type matches between your user control property and the `UserSession.EmployeeEmail`, you should be good to go.

<details>
<summary>Notable comments</summary>

**Nate** (0 upvotes): Then what exactly is the issue? I need to see more code, specific to the issue, to see what is going wrong.

</details>

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/24066830) — 0 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
