---
title: "How do I get the XML data that went down the wire from a WCF Service generated from `Add Service Reference`"
description: "A question I asked on Stack Overflow"
date: 2010-05-19
author:
  name: Nate Bross
tags:
  - .net
  - xml
  - wcf
  - serialization
  - service
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/q/2869819"
---

*I [asked this on Stack Overflow](https://stackoverflow.com/q/2869819):*

Assume I have code like this:

```
var svc = new Namespace.SvcClient();
var request = new Namespace.SvcRequest();
request.SomeProperty = "Value1";
request.SomeProperty = 4.0d;
var response = svc.Request(request);
SetText(response.Result.ToString());
svc.Close();

```

What I want to have is the **actual** XML that got sent out as the result of `svc.Request(request);` and the **actual** XML response from the server, but I want these from WITHIN my application code. I don't want to log it to a file or anything like that. I want to display the xml to the user.

---

> [John Saunders answered](https://stackoverflow.com/a/2869859) (2 upvotes):
>
> See [Configuring Message Logging](http://msdn.microsoft.com/en-us/library/ms730064.aspx). You can turn on message tracing and get the exact XML.

<details>
<summary>Notable comments</summary>

**Nate** (0 upvotes): Thanks for the tip, I had no idea...

</details>

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/q/2869819) — 0 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
