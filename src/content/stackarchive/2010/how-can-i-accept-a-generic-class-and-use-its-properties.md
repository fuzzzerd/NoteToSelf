---
title: "How Can I Accept a Generic Class and Use Its Properties / Methods"
description: "My answer to \"How Can I Accept a Generic Class and Use Its Properties / Methods\" on Stack Overflow"
date: 2010-06-09
author:
  name: Nate Bross
tags:
  - c#
  - .net
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/3009932"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/3009841):*

> I want to create a class that could hold any of a number of same type of classes. For example lets says I have a base class like follows:
> 
> ```
> public class BaseClass
> {
>     public string MyBaseString
>     {
>          get;
>          set;
>      }
> }
> 
> ```
> 
> And then I have a few derived classes like this:
> 
> ```
> public class DerivedClass : BaseClass
> {
>      public MyDerivedClassString
>      {
>          get;
>          set;
>      }
> }
> 
> public class DerivedClass2 : BaseClass
> {
>      public MyDerivedClass2String
>      {
>          get;
>          set;
>      }
> }
> 
> ```
> 
> Now I would like a class that accepts one of these implementations and does stuff with it. Here is the only thing I can think of, but there must be a better way:
> 
> ```
> public class ClassA
> {
>     public object MyClass
>     {
>         get;
>         set;
>     }
> 
>     public ClassA (object myClass)
>     {
>         MyClass = myClass;
>         if (object is BaseClass)
>         {
>               //do something
>         }
>         else if (object is DerivedClass)
>         {
>              //do something specific to derived class
>         }
>         else if (object is DerivedClass2)
>         { 
>              //do something specific to derived class 2  
>         }
>     }
> }
> 
> ```
> 
> **CLARIFICATION:** The specific goal I am trying to accomplish is to use ClassA as a container class for various implementations of the BaseClass. The business goal I am trying to accomplish is to create a Legend object which might use multiple color schemes (i.e. a Mono Color Ramp, Multi Color Ramp, etc). So I would like the Legend class to contain the ColorScheme that is being used, but still have access to that color scheme's unique properties for modification later on.
> 
> **CLARIFICATION 2** Based on the wide array of responses I got, I thought I'd provide an exact replication of what I'm trying to do:
> 
> ```
>    public class BaseColorScheme
>     {
>         List<Color> _colors = new List<Color>();                
>         public List<Color> Colors
>         {
>             get
>             {
>                 return _colors;
>             }
>             set
>             {
>                 _colors = value;
>             }
>         }
>  }
> 
>  public class SingleColorScheme : BaseColorScheme
>  {
> 
>         public Color MidColor
>         {
>             get;
>             set;
>         }
> 
>         public SingleColorScheme( Color midColor, int numberOfClassifications )
>         {
>             Colors = CreateMonoColorRamp( midColor, numberOfClassifications );
>         }
> }
> 
> public class MultiColorScheme : BaseColorScheme
> {
>     public Color StartColor
>     {
>         get;
>         set;
>     }
>     public Color EndColor
>     {
>         get;
>         set;
>     }
>     public Color MidColor
>     {
>         get;
>         set;
>     }
> 
>     public MultiColorScheme( Color startColor, Color endColor, Color midColor )
>     {
>         StartColor = startColor;
>         EndColor = endColor;
>         MidColor = midColor;
> 
>         Colors = //do something to define multi color scheme
>     }
> }
> 
> ```
> 
> Then I would have a Legend Class that would be something like
> 
> ```
> public class Legend
> {
>      public object ColorScheme
>      {  get; set; }
> 
>      public Guid LegendId 
>      { get; set; }
> 
>      public Legend(object colorScheme)
>      {
>           ColorScheme = colorScheme;
>      }
> }
> 
> ```
> 
> Finally I might have a form that sits on top of the legend that displays the properties of the various color schemes based on which type of color scheme it is. Hopefully that helps clarify a bit.

*I posted the following answer:*

If you need to access different properties based on **which** derived class is passed something like this should help:

```
public class ClassA<T> where T : BaseClass 
{ 
    public T MyClass { get; set; } 

    public ClassA(T myClass) { MyClass = myClass; } 

    public void DoStuffToMyClass()
    {
        if(MyClass is BaseClass) 
        { // do base class stuff }
        else if(Myclass is DerivedClass)
        { // do DerivedClass stuff }
        else if(MyClass is DerivedClass2)
        { // do DerivedClass2 stuff }
    }
}

```

This gives you the type saftey to ensure you at least have the BaseClass object, and possibly a derived class.

<details>
<summary>Notable comments</summary>

**Nate** (0 upvotes): This is based on @Anthony Pegram's solution.

</details>

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/3009932) — 0 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
