---
title: "Azure Redis Exception while executing function: MyFunction -&gt; Unable to find assembly &#39;MySolution.MyProject.MyService"
description: "My answer to \"Azure Redis Exception while executing function: MyFunction -&gt; Unable to find assembly &#39;MySolution.MyProject.MyService\" on Stack Overflow"
date: 2018-01-10
author:
  name: Nate Bross
tags:
  - c#
  - .net
  - azure
  - stackexchange.redis
  - cachingframework.redis
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/48194746"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/48193106):*

> While using CachingFramework.Redis I am trying to insert an object into a key, field hash...
> 
> ```
> enter code here
> var map = new MyMapping
> {
>    DataSourceId = source.DataSourceId,
>    ExternalId = source.ExternalId,
>    StoreId = source.StoreId ?? 0,
>    LastConnection = source.LastConnection,
>    ApiKey = source.ApiKey
> };
> Context.Cache.SetHashed("MyRedisKey", "MyFieldKey", map, TimeSpan.FromHours(1));
> 
> ```
> 
> But, when I try to get the hashed value back out...
> 
> ```
> var MyCachedValue = Context.Cache.GetHashed<MyMapping>(("MyRedisKey", "MyFieldKey");
> 
> ```
> 
> I get the error...
> 
> > "Microsoft.Azure.WebJobs.Host.FunctionInvocationException : Exception while executing function: MyFunction ---> System.Runtime.Serialization.SerializationException : Unable to find assembly 'MySolution.MyProject.MyService, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null'.\\r\\n at async Microsoft.Azure.WebJobs.Host.Executors.FunctionExecutor.FunctionInvocationFilterInvoker.InvokeAsync(Object instance,Object\[\] arguments)\\r\\n at async Microsoft.Azure.WebJobs.Host.Executors.FunctionExecutor.InvokeAsync(IFunctionInvoker invoker,ParameterHelper parameterHelper,CancellationTokenSource timeoutTokenSource,CancellationTokenSource functionCancellationTokenSource,Boolean throwOnTimeout,TimeSpan timerInterval,IFunctionInstance instance)\\r\\n ....

Are you setting and retrieving the value in different assemblies? It looks like that might be the case.

In that event, you need your `Map` to be defined in a shared assembly that is referenced by both the project that sets the value as well as the project that gets the value.

1.  GetterProject
2.  SetterProject
3.  SharedModels

Both 1 and 2 should reference 3, and that is where you should define the objects stored in your cache.

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/48194746) — 1 upvotes *(accepted answer)*. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
