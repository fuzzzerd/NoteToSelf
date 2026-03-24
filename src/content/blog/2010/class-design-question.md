---
title: "Class Design Question"
description: "My answer to \"Class Design Question\" on Stack Overflow"
date: 2010-05-10
author:
  name: Nate Bross
tags:
  - c#
  - oop
  - class
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/2806175"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/2806135):*

> This is a super newbie question, I've been programming for a while, but am just learning OOP. I have a class that works with user input via the C# console.  
> There are different methods in this class to gather different input sets.
> 
> I have another class that takes these input sets and puts them in a database.  
> What is the best way to pass the input from my input class to my database insert class?
> 
> My guess would be:
> 
> ```
> Array1[] = inputClass.GetParameterSet1();
> DatabaseInsertClass.InsertIntoDatabase1(Array1[]);
> 
> ```
> 
> Is there anything wrong with this or is there a better way to do this? Should I even have two classes (The database class could also take the user input)?

*I posted the following answer, which was chosen as the accepted answer and received 2 upvotes:*

You should have a "data" class, that represents all of your parameters.

Your GetParameters class should create an instance of this class.

Your InsertDatabase class should accept an instance of this class.

```
public class Data 
{
    public string value1 {get;set;}
    // add more properties here
}

public class GetInputParameters
{
    public Data GetParameters()
    {
        var d = new Data();
        d.value1 = Console.ReadLine();
        return d;
    }
}


public class InsertToDatabase
{
    public void InsertRecord(Data value)
    {
        // database persistance code
    }
}

```

Additionally, you could use a generic list to pass more than once instance of the data class, you could use an array, but a generic list is much easier to work with.

<details>
<summary>Notable comments</summary>

**Nate** (0 upvotes): Agreed, the naming leaves something to be desired. Proper class/method naming is important, but not the main point I was trying to illustrate.

</details>

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/2806175) — 2 upvotes *(accepted answer)*. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
