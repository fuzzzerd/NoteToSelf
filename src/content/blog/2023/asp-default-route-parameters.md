---
title: Implied route parameters in ASP.NET Core Form Tag Helpers
date: 2023-03-07
lastMod: 2023-03-07
author: 
  name: Nate Bross
tags: 
  - web development
  - asp.net-core
  - dotnet
---

With a route like `/change/{id}` the ID parameter is implicitly implied if the view contains a form with `method="post"` back to the same action name, for example:

View:

```html
<asp-form asp-action="change" method="post">
```

Controller:

```cs
[HttpPost]
public ActionResult Change(int id, Model model)
```

When changing the form action to to include a change confirmation step:

```html
<asp-form asp-action="confirmChange" method="post">
```

The `id` route parameter was not included by default anymore, so the controller action was receiving a `default(int)`:

```cs
[HttpPost]
public ActionResult ConfirmChange(int id, Model model)
```

ASP.NET Core seems to include the current route parameters when posting back to the same action name.

The fix was fairly simple, you must explicitly include the route parameters on the `<asp-form>` tag when posting across action names.

```html
<asp-form asp-action="change" asp-route-id="@Model.SomeId" method="post">
```

See also: [Stack Overflow on updating route parameters.](https://stackoverflow.com/a/30041366/86860)
