---
title: "Is there a portable way to represent an arbitrary database table (structure is only known at run-time) similar to the way a DataSet/DataTable does?"
description: "A question I asked on Stack Overflow"
date: 2013-06-17
author:
  name: Nate Bross
tags:
  - c#
  - .net
  - database
  - data-structures
  - portable-class-library
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/q/17156608"
---

*I [asked this on Stack Overflow](https://stackoverflow.com/q/17156608):*

I have a wrapper library for an API that queries user defined databases. It is currently working well using DataSet, DataTable, DataRow, etc. I would like to convert it to a portable library for use on other platforms but these classes are not part of the portable subset.

**Is there anything that is even remotely equivalent to these classes?** The main thing that my library does with the DataSet is to transfer data into a domain layer, which populates the business objects.

What I need is a way to pass an arbitrary representation of a database table from my library to the program calling my library that works on some form of the portable library, ideally all subsets (Xbox not required) but anything is better that the nothing I have now.

**Background**

This is the data flow that I'm struggling with

```
User Defined Database <==> My Library <==> User C# Code

```

The API that is available is rough around the edges. My library makes querying it much easier, but since I don't know anything about the structure at design time, I parse the returned data from the API and put it into DataSet objects. The end user's parses those DataSets to populate their domain objects. What I'm looking for is a way to do this for a portable library, without a DataSet.

Example of the usage of my library, this is also the extent of features of DataSet/Table/Row that are used:

```
var myLib = new MyLib(parms);
Find request = myLib.MakeFind();
request.AddSearch("userID", 12);
DataSet response = request.Execute()

var user = new User();
user.ID = int.Parse(response.Tables[0].Rows[0]["userID"].ToString());
user.FirstName = response.Tables[0].Rows[0]["FIRST_NAME"].ToString();
user.LastName = response.Tables[0].Rows[0]["LAST_NAME"].ToString();

foreach (DataRow relatedRow in dr.GetChildRows("Logs"))
{
    var lg = new LogEntry() { ID = int.ParserelatedRow["ID"].ToString()), Text = relatedRow["Text"].ToString(); };
    user.Logs.Add(lg);
}

```

<details>
<summary>Notable comments</summary>

**Nate** (0 upvotes): @JoeEnos So my output would then just be a giant string of json? My issue with that is then users of my library need to parse my serialized string, which may or may not be better than the API I'm trying to wrap up. If it helps, the current version of the library is [here on GitHub](https://github.com/WizardSoftware/fmDotNet)

**Nate** (0 upvotes): @Guvante I just updated my post to include the most complex usage of the returned DataSet.

</details>

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/q/17156608) — 2 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
