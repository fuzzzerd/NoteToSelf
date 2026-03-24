---
title: "How do you use MAX properly?"
description: "My answer to \"How do you use MAX properly?\" on Stack Overflow"
date: 2011-10-04
author:
  name: Nate Bross
tags:
  - mysql
  - sql
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/7653190"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/7653144):*

> Here is my query
> 
> ```
> $gethigherrows = "(SELECT *
>     FROM highscore 
>    WHERE score >= '$score' 
> ORDER BY score ASC,
> position ASC
>    LIMIT 5)";
> 
> ```
> 
> Here is what I want to include:
> 
> ```
> SELECT * FROM highscore WHERE score > '$score' AND position (is the highest 5 numbers of that group)
> 
> ```
> 
> ![enter image description here](https://i.sstatic.net/VMvXd.jpg)
> 
> it's close, but the high scores above the user entry should be 9,8,7,6,5
> 
> the problem is the `ORDER BY score ASC` part seems to just pull a random 5 out that have the correct score, I want it to pull the concurrent positions in the high score table

*I posted the following answer:*

Try

```
select top 5 from highscores where score > $score order by score desc 

```

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/7653190) — 0 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
