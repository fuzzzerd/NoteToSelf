---
title: "Making MySQL return the table backwards"
description: "My answer to \"Making MySQL return the table backwards\" on Stack Overflow"
date: 2009-05-13
author:
  name: Nate Bross
tags:
  - php
  - mysql
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/859667"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/859642):*

> I want to make a simple news system using PHP and MySQL, right now I got a working post and read system but there is only one problem, I want it to show the 10 latest news but instead it shows the 10 oldest news.  
>   
> My question is: Is there a way to make MySQL return the results from the bottom of a table or do I have to first get the number of posts and then limit it to the very last 10 ones?  
>   
> Here is the insert (title and text is escaped and time is time(), poster is not done yet):
> 
> ```
> mysql_query("INSERT INTO news (title, poster, text, time) VALUES ('$newstitle', '1', '$newstext', '$time')") or die(mysql_error());
> 
> ```
> 
>   
> And to retrive it (addnews echos it):
> 
> ```
> $myqr = mysql_query('SELECT * FROM news LIMIT 10') or die("Error running news query: ". mysql_error());
> while($myres = mysql_fetch_array($myqr))
> {
> addnews($myres['id'], $myres['title'], "admin", date('l jS F Y - H:i:s', $myres['time']), $myres['text']);
> }
> 
> ```
> 
> So, short: I want to read the database backwards, is it possible?

*I posted the following answer:*

Could you not simply Order By time Descending before LIMIT 10?

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/859667) — 0 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
