---
title: "FileSystemWatcher - How to pipe output to text file?"
description: "My answer to \"FileSystemWatcher - How to pipe output to text file?\" on Stack Overflow"
date: 2011-05-20
author:
  name: Nate Bross
tags:
  - c#
  - .net
  - windows
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/6076003"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/6075940):*

> I am using the FileSystemWatcher Class. I am trying to pipe the output to a text file. I have added the `StreamWriter fileWriter = new StreamWriter("test.txt");` but nothing is output to the file! Where am I going wrong?
> 
> ```
> class Program
> {
>     static void Main(string[] args)
>     {
>         string dirPath = "C:\\";
> 
>         FileSystemWatcher fileWatcher = new FileSystemWatcher(dirPath);
>         fileWatcher.IncludeSubdirectories = true;
>         fileWatcher.Filter = "*.exe";
>         // fileWatcher.Filter = "C:\\$Recycle.Bin";
>         //  fileWatcher.Changed += new FileSystemEventHandler(FileWatcher_Changed);
>         fileWatcher.Created += new FileSystemEventHandler(FileWatcher_Created);
>         //  fileWatcher.Deleted += new FileSystemEventHandler(FileWatcher_Deleted);
>         //  fileWatcher.Renamed += new RenamedEventHandler(FileWatcher_Renamed);
>         fileWatcher.EnableRaisingEvents = true;
>         StreamWriter fileWriter = new StreamWriter("test.txt");
>         Console.ReadKey();
>     }
> }
> 
> ```

*I posted the following answer, which was chosen as the accepted answer and received 2 upvotes:*

You need to call

```
fileWriter.Write(data);

```

Additionally, you should wrap it up like this:

```
using(StreamWriter fileWriter = new StreamWriter("test.txt"))
{
    fileWriter.Write(data);
    fileWriter.Flush(); // maybe not necessary
}

```

This will write data to the filesystem and it should trigger your FileSystemWatcher object.

**edit -- inplace example**

```
class Program
{    
    static void Main(string[] args)
    {
        string dirPath = "C:\\";
        FileSystemWatcher fileWatcher = new FileSystemWatcher(dirPath); 
        fileWatcher.IncludeSubdirectories = true;  
        fileWatcher.Filter = "*.exe";    
        // fileWatcher.Filter = "C:\\$Recycle.Bin";   
        //  fileWatcher.Changed += new FileSystemEventHandler(FileWatcher_Changed);   
        fileWatcher.Created += new FileSystemEventHandler(FileWatcher_Created);    
        //  fileWatcher.Deleted += new FileSystemEventHandler(FileWatcher_Deleted);  
        //  fileWatcher.Renamed += new RenamedEventHandler(FileWatcher_Renamed);    
        fileWatcher.EnableRaisingEvents = true;      

        // updated code
        using(StreamWriter fileWriter = new StreamWriter("test.txt"))
        {
            var data = true;
            fileWriter.Write(data);
        }

        Console.ReadKey(); 
    }
}

```

<details>
<summary>Notable comments</summary>

**Nate** (0 upvotes): Where are you defining `e`? I'm assuming the code sample you provided was dumbed down. If that is truely your entire code, there is no `e` object defined at the same scope that `fileWriter` is defined and that error is to be expected.

**Nate** (0 upvotes): Try something like `fileWriter.Write(e.OldName + " was renamed to " + e.Name + Environment.NewLine);`

**Nate** (0 upvotes): @Michael -- yes, you can change that to whatever you want, its just an example. The `StreamWriter.Write();` method has many overloads that take different parameters.

**Nate** (0 upvotes): @Michael glad to hear it. Good luck.

</details>

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/6076003) — 2 upvotes *(accepted answer)*. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
