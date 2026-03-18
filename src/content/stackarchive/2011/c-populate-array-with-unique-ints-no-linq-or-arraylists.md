---
title: "C# populate array with unique ints No Linq or ArrayLists;"
description: "My answer to \"C# populate array with unique ints No Linq or ArrayLists;\" on Stack Overflow"
date: 2011-11-11
author:
  name: Nate Bross
tags:
  - c#
  - arrays
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/8099438"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/8099250):*

> This code is buggy but can't figure out why ... want to populate an array with 7 unique random integers without using arraylists or linq! I know the logic is not okay...
> 
> ```
> class Program
> {
>     static void Main(string[] args)
>     {    int current;
>          int[] numbers = new int[7];  // size of that array 
>          Random rNumber = new Random();
>          current = rNumber.Next(1, 50);
>          numbers[0] = current;
>          Console.WriteLine("current number is {0}", current);
>          for (int i=1;i<7;i++)
>          {
>              current = rNumber.Next(1, 50);
>              for (int j = 0; j < numbers.Length; j++)
>              {
>                  do
>                  {
>                      if (current == numbers[j])
>                      {
>                          Console.WriteLine("Duplicate Found");
>                          current = rNumber.Next(1, 50);
>                      }
>                      else
>                      {   
>                          numbers[j++] = current;
>                          break;
>                      }
>                  }while (current == numbers[j]);
> 
>              }//inner for
> 
>          }//outer for
>          for (int l = 0; l < 7; l++) // DISPLAY NUMBERS
>          {
>              Console.WriteLine(numbers[l]);
>          }
> 
>     }// main
>  }//class
> 
> ```

What about this?

```
int[] list = new int[7]; 
var rn = new Random(Environment.TickCount);
for (int i = 0; i < 7; i++) 
{ 
    var next = rn.Next(1, 50);
    while(Contains(list, next))
    {
        next = rn.Next(1, 50);
    }
    list[i] = next;       
} 


private bool Contains(IEnumerable<int> ints, int num) 
{
    foreach(var i in ints)
    {
        if(i = num) return true;
    }
    return false;
} 

```

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/8099438) — 0 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
