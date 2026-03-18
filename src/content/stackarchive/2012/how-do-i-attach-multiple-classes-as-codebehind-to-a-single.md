---
title: "How do I attach multiple classes as Codebehind to a single ASP.Net page?"
description: "My answer to \"How do I attach multiple classes as Codebehind to a single ASP.Net page?\" on Stack Overflow"
date: 2012-08-10
author:
  name: Nate Bross
tags:
  - c#
  - asp.net
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/11905817"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/11905665):*

> I have inherited an interesting ASP page. The page presents various reports to the user. The report type is chosen by the user from a left menu before the report page is loaded. The reports page uses a relatively small set of screen elements to query the user for the report parameters, for example the start and end date for the report, but there are ~20 different reports. Each report decides which of these elements to show, then when requested generates the report on the back end and shows the report in a GridView modified to show the particular report.
> 
> Actually it's not too bad a structure. The problem is that the backing code file is now ~4000 lines of code. Much of that is either switch or if then else statements asking which report type it is and then handling special cases for the specific report.
> 
> What I would like to do is push each report into its own class file, inheriting from the base report page class and implementing its own specific changes as necessary. Then during page load choose the appropriate class (we know this since the menu choice loading the page chooses the report type) as the backing code.
> 
> Thoughts on how to accomplish this?

A partial class is the easy route, because you can move code around but its still all in the same class, so scope is not impacted.

Refactoring into separate classes is probably a better idea, but it sounds right now like your code is tightly coupled to the aspx page -- this is something you should change at the same time. Even if all your new classes do is return a `DataTable` that gets bound to the GridView.

I would probably try a structure like this:

aspx -- code to gather input from user, and then instantiate the right report class and databind.

```
switch(this.ddlReportType.SelectedItem)
{
    case ReportType.UserActivity:
        var uar = new UserActivityReport(this.StartDate, this.EndDate, this.PageSize);
        this.GridView1.DataSource = uar.GetReport();
        break;
}

```

As for refactoring your reporting code, I would recommend you start simple and make a class for each report. Then over time, start chipping away at the common elements and refactor those into a base class. If there are some really obvious and easy to combine common elements, start those in a base class right away, but I'd focus on getting each report into its own class, since from your description it sounds like they are complex enough to warrant it.

<details>
<summary>Notable comments</summary>

**Nate** (0 upvotes): @user1542042 If the code behind is doing too much manipulation of what is visible and what is not, to me, that is an indication that you have too many different things on the page and you should break it up into different pages. If you have common elements, you could inherit from your own base class that also inherits from `Page`

</details>

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/11905817) — 1 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
