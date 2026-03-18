---
title: "Does Streaming a WCF Soap Help the Client Send Using Less Memory?"
description: "My answer to \"Does Streaming a WCF Soap Help the Client Send Using Less Memory?\" on Stack Overflow"
date: 2010-10-22
author:
  name: Nate Bross
tags:
  - c#
  - .net
  - wcf
  - .net-3.5
  - buffering
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/4000850"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/3999842):*

> I have a windows mobile application that sends data via WCF to a server.
> 
> The data it sends sometimes exceeds the limit on the windows mobile device. I am wondering if streaming would help not need to hold all the data I must send in memory at once.
> 
> Here is a simple example:
> 
> ```
> [DataContract]
> public class MainContract
> {
>     [DataMember]
>     public Guid  ID { get; set; }
> 
>     [DataMember]
>     public List<SubContract> SubContract { get; set; }
> }
> 
> [DataContract]
> public class SubContract
> {
>     [DataMember]
>     public Guid ID { get; set; }
> 
>     [DataMember]
>     public string ImageCaption { get; set; }
> 
>     [DataMember]
>     public Byte[] ImageAsBytes { get; set; }
> }
> 
> ```
> 
> Say I have only 1 `MainContract` object. But it has a lot of `SubContract` objects in it. (My real scenario is more compelex).
> 
> Holding all of `MainContract` in memory is too much for the client side to do.
> 
> Will streaming allow me to send send the data over the wire in pieces? Or do I still have to buffer it all on the client side and the streaming just helps with the receiving of large data?

As far as I know, if your method accepts a `MainContract` you will need to have that completely in memory on the client side in order to stream the serialized result to the WCF host.

If loading up a full `MainContract` will take too much memory on the client side, I would adjust the service to allow for something like this:

```
public Guid CreateMainContract(MainContract obj); // return unique id
public Guid CreateSubContract(Guid mainContractToAddTo, SubContract obj);

```

and then modify the calling code to pseduo-stream the data to the WCF host, by means of calling the above operations in a loop. (Obviously, you'll need to change it up for update/delete situations, etc).

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/4000850) — 1 upvotes *(accepted answer)*. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
