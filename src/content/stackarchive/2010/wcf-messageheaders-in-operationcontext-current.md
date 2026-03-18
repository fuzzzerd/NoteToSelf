---
title: "WCF MessageHeaders in OperationContext.Current"
description: "A question I asked on Stack Overflow"
date: 2010-04-08
author:
  name: Nate Bross
tags:
  - c#
  - .net
  - wcf
  - security
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/q/2601851"
---

*I [asked this on Stack Overflow](https://stackoverflow.com/q/2601851):*

If I use code like this \[just below\] to add Message Headers to my OperationContext, will all future out-going messages contain that data on any new ClientProxy defined from the same "run" of my application?

The objective, is to pass a parameter or two to each OpeartionContract w/out messing with the signature of the OperationContract, since the parameters being passed will be consistant for all requests for a given run of my client application.

```
public void DoSomeStuff()
{
    var proxy = new MyServiceClient();
    Guid myToken = Guid.NewGuid();
    MessageHeader<Guid> mhg = new MessageHeader<Guid>(myToken);
    MessageHeader untyped = mhg.GetUntypedHeader("token", "ns");
    OperationContext.Current.OutgoingMessageHeaders.Add(untyped);
    proxy.DoOperation(...);
}

public void DoSomeOTHERStuff()
{
    var proxy = new MyServiceClient();
    Guid myToken = Guid.NewGuid();
    MessageHeader<Guid> mhg = new MessageHeader<Guid>(myToken);
    MessageHeader untyped = mhg.GetUntypedHeader("token", "ns");
    OperationContext.Current.OutgoingMessageHeaders.Add(untyped);
    proxy.DoOtherOperation(...);
}

```

In other words, is it safe to refactor the above code like this?

```
bool isSetup = false;
public void SetupMessageHeader()
{
    if(isSetup) { return; }
    Guid myToken = Guid.NewGuid();
    MessageHeader<Guid> mhg = new MessageHeader<Guid>(myToken);
    MessageHeader untyped = mhg.GetUntypedHeader("token", "ns");
    OperationContext.Current.OutgoingMessageHeaders.Add(untyped);
    isSetup = true;
}

public void DoSomeStuff()
{
    var proxy = new MyServiceClient();
    SetupMessageHeader();
    proxy.DoOperation(...);
}

public void DoSomeOTHERStuff()
{
    var proxy = new MyServiceClient();
    SetupMessageHeader();
    proxy.DoOtherOperation(...);
}

```

Since I don't really understand what's happening there, I don't want to cargo cult it and just change it and let it fly if it works, I'd like to hear your thoughts on if it is OK or not.

---

> [S P answered](https://stackoverflow.com/a/3029509) (4 upvotes):
>
> I think your refactored code doesn't put any added-value. Have you taken in account that the OperationContext can be null?
> 
> I think this will be a safer approach:
> 
> ```
>  using(OperationContextScope contextScope =
>         new OperationContextScope(proxy.InnerChannel))
>   {
> 
>       .....
>       OperationContext.Current.OutgoingMessageHeaders.Add(untyped); 
>       proxy.DoOperation(...); 
>   }
> 
> ```
> 
> OperationContextScope's constructor will always cause replacement of the Operation context of the current thread; The OperationContextScope's Dispose method is called which restores the old context preventing problems with other objects on the same thread.

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/q/2601851) — 4 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
