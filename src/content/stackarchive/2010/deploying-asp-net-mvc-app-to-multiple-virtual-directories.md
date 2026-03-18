---
title: "Deploying ASP.NET MVC App to Multiple Virtual Directories (Issues with URL references &amp; JS files)"
description: "My answer to \"Deploying ASP.NET MVC App to Multiple Virtual Directories (Issues with URL references &amp; JS files)\" on Stack Overflow"
date: 2010-02-10
author:
  name: Nate Bross
tags:
  - javascript
  - asp.net-mvc
  - html-helper
  - urlhelper
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/2238458"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/2229468):*

> I'm not sure if I have my question named correctly but here's the issue:
> 
> I have an MVC.NET app that is deployed at multiple virtual directories. The reason for this is because we have different versions under various stages of QA.
> 
> The problem with this is that in one site the .js references are for
> 
> > /**VirtualDir**/scripts/file.js
> 
> and on another site it's
> 
> > /**OtherVirtualDir**/scripts/file.js
> 
> Another aspect of this issue is that I have HtmlHelpers that create links. The problem with this is that I don't have a UrlHelper in the HtmlHelper methods. Is it 'ok' to pass the UrlHelper from the view into the HtmlHelper? Can I get this to generate the tags?
> 
> Has anyone else had to deal with these kinds of issues? Any suggestions?
> 
> Thanks
> 
> Dave

When making references to files from a View in MVC, I always use this

```
<script src="<%= Url.Content ("~/Scripts/jquery-1.3.2.js") %>" type="text/javascript"></script>

```

Since View refferences are relative to the resource requesting them, using this bit of Javascript in your master page can help if you need "relative" paths inside your .JS files.

```
<script type="text/javascript">var imgRoot = '<% = Page.ResolveUrl("~/Images/") %>';</script>

```

And finally, CSS works just fine, since all paths in CSS are relative to the location of the .css file.

<details>
<summary>Notable comments</summary>

**Nate** (0 upvotes): What you have will work just as well, I only posted as an alternate solution for those who find this down the road.

</details>

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/2238458) — 1 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
