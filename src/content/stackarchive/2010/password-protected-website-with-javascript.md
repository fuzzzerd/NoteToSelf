---
title: "Password protected website with JavaScript"
description: "My answer to \"Password protected website with JavaScript\" on Stack Overflow"
date: 2010-08-24
author:
  name: Nate Bross
tags:
  - javascript
  - algorithm
  - passwords
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/3558711"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/3558702):*

> I have a quetion which may be simple/dumb or not :). In other words I have no idea if is fair enough or a completely foolish idea. Just some free thoughts.
> 
> What if I make my login via JavaScript with pass in it (yes I know), but pass will be hased by Secure Hash Algorithm. For instance:
> 
> I generate a pass with SHA which looks like
> 
> ```
> var = 0xc1059ed8... //etc
> 
> ```
> 
> and paste into the code. There will be also two functions. One will compare two values (given by me with user's) and second will generate sha form user's input.
> 
> Is this could be safe theoritically or this is a horrible pattern and stupid idea? Can JS handle it?
> 
> EDIT: I didn't mean serious autentication like banking one. Just when I have my pics and want only to a few ppl to watch them and 99,9% of ppl on earth can't watch them :) thx for responses

You cannot secure your site with Javascript alone. You will need some way to authenticate requests on the server.

Because all your javascript code is plainly visible to all consumers of your site. All a potential attacker would need to do is view souce of your website and they can bypass the password checking bit of your javascript and view the content behind it.

You need to have security implemented on the server-side, period the end. ASP.NET has a built-in way to do this called "Forms Authentication." Or you could use Session variables in a php script.

<details>
<summary>Notable comments</summary>

**Nate** (1 upvotes): ASP.NET has many ways, but it Forms is the simplest. It can be done with Session variables in php as well. I am most familiar with ASP.NET, so I mentioned it.

</details>

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/3558711) — 2 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
