---
title: "WCF Web Service Method Names"
description: "My answer to \"WCF Web Service Method Names\" on Stack Overflow"
date: 2011-05-17
author:
  name: Nate Bross
tags:
  - c#
  - wcf
  - web-services
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/6034330"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/6034279):*

> I am completely new to web Services, so forgive me if this is obvious to everyone but myself.
> 
> I have created a WCF C# web service which is working well. I then created Java and a C# clients to consume the output, which are also working well.
> 
> What is bothering me is that I can't figure out how to control the name of the method created in the proxy. In the service, I have a method called getCategory, but in the generated client code (both in Java using Netbeans and in C# with VS) the corresponding method gets named getX003CCategoryX003EKBackingField().
> 
> Is it possible to control this name?
> 
> EDIT: Here is a snip from the service:
> 
> ```
>  [OperationContract(Name="GetCategoryObject")]
>         UrlCategory2 GetCategoryObject(string URL);
> 
> ```
> 
> And the Contract:
> 
> ```
>  [DataMember(Name="getCategory")]
>         public string Category {
>             get;
>             set;
>         }
> 
> ```
> 
> I am generating the code using the WSDL read automation in Eclipse and Visual Studio.
> 
> SECOND EDIT: This should have all of the relevant bits.
> 
> ```
> namespace MyService.ServiceContracts
> {
>     [ServiceContract(Name = "ICategorizer", Namespace = "MyService.ServiceContracts", SessionMode = SessionMode.Allowed)]
>     public interface ICategorizer 
>     {
>         [OperationContract(Name="GetCategoryObject")]
>         UrlCategory2 GetCategoryObject(string URL);
> 
>         [OperationContract]
>         string getCategoryAsString(string URL);
> 
>     }
> }
> 
> namespace MyService.DataContracts {
> 
>     [Serializable]
>     public class UrlCategory2 {
> 
>         [DataMember(Name = "getCategoryEn")]
>         public string CategoryEn {
>             get;
>             set;
>         }
> 
>         [DataMember(Name = "getCategoryFr")]
>         public string PawsCategoryFr {
>             get;
>             set;
>         }
> 
>         [DataMember(Name="getCategory")]
>         public string Category {
>             get;
>             set;
>         }
>     }
> }
> namespace MyService
> {
> [ServiceBehavior(ConcurrencyMode = ConcurrencyMode.Multiple, InstanceContextMode = InstanceContextMode.PerSession, UseSynchronizationContext = false)]
>     public class MyService : ICategorizer
>     {
>         ...
>         public UrlCategory2 GetCategory(string URL) {...}
>         ...
>         public UrlCategory2 GetCategoryObject(string URL) {...}
> 
>     }
> }           
> 
> [wsdl:operation name="GetCategoryObject"]
> [soap:operation soapAction="MyService.ServiceContracts/ICategorizer/GetCategoryObject" style="document"/]
> [wsdl:input]
> [soap:body use="literal"/]
> [/wsdl:input]
> [wsdl:output]
> [soap:body use="literal"/]
> [/wsdl:output]
> [/wsdl:operation]
> [wsdl:operation name="GetCategory"]
> [soap:operation soapAction="MyService.ServiceContracts/ICategorizer/GetCategory" style="document"/]
> [wsdl:input]
> [soap:body use="literal"/]
> [/wsdl:input]
> 
> ```

*I posted the following answer, which received 3 upvotes:*

Post the code for your WCF Service, also how are you generating the proxy? Typically they are named the same in the proxy as they are in the service.

You can use `[OperationContract(Name= "Foo")]` on your method (in the service) to specify a specific name.

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/6034330) — 3 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
