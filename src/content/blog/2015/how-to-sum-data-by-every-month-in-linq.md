---
title: "How to Sum data by every month in LINQ?"
description: "My answer to \"How to Sum data by every month in LINQ?\" on Stack Overflow"
date: 2015-04-19
author:
  name: Nate Bross
tags:
  - c#
  - linq
  - entity-framework
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/29735757"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/29735697):*

> I can select the sum by year, which is easy.
> 
> Just like this.
> 
> ```
> var query = from t in ctx.SomeDataEntity
>                             group t by t.DateAdded.Year into g
>                             select new
>                             {
>                                 Year = g.Year,
>                                 Total = g.Sum(t => t.SomeColumn1) +
>                                 g.Sum(t => t.SomeColumn2) +
>                                 g.Sum(t => t.SomeColumn3) +
>                                 g.Sum(t => t.SomeColumn4)
>                             };
> 
> ```
> 
> But, how to filter the data by every month? It is not easy as simply replacing t.DateAdded.Year to t.DateAdded.Month, cause t.DateAdded.Month is 1,2,3,...,12. I need the one is in format of 2014-01,2014-02,...,2014-12.

*I posted the following answer, which was chosen as the accepted answer and received 3 upvotes:*

You can group by both Year and Month like this:

```
var query = from t in ctx.SomeDataEntity
                    group t by new 
                    { 
                        Year = t.DateAdded.Year, 
                        Month = t.DateAdded.Month 
                    } into g
                    select new
                    {
                        MonthAndYear = g.Key.Year + "-" + g.Key.Month,
                        Total = g.Sum(t => t.SomeColumn1) +
                        g.Sum(t => t.SomeColumn2) +
                        g.Sum(t => t.SomeColumn3) +
                        g.Sum(t => t.SomeColumn4)
                    };

```

<details>
<summary>Notable comments</summary>

**Nate** (0 upvotes): @GiorgiNakeuri 1) good catch, you need the .Key property, 2) its just an int.

</details>

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/29735757) — 3 upvotes *(accepted answer)*. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
