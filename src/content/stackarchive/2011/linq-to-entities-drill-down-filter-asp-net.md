---
title: "Linq to Entities - Drill down filter (Asp.net)"
description: "My answer to \"Linq to Entities - Drill down filter (Asp.net)\" on Stack Overflow"
date: 2011-05-20
author:
  name: Nate Bross
tags:
  - asp.net
  - filter
  - linq-to-entities
  - three-tier
  - drilldown
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/6078041"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/6049409):*

> I've been searching for a good way of doing multiple "where" filters on an entity collection from linq. There are lots of sites that use a filter for their searches on the side, like ebay.
> 
> The technique used is called a "drill down" filter. Now I'm trying to find the right way of implementing this technique in my 3-tier model working with Linq-to-Entities.
> 
> The technique uses the earlier used received entity collection and narrows it down with some kind of filter, but there are multiple filters which can both be applied and removed even within the same "category" of filtering.
> 
> Hope somebody finds me the right link to a tutorial or a method of how to use this in a proper way.

In my experience, each "filter" on the side maps to a field in the database. This makes it simple to do a filter:

```
var result = db.Table
                 .Where(t => t.Name.Contains(ddlName.Text))
                 .Where(t => t.Attribute1.Contains(Attribute1.Text));
                 .Where(t => t.Attribute2.Contains(Attribute2.Text));

```

Obviously you can substitue `.Equals()` where it makes sense, I've used this on several webapps with great success. This becomes a bit more trickey when the filters you want do not map directly to fields in your database, but a similar approach can be taken.

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/6078041) — 0 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
