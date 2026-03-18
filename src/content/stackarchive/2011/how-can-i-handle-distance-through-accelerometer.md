---
title: "How can i handle distance through accelerometer?"
description: "My answer to \"How can i handle distance through accelerometer?\" on Stack Overflow"
date: 2011-01-20
author:
  name: Nate Bross
tags:
  - iphone
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/4744041"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/4744028):*

> My object starts from zero. When the time goes..It covers some distance, so how can I measure this?

Other than just being alerted that the device _did_ move, the accelerometer will not be much use. You will not get a reading of "device moved 10cm" or something similar, as far as I know you'll just get a value for how much acceleration occurred.

If you need to track your device's movement in the physical world you'll need to use the Location APIs.

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/4744041) — 0 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
