---
title: "c# Network adapters list"
description: "My answer to \"c# Network adapters list\" on Stack Overflow"
date: 2012-07-26
author:
  name: Nate Bross
tags:
  - c#
  - list
  - network-programming
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/11677923"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/11677815):*

> I have code, which is using `System.Net` and `System.Net.NetworkInformation` references, it generates a list of my network connection names.
> 
> Everything seems fine and working, but when I made a class of this code, and exported values to `listbox1` items add, I had only one network connection name, but really I have four.
> 
> How can I solve this problem?
> 
> ```
> private void button1_Click(object sender, EventArgs e)
> {
>     Adapters obj = new Adapters();
>     var value = obj.net_adapters();
>     listBox1.Items.Add(value);
> }
> 
> public class Adapters
> {
>     public string net_adapters()
>     {
>         string value = string.Empty;
>         foreach (NetworkInterface nic in NetworkInterface.GetAllNetworkInterfaces())
>         {
>             value = nic.Name;
>         }
>         return value;
>     }
> }
> 
> ```

I would modify the code you currently have:

```
public string net_adapters() 
{ 
    string value = string.Empty; 
    foreach (NetworkInterface nic in NetworkInterface.GetAllNetworkInterfaces()) 
    { 
        // bug in your original code right here is `=`
        // you proably meant to do something like value += ", " + nic.Name
        // which would not work well with listbox Items collection
        value = nic.Name; 
    } 
    return value; 
} 

```

To be like this:

```
public System.Collections.Generic.List<String> net_adapters() 
{ 
    List<String> values = new List<String>();
    foreach (NetworkInterface nic in NetworkInterface.GetAllNetworkInterfaces()) 
    { 
        values.Add(nic.Name);
    } 
    return values; 
}

```

A more fancy way (although it probably doesn't matter because GetAllNetworkIntefaces probably blocks until it has has a full list) would be to use `IEnumerable<T>` and `yield return`:

```
public IEnumerable<String> net_adapters() 
{ 
    foreach (NetworkInterface nic in NetworkInterface.GetAllNetworkInterfaces()) 
    { 
        yield return nic.Name;
    } 
    yield break;
}

```

Either way, you would use it like this:

```
var obj = new Adapters();    
var values = obj.net_adapters();
listBox1.ItemsSource = values;

```

(On a side note, I would recommend that you use the [.NET Framework Naming Guide](http://msdn.microsoft.com/en-us/library/ms229002.aspx))

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/11677923) — 17 upvotes *(accepted answer)*. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
