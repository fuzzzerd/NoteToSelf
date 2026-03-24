---
title: "Encrypt array as string"
description: "My answer to \"Encrypt array as string\" on Stack Overflow"
date: 2009-05-07
author:
  name: Nate Bross
tags:
  - php
  - encryption
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/837428"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/837417):*

> I'm looking for an two-way encryption algorithm to encode an array as a string, so that I can securely store some data in a cookie. The algorithm shouldn't just implode the array, I want it to be obfuscated too. My data contains all printable characters.
> 
> A link to something would be sufficient, I just can't seem to dig anything up on Google. Maybe I should just implode the array with some obscure character, and then encrypt it somehow? I'm not sure what method to encrypt it with though... it doesn't have too secure, the cookie data isn't _that_ sensitive.
> 
> Oh... yeah, the encryption algorithm should let me use a key/salt. mcrypt\_encrypt seems to be giving back messy long results, but perhaps I'm not using the right cipher. Which is the simplest cipher (produces short clean strings)?

*I posted the following answer:*

Try XOR-ing all of the elements in the array store the resulting char in the string -- the the same in reverse to decrypt.

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/837428) — 0 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
