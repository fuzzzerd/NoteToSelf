---
title: "Efficient way to insert a list data into a mySQL database in C#"
description: "My answer to \"Efficient way to insert a list data into a mySQL database in C#\" on Stack Overflow"
date: 2012-04-30
author:
  name: Nate Bross
tags:
  - c#
  - mysql
  - database
  - loops
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/10387391"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/10387127):*

> I have csv files which I would like to dump into a db. so I crated a loop of the files, and inside the loop I have created a list called data for each line
> 
> ```
> StreamReader file = new StreamReader(itemChecked.ToString());//read the file
> 
> while ((line = file.ReadLine())  != null)
> {
>     if (start_flag == true) // start processing the numbers, get the real data
>     {
>         List<string> data = new List<string>();
>         data.AddRange(line.Replace("\"", "").Split(',').AsEnumerable());
>     }
> }
> 
> ```
> 
> so far so good.
> 
> Now I want to insert the list data into the database. The list is quite large. I don't want to type every single one of them like so:
> 
> ```
> insert into table1 (tablenames) values (a, b, c on and on)
> 
> ```
> 
> How can I loop the list and insert the data into the database?

*I posted the following answer:*

First, you will need to use [the ADO.NET Driver for MySQL (Connector/NET)](http://www.mysql.com/products/connector/) to connect to the database.

Second, you will want to open a connection to the database, and then insert some data:

```
var connection = new MySqlConnection();
connection.ConnectionString =
   "server=localhost;"
    + "database=DBNAME;"
    + "uid=USERNAME;"
    + "password=PASSWORD;";

connection.Open();

foreach(var datum in data) 
{
    var command = connection.CreateCommand();
    command.CommandText =
        "insert into table1 (tablenames)"
        + " values "
        + "(a, b, c on and on)";

    var result = command.ExecuteReader();
}

```

My example was [based off this article](http://markalexanderbain.suite101.com/how-to-add-records-to-mysql-with-c-a120775). This isn't a perfect solution, but it should get you started. You may want to [look into MySQL Transactions](http://dev.mysql.com/doc/refman/5.0/en/ansi-diff-transactions.html) to batch your inserts into efficient groupings (depending on data size maybe 100-1000 at a time.)

<details>
<summary>Notable comments</summary>

**Nate** (0 upvotes): Maybe some sample data would be useful, because I don't think I understand what you're trying for.

</details>

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/10387391) — 0 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
