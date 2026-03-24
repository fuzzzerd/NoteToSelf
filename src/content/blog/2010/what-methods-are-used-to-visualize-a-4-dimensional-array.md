---
title: "What methods are used to visualize a 4-dimensional Array?"
description: "My answer to \"What methods are used to visualize a 4-dimensional Array?\" on Stack Overflow"
date: 2010-05-14
author:
  name: Nate Bross
tags:
  - multidimensional-array
  - visualization
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/2835128"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/2834931):*

> An Array ( a row of elements ):
> 
> ```
> [ ][ ][ ][ ][ ][ ]
> 
> ```
> 
> A 2-D Array ( a table ):
> 
> ```
> [ ][ ][ ][ ][ ][ ]
> [ ][ ][ ][ ][ ][ ]
> [ ][ ][ ][ ][ ][ ]
> [ ][ ][ ][ ][ ][ ]
> 
> ```
> 
> A 3-D Array:
> 
> ```
> //Imagine the above table as a cube ( a table with depth )
> 
> ```
> 
> **How does one visualize a 4-D array?**
> 
> The closest I can come is multiple cubes, so for `int[,,,]` \[5,10,2,7\] would be cube 5, row 10, column 2, layer(depth) 7.
> 
> I'm not sure if this is the best way to visualize a 4-D array, though... and I'm not sure it's the best way to teach it... however it does have the advantage of being extensible ( a row cubes, a table of cubes, a cube of cubes ( 6-d array )
> 
> Cubes through time is another way that I can think of it.
> 
> Am I on the right track here?

*I posted the following answer, which was chosen as the accepted answer and received 16 upvotes:*

If you're trying to display output of a program for end users, then you are on the right track.

If you're trying to teach it, I'd briefly use that method, and then I'd go into depth explaining how the computer keeps them all in contiguous memory -- [http://www.plantation-productions.com/Webster/www.artofasm.com/Windows/HTML/Arraysa2.html](http://www.plantation-productions.com/Webster/www.artofasm.com/Windows/HTML/Arraysa2.html). I think this is the best way to understand it.

* * *

The original link is no longer working, but I found it up on the Internet Archive here -- [http://web.archive.org/web/20120410120743/http://webster.cs.ucr.edu/AoA/Windows/HTML/Arraysa2.html](http://web.archive.org/web/20120410120743/http://webster.cs.ucr.edu/AoA/Windows/HTML/Arraysa2.html)

* * *

Updated first paragraph to show updated link, thanks to @OskensoKashi.

<details>
<summary>Notable comments</summary>

**Nate** (2 upvotes): @zeristor Found it on the Internet Archive -- [web.archive.org/web/20120410120743/http://webster.cs.ucr.edu‌​/…](http://web.archive.org/web/20120410120743/http://webster.cs.ucr.edu/AoA/Windows/HTML/Arraysa2.html)

</details>

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/2835128) — 16 upvotes *(accepted answer)*. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
