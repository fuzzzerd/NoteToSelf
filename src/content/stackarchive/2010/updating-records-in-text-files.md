---
title: "Updating Records In Text Files"
description: "My answer to \"Updating Records In Text Files\" on Stack Overflow"
date: 2010-07-21
author:
  name: Nate Bross
tags:
  - c#
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/3301808"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/3301690):*

> I need to create a student management system in a C# console. I have to use a text file for saving data. I can add data and retrieve data in text files but I am unable to update any student record. How can I update specific student records in a text file?
> 
> For example, my program will ask users to input a student that he wants to update then the program should fetch the complete record of that student. The program again asks the user to select the field or fields that he wants to update. After updating the field, the record should be updated.
> 
> This is my code so far, but it doesn't seem to work:
> 
> ```
> StringBuilder newFile = new StringBuilder();
> 
> string temp = null;
> string userchoice = null;
> string replacetext =null;
> string update = null;
> 
> Console.WriteLine("enter the id of student to update the record");
> 
> userchoice = Console.ReadLine();
> 
> String[] file=File.ReadAllLines(@"myfile.txt");
> foreach (string line in file)
> {
>     if(line.Contains(userchoice))
>     {
>         Console.WriteLine("enter the data you want to replace");
>         replacetext=Console.ReadLine();
> 
>         if(line.Contains(update)){
>             Console.WriteLine("enter the data you want to replace with");
>             update=Console.ReadLine();
>             temp=line.Replace(replacetext,update);
>             newFile.Append(temp+"\r\n");
>             continue;
>         }
>         newFile.Append(line+"\r\n");
>     }
>     File.WriteAllText(@"myfile.txt",newFile.ToString());
> }
> 
> ```

First, I would define a "student" object.

```
public class Student
{
    public int ID { get; set; }
    public String Name { get; set;}
    // etc etc
}

```

Second, I'd use `List<Student>` to keep track of all students in the system.

Third, I would use XML Serialization to persist to disk, for retrevial upon program load. After all, XML is just text.

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/3301808) — 0 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
