---
title: "Multithreaded Search using c#"
description: "My answer to \"Multithreaded Search using c#\" on Stack Overflow"
date: 2010-08-17
author:
  name: Nate Bross
tags:
  - c#
  - multithreading
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/3504678"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/3504609):*

> I want to seach more than 15000 values in a select statement as shown below:
> 
> `select * from tableA where id in (1,2,3......16000)`
> 
> Can I use threads, say around 3, and partion 15000 values in diffrent select statement.
> 
> 1.  `select * from tableA where id in (1,2,3......5000)`
> 2.  `select * from tableA where id in (5001....10000)`
> 3.  `select * from tableA where id in (10001....15000)`
> 
> and run these 3 select statment in parallel.

*I posted the following answer, which was chosen as the accepted answer and received 2 upvotes:*

Yes, but the real question is why?

Something like this might get you started:

```
var itms = new List<YourDataClass>();

var thr1 = new Thread(new ThreadStart(delegate()
{
    // select code
    // populate itms
}));
var thr2 = new Thread(new ThreadStart(delegate()
{
    // select code
    // populate itms
}));
var thr3 = new Thread(new ThreadStart(delegate()
{
    // select code
    // populate itms
}));

thr1.Start();
thr2.Start();
thr3.Start();

```

However, that said, if your IDs are integers and (based on your sample) the range of `IN` values are sequential, you might want to switch to a `where id > 1 and id < 16000` style. This may yeild better performance.

<details>
<summary>Notable comments</summary>

**Nate** (0 upvotes): Understood, the sample data in your question made it seem like they might be.

</details>

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/3504678) — 2 upvotes *(accepted answer)*. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
