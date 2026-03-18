---
title: "How can I restructure this code to move more method implementations into a base class?"
description: "A question I asked on Stack Overflow"
date: 2018-05-23
author:
  name: Nate Bross
tags:
  - c#
  - .net
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/q/50497217"
---

*I [asked this on Stack Overflow](https://stackoverflow.com/q/50497217):*

Suppose that I have the following:

**Library Project**:

```
interface IDoStuff
{
    string DoThingOne<T>(T genericParm);
    string DoThingOne<T>(T genericParm, int anotherParm);
    string SendRequest<T>(IRequest<T> request);
}
interface IRequest<T>
{
    T GenericParm { get; set; }
    int IntParm { get; set; }
}
abstract class ThingDoerBase : IDoStuff
{
    // simplifed but default for the integer parm
    public virtual string DoThingOne<T>(T parm) => DoThingOne(parm, 25); 
    **// I want to make this virtual but because it has to new up a WebRequest defined in the other project it has to live there.**
    public abstract string DoThingOne<T>(T parm; int anotherParm);
    public abstract string SendRequest<T>(IRequest<T> request);
}

```

**Implement1 Project**

```
class Imp1Request<T> : IRequest<T>
{
    public T GenericParm {get;set;}
    public int IntParm {get;set;}
}
class ThingDoer : ThingDoerBase 
{
    public override string DoThingOne<T>(T parm, int anotherParm)
    {
        var req = new Imp1Request<T> { GenericParm = parm; IntParm = anotherParm };
        return SendRequest(req);
    }
    public override string SendRequest<T>(IRequest<T> req)
    {
        // implementation for this guy is not important.
    }
}

```

I'd like to convert the abstract method DoThingOne from the abstract base class to a virtual method that calls the abstract SendRequest (similar to what the override method does in the implementation).

In other words, I'd like for the only method in the implemented class to be a `SendRequest<T>(IRequest<T> req);` and the rest to be in the base class.

I thought about creating a `RequestBase : IRequest` in the library project; however, one of the things that I've omitted here for brevity is the fact that each implementation of IRequest will need different attributes that I don't want to pollute the library with. Example would be

Implement1

```
class Imp1Request<T> : IRequest<T>
{
    [JsonProperty("_GenericParm")]
    public T GenricParm {get;set;}
}

```

Implement2

```
class Imp2Request<T> : IRequest<T> 
{
    [XmlAttribute("StringParm")]
    public T GenricParm {get;set;}
}

```

I think the factory approach is on to something, I'm just struggling with how to adapt it to my case.

Is there another way to structure this? or achieve the objective of having as much boilerplate code in the base class as possible?

---

> [taquion answered](https://stackoverflow.com/a/50497373) (1 upvotes):
>
> You can inject a factory to your **ThingDoerBase**:
> 
> Your interfaces for IRequest:
> 
> ```
> interface IRequest { }
> 
> interface IRequest<T>:IRequest
> {
>     T GenericParm { get; set; }
>     int IntParm { get; set; }
> }
> 
> ```
> 
> And your base class:
> 
> ```
> abstract class ThingDoerBase : IDoStuff
> {
>     private Func<IRequest> _factory;
> 
>     protected ThingDoerBase(Func<IRequest> factory) => _factory = factory;
> 
>     // simplifed but default for the integer parm
>     public virtual string DoThingOne<T>(T parm) => DoThingOne(parm, 25); 
>     public virtual string DoThingOne<T>(T parm, int anotherParm)
>     {
>         if(!(_factory() is IRequest<T> request))
>             throw new InvalidOperationException();
> 
>         request.GenericParm = parm;
>         request.IntParm = anotherParm;
>         return SendRequest(request);
>     }
>     public abstract string SendRequest<T>(IRequest<T> request);
> 
>     public void ChangeRequestFactory(Func<IRequest> factory) => _factory = factory;
> }
> 
> ```
> 
> A sample implementation:
> 
> ```
>     class Foo :ThingDoerBase{
>         public Foo(Func<IRequest> factory) : base(factory) { }
>         public override string SendRequest<T>(IRequest<T> request) => 
>             throw new NotImplementedException();
>     }
> 
> ```
> 
> And testing:
> 
> ```
>     var foo = new Foo(() => new Imp1Request<int>());
>     foo.DoThingOne(1);
>     foo.DoThingOne("lol"); //will throw InvalidOperationException
> 
>     foo.ChangeRequestFactory(() => new Imp1Request<string>());
>     foo.DoThingOne(1);//will throw InvalidOperationException
>     foo.DoThingOne("lol");
> 
> ```

<details>
<summary>Notable comments</summary>

**Nate** (0 upvotes): @CamiloTerevinto There are a lot of parameters and not all of them are required, so these are mostly helper methods to make it easier for the consumer of the IDoStuff interface to interact with it.

</details>

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/q/50497217) — 1 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
