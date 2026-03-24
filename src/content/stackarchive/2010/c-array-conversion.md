---
title: "C# Array Conversion"
description: "My answer to \"C# Array Conversion\" on Stack Overflow"
date: 2010-10-22
author:
  name: Nate Bross
tags:
  - c#
  - .net
  - arrays
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/4001151"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/4001119):*

> Any help here as I'm a C# noob. The following code works fine and returns 1 string ViewState2. I'd like it to return an array of ViewState2 and EventValidation2 so I can manipulate it later on. How would I convert the code below to return an array?
> 
> ```
>     public string get_status(string local_fname)
>     {
>         var dts_doc = new HtmlAgilityPack.HtmlDocument();
>         dts_doc.Load(local_fname);
> 
>         //Pull the values
>         var ViewState = dts_doc.DocumentNode.SelectSingleNode("/html[1]/body[1]/div[1]/input[4]/@value[1]");
>         var EventValidation = dts_doc.DocumentNode.SelectSingleNode("/html[1]/body[1]/div[2]/input[1]/@value[1]");
> 
>         string ViewState2 = ViewState.Attributes[3].Value;
>         string EventValidation2 = EventValidation.Attributes[3].Value;
> 
> 
>         //Display the values
> 
>         //System.Console.WriteLine(ViewState.Attributes[3].Value);
>         //System.Console.WriteLine(EventValidation.Attributes[3].Value);
>         //System.Console.ReadKey();
>         return ViewState2;
>     }
> 
> ```

*I posted the following answer:*

Assuming you answer yes to this question (although I'd recommend a different approach, see below) this will do what you're asking:

```
public String[] get_status(string local_fname) 
{ 
    var dts_doc = new HtmlAgilityPack.HtmlDocument(); 
    dts_doc.Load(local_fname); 

    //Pull the values 
    var ViewState = dts_doc.DocumentNode.SelectSingleNode("/html[1]/body[1]/div[1]/input[4]/@value[1]"); 
    var EventValidation = dts_doc.DocumentNode.SelectSingleNode("/html[1]/body[1]/div[2]/input[1]/@value[1]"); 

    string ViewState2 = ViewState.Attributes[3].Value; 
    string EventValidation2 = EventValidation.Attributes[3].Value; 

    String[] retValues = new String[2];
    retValues[0] = ViewState2;
    retValues[1] = EventValidation2;

    return retValues;

    //Display the values 

    //System.Console.WriteLine(ViewState.Attributes[3].Value); 
    //System.Console.WriteLine(EventValidation.Attributes[3].Value); 
    //System.Console.ReadKey(); 
    return ViewState2; 
} 

```

That said, I would follow the approach afte the line.

* * *

I'd write a class that has the data members you want:

```
public class DataClass
{
    public string ViewState { get; set; }
    public string EventValidation { get; set; }
}

```

Then I'd modify the method to return an instance of your data class.

```
public DataClass get_status(string local_fname) 
{ 
    var dts_doc = new HtmlAgilityPack.HtmlDocument(); 
    dts_doc.Load(local_fname); 

    //Pull the values 
    var ViewState = dts_doc.DocumentNode.SelectSingleNode("/html[1]/body[1]/div[1]/input[4]/@value[1]"); 
    var EventValidation = dts_doc.DocumentNode.SelectSingleNode("/html[1]/body[1]/div[2]/input[1]/@value[1]"); 

    var dc = new DataClass();

    dc.ViewState = ViewState.Attributes[3].Value;
    dc.EventValidation = EventValidation.Attributes[3].Value;

    return dc;
} 

```

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/4001151) — 0 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
