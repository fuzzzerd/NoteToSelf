---
title: "Service Reference is using Arrays instead of List&lt;Type&gt;, even when settings say to use List"
description: "My answer to \"Service Reference is using Arrays instead of List&lt;Type&gt;, even when settings say to use List\" on Stack Overflow"
date: 2010-07-01
author:
  name: Nate Bross
tags:
  - c#
  - web-services
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/3159707"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/3159681):*

> I'm using Visual Studio 2010, and I've got a service reference to a web service we created. Our methods return objects that contain generic List properties:
> 
> ```
> public class ExampleResponse
> {
>   private System.Collections.Generic.List<int> intValues;
> 
>   [WCF::MessageBodyMember(Name = "IntValues")]
>   public System.Collections.Generic.List<int> IntValues    
>   {
>     get { return intValues; }
>     set { intValues= value; }
>   }
> }
> 
> ```
> 
> On the client-side, it creates a References.cs file with int\[\] instead of List:
> 
> ```
> [System.ServiceModel.MessageBodyMemberAttribute(Namespace="SomeNamespace", Order=0)]
> [System.Xml.Serialization.XmlArrayAttribute(IsNullable=true)]
> [System.Xml.Serialization.XmlArrayItemAttribute(Namespace="http://schemas.microsoft.com/2003/10/Serialization/Arrays", IsNullable=false)]
> public int[] IntValues;
> 
> ```
> 
> On the service reference settings the Collection Type is set to use List, not Arrays. Yet, it's still doing so.
> 
> Any info on how to solve this would be extremely helpful, it seems to make no sense.

*I posted the following answer, which received 5 upvotes:*

In the Add Service Reference, you can choose which type to use for Collections. For some reason Array is default. After changing it, I've had to delete the entire reference and re-add it, choosing List from the beginning. I've had weird issues changing it after the fact.

<details>
<summary>Notable comments</summary>

**Nathan** (5 upvotes): I've done exactly this, by setting the Collection value before it even can create the reference itself. But I'm still getting Arrays.

</details>

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/3159707) — 5 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
