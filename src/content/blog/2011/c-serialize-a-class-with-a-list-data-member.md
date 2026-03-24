---
title: "C# Serialize a class with a List data member"
description: "My answer to \"C# Serialize a class with a List data member\" on Stack Overflow"
date: 2011-03-30
author:
  name: Nate Bross
tags:
  - c#
  - serialization
  - xml-serialization
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/5491036"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/5491009):*

> I have this c# class:
> 
> ```
> public class Test
> {
>     public Test() { }
> 
>     public IList<int> list = new List<int>();
> }
> 
> ```
> 
> Then I have this code:
> 
> ```
>         Test t = new Test();
>         t.list.Add(1);
>         t.list.Add(2);
> 
>         IsolatedStorageFile storage = IsolatedStorageFile.GetUserStoreForApplication();
>         StringWriter sw = new StringWriter();
>         XmlSerializer xml = new XmlSerializer(t.GetType());
>         xml.Serialize(sw, t);
> 
> ```
> 
> When I look at the output from sw, its this:
> 
> ```
> <?xml version="1.0" encoding="utf-16"?>
> <Test xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" />
> 
> ```
> 
> the values 1,2 I added to the list member variable dont show up.
> 
> 1.  So how can I fix this ? I made the list a property but it still doesnt seem to work.
> 2.  I am using xml serialization here, are there any other serializers ?
> 3.  I want performance! Is this the best approach ?
> 
> \--------------- **UPDATE BELOW** -------------------------
> 
> So the actual class I want to serialize is this:
> 
> ```
> public class RoutingResult
>     {
>         public float lengthInMeters { get; set; }
>         public float durationInSeconds { get; set; }
> 
>         public string Name { get; set; }
> 
>         public double travelTime
>         {
>             get
>             {
>                 TimeSpan timeSpan = TimeSpan.FromSeconds(durationInSeconds);
>                 return timeSpan.TotalMinutes;
>             }
>         }
> 
>         public float totalWalkingDistance
>         {
>             get
>             {
>                 float totalWalkingLengthInMeters = 0;
>                 foreach (RoutingLeg leg in Legs)
>                 {
>                     if (leg.type == RoutingLeg.TransportType.Walk)
>                     {
>                         totalWalkingLengthInMeters += leg.lengthInMeters;
>                     }
>                 }
> 
>                 return (float)(totalWalkingLengthInMeters / 1000);
>             }
>         }
> 
>         public IList<RoutingLeg> Legs { get; set; } // this is a property! isnit it?
>         public IList<int> test{get;set;} // test ...
> 
>         public RoutingResult()
>         {
>             Legs = new List<RoutingLeg>();
>             test = new List<int>(); //test
>             test.Add(1);
>             test.Add(2);
>             Name = new Random().Next().ToString(); // for test
>         }
>     }
> 
> ```
> 
> But the XML produced by the serializer is this:
> 
> ```
> <RoutingResult>
>   <lengthInMeters>9800.118</lengthInMeters>
>   <durationInSeconds>1440</durationInSeconds>
>   <Name>630104750</Name>
> </RoutingResult>
> 
> ```
> 
> ???
> 
> its ignoring both of those lists ?

*I posted the following answer, which was chosen as the accepted answer and received 4 upvotes:*

**1)** Your `list` is a field, not a property, and the XmlSerializer will only work with properties, try this:

```
public class Test
{    
    public Test() { IntList = new List<int>() }    
    public IList<int> IntList { get; set; }
}

```

**2)** There are other Serialiation options, [Binary](http://msdn.microsoft.com/en-us/library/72hyey7b%28v=VS.100%29.aspx) the main other one, though there is one for [JSON](http://msdn.microsoft.com/en-us/library/bb410770.aspx) as well.

**3)** Binary is probably the most performant way, since it is typically a straight memory dump, and the output file will be the smallest.

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/5491036) — 4 upvotes *(accepted answer)*. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
