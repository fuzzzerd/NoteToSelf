---
title: "Processing large text files in .NET 3.5 c#"
description: "My answer to \"Processing large text files in .NET 3.5 c#\" on Stack Overflow"
date: 2010-08-25
author:
  name: Nate Bross
tags:
  - c#
  - file
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/3568216"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/3568172):*

> I'm tasked with reading a large text file (around 150 MB), parsing it and displaying the records in a data grid. The file is delimited by parenthesis.
> 
> I'm accomplishing this by -- in a separate thread -- reading the entire file into memory, storing the information in a dataset and then binding the dataset to the data grid which sits on the main form in the original thread.
> 
> I have two questions/issues:
> 
> 1.  Is this the best way to do it? Is reading a 150MB file into memory to large? What is the best practice when doing this type of work?
>     
> 2.  The amount of memory that gets allocated for the process is HUGE.. which is understandable because I'm reading such a large file. But, the problem is it doesn't get deallocated. So if I want to do process two files, more and more memory will get allocated. Until at some point the program will just crash. I'm guessing the dataset object is being referenced by something that's preventing the memory from being allocated... is there anyway to determine what that object is? Is there a tool or a method I can use for this purpose?
>     
> 
> Any help on this will be greatly appreciated. I've never in my coding career ever had to worry about memory management. Thanks.

*I posted the following answer, which was chosen as the accepted answer and received 1 upvote:*

1.  This is acceptable if you'r only ever reading a single file, and you don't expect it to grow much beyond 150MB. The important factor here, is that users of your app have enough memory to open the file. 150Mb isn't much, if you get to 150GB you'll have problems.
2.  This is because you likely still have a reference to your file in memory somewhere. Likely due to the fact that you're displaying it on screen.

If you need to load the whole thing into memory so users of your application can minipulate the file, your hands are tied. You might try streaming the records in as the user needs them. The TextReader and/or StreamReader classes are probably a good starting point if you want to go down that path.

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/3568216) — 1 upvotes *(accepted answer)*. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
