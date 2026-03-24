---
title: "Is this UPDATE table statement correct in an msdn topic"
description: "My answer to \"Is this UPDATE table statement correct in an msdn topic\" on Stack Overflow"
date: 2011-03-03
author:
  name: Nate Bross
tags:
  - sql
  - sql-server
  - ado.net
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/5184037"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/5183992):*

> I have seen this type of UPDATE statement (just like insert statement) in the following msdn topic:
> 
> [http://msdn.microsoft.com/en-us/library/aa0416cz.aspx#Y2461](http://msdn.microsoft.com/en-us/library/aa0416cz.aspx#Y2461)
> 
> UPDATE statement:-
> 
> ```
> adapter.UpdateCommand = New SqlCommand("UPDATE Customers " &
>   "(CustomerID, CompanyName) VALUES(@CustomerID, @CompanyName) " & _
>   "WHERE CustomerID = @oldCustomerID AND CompanyName = " &
>   "@oldCompanyName", connection)
> 
> ```
> 
> Is this statement correct or not?
> 
> I have tried executing it and it is giving syntax errors.

*I posted the following answer, which received 3 upvotes:*

That SQL appears to be correct for an `INSERT INTO` but not for an `UPDATE` It should read:

```
adapter.UpdateCommand = New SqlCommand("UPDATE Customers" & _
    " SET CustomerID = @CustomerID, CompanyName = @CompanyName)" & _
    " WHERE CustomerID = @oldCustomerID AND CompanyName =" & _
    " @oldCompanyName", connection)

```

That SQL is what one would call paramaterized, so that makes this code (lower in the snippet) very important:

```
adapter.UpdateCommand.Parameters.Add( _
  "@CustomerID", SqlDbType.NChar, 5, "CustomerID")
adapter.UpdateCommand.Parameters.Add( _
  "@CompanyName", SqlDbType.NVarChar, 30, "CompanyName")

' Pass the original values to the WHERE clause parameters.
Dim parameter As SqlParameter = dataSet.UpdateCommand.Parameters.Add( _
  "@oldCustomerID", SqlDbType.NChar, 5, "CustomerID")
parameter.SourceVersion = DataRowVersion.Original
parameter = adapter.UpdateCommand.Parameters.Add( _
  "@oldCompanyName", SqlDbType.NVarChar, 30, "CompanyName")
parameter.SourceVersion = DataRowVersion.Original

```

<details>
<summary>Notable comments</summary>

**Nate** (1 upvotes): You are quite right! It should be `... SET col1 = @val1, col2 = @val2`

</details>

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/5184037) — 3 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
