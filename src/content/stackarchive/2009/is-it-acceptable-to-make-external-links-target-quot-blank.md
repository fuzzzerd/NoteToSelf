---
title: "Is it acceptable to make external links target=&quot;_blank&quot;?"
description: "My answer to \"Is it acceptable to make external links target=&quot;_blank&quot;?\" on Stack Overflow"
date: 2009-08-28
author:
  name: Nate Bross
tags:
  - hyperlink
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/1349068"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/1349048):*

> I'm a bit confused whether or not I should make the links on my website that point externally target="\_blank". Does this practice negatively affect the usability of your site (i.e. breaking the "back button trail")? Is it commonly found annoying by most users? Is it acceptable in some situations but not others?
> 
> I want to make an enjoyable user experience for all of my sites and would hate to do something that annoys my users. What is your experience/advice on the matter?

It depends, typically for links to additional content on your site, I would not use the \_blank. Anytime I link to off-site content I use the \_blank to keep a page open for my site. That way when the user is done on the external site they see my site again.

With modern browsers this usually opens a new tab. I expect this behavior, but usually I control click to get a new tab/window when I want to keep my place.

That being said, for a web application, I'd always leave the target attribute off so the user can decide to open a new window or not.

<details>
<summary>Notable comments</summary>

**Nate** (0 upvotes): Personally, when I click a link that takes me off-site, I expect it to be a new window/tab. If the content is on-site I expect it to stay in the same window/tab.

</details>

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/1349068) — 1 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
