---
title: "new lines in a text within a DIV"
description: "My answer to \"new lines in a text within a DIV\" on Stack Overflow"
date: 2012-09-17
author:
  name: Nate Bross
tags:
  - javascript
  - jquery
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/12464299"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/12464280):*

> I'm a little confused due to when I insert a text stored in mysql in a div I use the following sentence to insert the text:
> 
> ```
> <div class="menssge_holder"><?php echo str_replace("\n", "</p>", $conversation[$i]['message']); ?></div>
> 
> ```
> 
> That sentence works fine, but when the user enter a new message in a textarea and press send button, i put that text within the div\_holder and '\\n' do not take effect.
> 
> What's the equivalent I should use in javascript or jQuery?
> 
> Thanks.

*I posted the following answer, which received 1 upvote:*

This will generate incorrect html. You will have a bunch of `</p>` with no `<p>` if you want to replace `\n` with a new line, try `<br />` instead of `</p>.` As suggested above my @MarcB you may also want to try replacing `\r\n`.

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/12464299) — 1 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
