---
title: "How to call a method after a delay in Android"
description: "My answer to \"How to call a method after a delay in Android\" on Stack Overflow"
date: 2010-06-18
author:
  name: Nate Bross
tags:
  - java
  - android
  - handler
  - delay
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/3072258"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/3072173):*

> I want to be able to call the following method after a specified delay. In objective c there was something like:
> 
> ```
> [self performSelector:@selector(DoSomething) withObject:nil afterDelay:5];
> 
> ```
> 
> Is there an equivalent of this method in android with java? For example I need to be able to call a method after 5 seconds.
> 
> ```
> public void DoSomething()
> {
>      //do something here
> }
> 
> ```

*I posted the following answer, which received 7 upvotes:*

I suggest the [Timer](http://developer.android.com/intl/fr/reference/java/util/Timer.html), it allows you to schedule a method to be called on a very specific interval. This will not block your UI, and keep your app resonsive while the method is being executed.

The other option, is the [wait();](http://developer.android.com/intl/fr/reference/java/lang/Object.html) method, this will block the current thread for the specified length of time. This will cause your UI to stop responding if you do this on the UI thread.

<details>
<summary>Notable comments</summary>

**Nate** (2 upvotes): That is true. Thats why I listed it as another option ;-)

</details>

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/3072258) — 7 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
