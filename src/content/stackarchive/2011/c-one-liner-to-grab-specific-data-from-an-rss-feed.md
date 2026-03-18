---
title: "C# one-liner to grab specific data from an RSS feed"
description: "My answer to \"C# one-liner to grab specific data from an RSS feed\" on Stack Overflow"
date: 2011-08-24
author:
  name: Nate Bross
tags:
  - c#
  - linq
  - rss
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/7180112"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/7180063):*

> I'm looking for a C# "one-liner" (need not strictly be a single line, but very short is preferable) way to download an RSS feed from a given HTTP URL, and extract specific data. Robustness be damned. Something that doesn't require any external libraries.
> 
> Specifically I want to count the number of `<item>`s in the RSS. But some kind of LINQ method that could be reused to, say for example, return a list of the item `<title>` elements would be most useful, if it can be kept short.

What about something like this:

```
var rssFeed = XDocument.Load("http://weblogs.asp.net/scottgu/rss.aspx");

var posts = from item in rssFeed.Descendants("item")
            select new
            {
                Title     = (string)item.Element("title"),
                Published = (DateTime?)item.Element("pubDate"),
                Url       = (string)item.Element("link"),
            };

```

[Source](http://weblogs.asp.net/scottgu/archive/2007/08/07/using-linq-to-xml-and-how-to-build-a-custom-rss-feed-reader-with-it.aspx).

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/7180112) — 5 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
