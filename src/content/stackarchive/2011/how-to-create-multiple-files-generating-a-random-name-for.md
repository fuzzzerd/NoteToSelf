---
title: "How to create multiple files, generating a random name for each file"
description: "My answer to \"How to create multiple files, generating a random name for each file\" on Stack Overflow"
date: 2011-03-04
author:
  name: Nate Bross
tags:
  - java
  - random
  - file
  - try-catch
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/5196523"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/5196429):*

> What I'm trying to do is create lots of random files but I'm just completely lost. The code below just doesn't work, I'm wondering why it doesn't work and what can i do to fix it.
> 
> ```
> import java.io.*;
> import java.util.*;
> 
> public class main {
>   public static void main(String arg[]){
> 
>       Random rn = new Random();
>       int randn = 1+rn.nextInt(999999990);
>       String I_S = Integer.toString(randn);
> 
>       Formatter file;
> 
> 
>       try{
> 
>           for(int i = 0; i < 9999999; i++){
>               file = new Formatter("%s.txt", I_S);
>           }
>       }
>       catch(Exception ex){
>         System.err.println("Error");
>       }
> 
>   } 
> 
> ```
> 
> }

You may want to look into writing something more like this:

```
void Write()
{
    try {
        for(int i = 0; i < MAX_FILES; i++) {
            FileWriter outFile = new FileWriter("C:\File" + i.toString() + ".txt");
            PrintWriter out = new PrintWriter(outFile);

            // Write text to file
            out.println("This is line 1");
            out.println("This is line 2");
            out.print("This is line3 part 1, ");
            out.println("this is line 3 part 2");
            out.close();
        }
    } 
            catch (IOException e) {
        e.printStackTrace();
    }
}
// obviously this requires a import java.io.*; at the top of the class

```

Source: [http://www.abbeyworkshop.com/howto/java/writeText/index.html](http://www.abbeyworkshop.com/howto/java/writeText/index.html)

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/5196523) — 1 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
