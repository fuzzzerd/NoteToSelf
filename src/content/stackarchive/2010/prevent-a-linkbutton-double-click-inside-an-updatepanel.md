---
title: "Prevent a LinkButton double click inside an UpdatePanel"
description: "My answer to \"Prevent a LinkButton double click inside an UpdatePanel\" on Stack Overflow"
date: 2010-11-30
author:
  name: Nate Bross
tags:
  - asp.net
  - updatepanel
  - linkbutton
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/4319285"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/4319253):*

> I have a LinkButton inside an UpdatePanel that I do not want the client to click more than once before the UpdatePanel refreshes its contents. Right now the link button initiates a partial postback for every client side click until the update panel has time to refresh. This particular link fires off a very expensive process which I'd rather not have run unnecessarily. Is there a .NET standard way of doing this? Whats a good solution for this? Thanks.

I would drop an `enabled=false` on it until the partial postback finishes and then remove the `enabled=false` attribute.

Try something like this on `Page_Load` so it will be disabled the first time.

```
button.Attributes.Add("onclick",
                "this.disabled = true;"
                + this.ClientScript.GetPostBackEventReference(button, String.Empty) + ";");

```

then re-enable it at the end of the partial postback?

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/4319285) — 2 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
