---
title: "How can I rethrow an Inner Exception while maintaining the stack trace generated so far?"
description: "My answer to \"How can I rethrow an Inner Exception while maintaining the stack trace generated so far?\" on Stack Overflow"
date: 2009-06-17
author:
  name: Nate Bross
tags:
  - c#
  - .net
  - exception
  - stack-trace
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/1009782"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/1009762):*

> Duplicate of: [In C#, how can I rethrow InnerException without losing stack trace?](https://stackoverflow.com/questions/57383/in-c-how-can-i-rethrow-innerexception-without-losing-stack-trace)
> 
> I have some operations that I invoke asynchronously on a background thread. Sometimes, things go bad. When this happens, I tend to get a TargetInvocationException, which, while appropriate, is quite useless. What I really need is the TargetInvocationException's InnerException, like this:
> 
> ```
>     try
>     {
>         ReturnValue = myFunctionCall.Invoke(Target, Parameters);
>     }
>     catch (TargetInvocationException err)
>     {
>         throw err.InnerException;
>     }
> 
> ```
> 
> That way, my callers are served up with the REAL exception that occured. The problem is, that the throw statement seems to reset the stack trace. I'd like to basically rethrow the inner exception, but keep the stack trace it originally had. How do I do that?
> 
> **CLARIFICATION:** The reason I want only the inner exception is that this class tries to 'abstract away' the whole fact that these functions (delegates supplied by caller) are run on other threads and whatnot. If there is an exception, then odds are it has nothing to do with being run on a background thread, and the caller would really like the stack trace that goes into their delegate and finds the real issue, not my call to invoke.

*I posted the following answer:*

Using the "throw" keyword with an exception will always reset the stack trace.

The best thing to do is to catch the actual exception you want, and use "throw;" instead of "throw ex;". Or to throw your own exception, with the InnerException that you want to pass along.

I don't believe what you want to do is possible.

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/1009782) — 0 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
