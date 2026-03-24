---
title: "C#: How to check if I can read and/or delete a directory"
description: "My answer to \"C#: How to check if I can read and/or delete a directory\" on Stack Overflow"
date: 2009-10-21
author:
  name: Nate Bross
tags:
  - c#
  - access-control
  - directory
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/1604187"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/1604183):*

> I loop through a bunch of directories recursively. Some of them (like _D:\\$RECYCLE.BIN\\S-1-5-20_) give me a `System.UnauthorizedAccessException`. I suppose that I can just catch it and move on, but I would rather figure that out in advance.
> 
> So, when I have a `DirectoryInfo` object. How can I see if I am allowed to `GetDirectories()` and possibly `Delete()` it?

*I posted the following answer:*

I believe you will need to write your own `GetDirectories()` method; that recursivly gets the ones inside of it.

[This Microsoft Article](http://support.microsoft.com/kb/303974) has a good article on how to do it, with a bit of work you can clean it up to use Generic Lists and make it fit your solution.

Simply put, System.IO.Directory.GetDirectories() will fail every time it gets one of those exceptions.

Code roughly like this (copied from above) should get you started

```
    List<String> directories = new List<String>();
    void DirSearch(string sDir) 
    {
        try 
        {
            foreach (string d in Directory.GetDirectories(sDir)) 
            {
                //foreach (string f in Directory.GetFiles(d, txtFile.Text)) 
                //{
                //    
                //}
                // use this to search for files recursivly.
                directories.Add(d);
                DirSearch(d);
            }
        }
        catch (System.Exception excpt) 
        {
            Console.WriteLine(excpt.Message);
        }
    }

```

Once you have your list of directories, you can then perform operations on them, with some mods the above method should ensure you have read permissions on anything in the list.

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/1604187) — 0 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
