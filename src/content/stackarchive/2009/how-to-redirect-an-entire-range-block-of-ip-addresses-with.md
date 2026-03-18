---
title: "How to redirect an entire range/block of IP addresses with PHP?"
description: "My answer to \"How to redirect an entire range/block of IP addresses with PHP?\" on Stack Overflow"
date: 2009-09-23
author:
  name: Nate Bross
tags:
  - php
  - http-redirect
  - ip
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/1466967"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/1466923):*

> I'm using the following snippet to redirect an array of IP addresses. I was wondering how I would go about adding an entire range/block of IP addresses to my dissallowed array...
> 
> ```
> <?php // Let's redirect certain IP addresses to a "Page Not Found"
> $disallowed = array("76.105.99.106");
> $ip = $_SERVER['REMOTE_ADDR']; 
> 
> if(in_array($ip, $disallowed)) {
>  header("Location: http://google.com");
>  exit;
> }
> ?>
> 
> ```
> 
> I tried using "76.105.99.\*", "76.105.99", "76.105.99.0-76.105.99.255" without any luck.
> 
> I need to use PHP rather than mod\_rewrite and .htaccess for other reasons.

I believe that you'll need to create a for loop to add each IP address (within the range) to your array.

pseudo code

```
for i = 0 to 255
    disallowed[i] = "76.105.99." + i
next

```

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/1466967) — 0 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
