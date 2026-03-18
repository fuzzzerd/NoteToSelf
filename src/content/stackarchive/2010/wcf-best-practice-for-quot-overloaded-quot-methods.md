---
title: "WCF Best Practice for &quot;Overloaded&quot; methods"
description: "A question I asked on Stack Overflow"
date: 2010-05-06
author:
  name: Nate Bross
tags:
  - .net
  - wcf
  - service
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/q/2783882"
---

*I [asked this on Stack Overflow](https://stackoverflow.com/q/2783882):*

What is the best practice for emulating overloaded methods over WCF?

Typically I might write an interface like this

```
interface IInterface 
{
    MyType ReadMyType(int id);
    IEnumerable<MyType> ReadMyType(String name);
    IEnumerable<MyType> ReadMyType(String name, int maxResults);    
}

```

What would this interface look like after **you** converted it to WCF?

---

> [mwilson answered](https://stackoverflow.com/a/2783896) (10 upvotes):
>
> You can leave it like that if you like. Just use the name property of the OperationContract attribute.
> 
> ```
> [ServiceContract]
> interface IInterface 
> {
>     MyType ReadMyType(int id);
>     [OperationContract(Name= "Foo")]
>     IEnumerable<MyType> ReadMyType(String name);
>     [OperationContract(Name= "Bar")]
>     IEnumerable<MyType> ReadMyType(String name, int maxResults);    
> }
> 
> ```

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/q/2783882) — 9 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
