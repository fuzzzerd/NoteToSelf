---
title: "How can I concatenate two C# Lists of the type List&lt;KeyValuePair&lt;string,string&gt;&gt;. I have some duplicate values and I need those duplicate values"
description: "My answer to \"How can I concatenate two C# Lists of the type List&lt;KeyValuePair&lt;string,string&gt;&gt;. I have some duplicate values and I need those duplicate values\" on Stack Overflow"
date: 2012-08-02
author:
  name: Nate Bross
tags:
  - c#
  - .net
  - list
  - generics
  - concatenation
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/11784335"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/11784306):*

> Any LINQ solutions (preferably) would be appreciated. I need the duplicate values upon concatenating both.

*I posted the following answer, which was chosen as the accepted answer and received 1 upvote:*

If you want to find out which items are in both lists, you need to use the [`Enumerable.Intersect()`](http://msdn.microsoft.com/en-us/library/bb460136.aspx) method.

```
    var list1 = new List<KeyValuePair<string,string>>();
    var list2 = new List<KeyValuePair<string,string>>();

    list1.Add(new KeyValuePair<string,string>("key1", "value1"));
    list1.Add(new KeyValuePair<string,string>("key2", "value2"));
    list2.Add(new KeyValuePair<string,string>("key1", "value1"));
    list2.Add(new KeyValuePair<string,string>("key3", "value3"));

    var inBothLists = list1.Intersect(list2); // contains only key1,value1

```

There are two overloads, one takes an [`IEqualityComparer<T>`](http://msdn.microsoft.com/en-us/library/ms132151.aspx) so in the event that the default one does not perform the comparison the way you want, you can write and provide your own.

<details>
<summary>Notable comments</summary>

**Nate** (0 upvotes): @AndreasNiedermair Just revised using `new KeyValuePair<string,string>("key#", "value#")` and it seems to behave as expected.

</details>

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/11784335) — 1 upvotes *(accepted answer)*. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
