---
title: "Are there valid reasons to hold data internally as XML?"
description: "My answer to \"Are there valid reasons to hold data internally as XML?\" on Stack Overflow"
date: 2009-06-17
author:
  name: Nate Bross
tags:
  - xml
  - language-agnostic
  - anti-patterns
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/1008614"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/1008564):*

> In the years that I've been at my place of employment, I've noticed a distinct trend towards something that I consider an anti-pattern: Maintaining internal data as big strings of XML. I've seen this done a number of different ways, though the two worst offenders were quite similar.
> 
> ## The Webservice
> 
> The first application, a web service, provides access to a potentially high volume of data within a SQL database. At startup, it pulls more-or-less all of that data out of the database and stores it in memory as XML. (Three times.) The owners of this application call it a cache. I call it slow, because every perf problem that's been run into while working against this has been directly traceable to this thing. (It being a corporate environment, there should be no surprise that the client gets blamed for the perf failure, not the service.) This application does use the XML DOM.
> 
> ## The Importer
> 
> The second application reads an XML file that was generated as the result of an export from a third-party database. The goal is to import this data into a proprietary system (owned by us). The application that does it reads the entire XML file in and maintains at least two, sometimes as many as four, copies of the XML file throughout the entire importing sequence. Note that the data can be manipulated, transformed, and configuration can occur before the import takes place, so the importer owns this data in an XML format for it's entire lifetime. Unsurprisingly, this importer then explodes when a moderately sized XML file is provided. This application only uses the XML DOM for one of it's copies, the rest are all raw XML strings.
> 
> My understanding of common sense suggests that XML is _not_ a good format for holding data in-memory, but rather data should be translated into XML when it's being output/transferred and translated into internal data structures when being read in and imported. The thing is, I'm constantly running into production code that completely ignores the scalability issues, and goes through a _ton_ of extra effort to do so. (The sheer volume of string parsing in these applications is frightening.)
> 
> Is this a common failure to apply the right tool for the job that others people run into alos? Or is it just bad luck on my part? Or am I missing some blindingly obvious and _good_ situations where it's Right and OK to store high volumes of data in-memory as XML?

Any data stored in memory should be in classes. The higher volume of data we are talking about, the more important this becomes. Xml is a hugely bloated format that reduces performance. Xml should be used only for transfering data between applications. IMHO.

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/1008614) — 4 upvotes *(accepted answer)*. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
