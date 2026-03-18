---
title: "Write Multiple Full HTML &#39;Files&#39; to Single Output Stream?"
description: "My answer to \"Write Multiple Full HTML &#39;Files&#39; to Single Output Stream?\" on Stack Overflow"
date: 2009-07-08
author:
  name: Nate Bross
tags:
  - java
  - html
  - servlets
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/1099931"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/1099917):*

> I'm writing a testing utility- I want to show multiple finished HTML "pages" in a single browser window.
> 
> Is this possible? I'm using Java Servlets.
> 
> For example, normally the user goes to a utility screen, fills in a bunch of fields and POSTS this to my servlet, which builds up a full HTML stream based on their input and writes it to HttpServletResponse.getWriter(). When the user views source, they get a `<html> ... </html>`.
> 
> What I want to do is allow users to request multiple "screens" and get the results in a single web page where you'd scroll down to see the 2nd, 3rd, etc. screens, maybe there is some kind of divider in between. I thought of frames or iframes, but didn't have luck. I have seen where I can write my big html stream to a javascript variable, then use document.write to dump it into the iframe. But that seems pretty awkward, and I'd have to be really careful about escaping quotes and stuff.

Just leave out the `<html>/</html>` tags for each page and wrap the whole thing inside a single large ....

Like this maybe:

```
<html>

[page1Content]
<hr />
[page2Content]
<hr />
[page3Content]
<hr />

</html>

```

<details>
<summary>Notable comments</summary>

**Nate** (0 upvotes): Agreed, my method is a quick and dirty approach.

</details>

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/1099931) — 1 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
