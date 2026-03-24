---
title: "Razor and ASP.NET: the right way to test whether a record exists and use its fields?"
description: "My answer to \"Razor and ASP.NET: the right way to test whether a record exists and use its fields?\" on Stack Overflow"
date: 2014-05-20
author:
  name: Nate Bross
tags:
  - c#
  - asp.net
  - razor
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/23765026"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/23764916):*

> I have the following code in a cshtml file to retrieve a record (has to be only record) and display its record:
> 
> ```
> @{
>     //id is already obtained at this point
>     var db = Database.Open("myConnection");
>     var query = "select * from my_record where id= " + id;
> }
> 
> @foreach (var row in db.Query(query))
> {
>     <span>@row.title</span>
> 
> }
> 
> ```
> 
> As you can see, I use foreach loop as a test to see if there is any record. In my case, there is ONLY one record for sure. What is the right way to test whether a record exists instead of using foreach?
> 
> **UPDATE**
> 
> I understand the controller, etc. I hope to have a quick solution for a VERY simple situation. It is a simple page for illustration only. I am not ready to build a three-tier web application. It is ASP.NET Web Pages (and not ASP.NET MVC). Thanks.
> 
> Regards and thanks.

*I posted the following answer, which received 1 upvote:*

No. Not really. You are returning the entire record, and there is no need for that. You can modify your query to be the following:

```
var sql = "select count(*) from my_record where id= " + id;

```

This will return the count of records matching the `where` clause. You simply check if the result is `!= 1` to determine if it does not exist.

That all said, unless you are using ASP.NET Web Pages (and _not_ ASP.NET MVC) you should move this data code to your controller.

**edit**

> What is the right way to test whether a record exists instead of using foreach?

That depends on the result of `db.Query(query)`. a simple implementation would be

```
var results = db.Query(query);
if(results.Count() == 0)
{
// does not exist
}

```

<details>
<summary>Notable comments</summary>

**Nate** (2 upvotes): You asked if it was the best way to check if it exists, not if it exists and then display it. If you need to check if it exists and display it, then your query should be OK (presuming you need all the fields)

</details>

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/23765026) — 1 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
