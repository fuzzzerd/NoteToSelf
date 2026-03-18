---
title: "How to directly execute SQL query in C#?"
description: "My answer to \"How to directly execute SQL query in C#?\" on Stack Overflow"
date: 2014-02-11
author:
  name: Nate Bross
tags:
  - c#
  - .net
  - sql-server
  - batch-file
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/21709663"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/21709305):*

> Ok, I have an old batch file that does exactly what I need. However, with out new administration we can't run the batch file anymore so I need to start up with C#.
> 
> I'm using Visual Studio C# and already have the forms set up for the application I need to build. (I'm learning as I go)
> 
> Here is what I need to accomplish in C# (This is the batch guts)
> 
> ```
> sqlcmd.exe -S .\PDATA_SQLEXPRESS -U sa -P 2BeChanged! -d PDATA_SQLEXPRESS  -s ; -W -w 100 -Q "SELECT tPatCulIntPatIDPk, tPatSFirstname, tPatSName, tPatDBirthday  FROM  [dbo].[TPatientRaw] WHERE tPatSName = '%name%' "
> 
> ```
> 
> Basically it uses `SQLCMD.exe` with the already existing datasource called `PDATA_SQLExpress`.  
> I've searched and gotten close but I'm still at a loss on where to start.

To execute your command directly from within C#, you would use the [SqlCommand](http://msdn.microsoft.com/en-us/library/system.data.sqlclient.sqlcommand%28v=vs.110%29.aspx) class.

Quick sample code using paramaterized SQL (to avoid injection attacks) might look like this:

```
string queryString = "SELECT tPatCulIntPatIDPk, tPatSFirstname, tPatSName, tPatDBirthday  FROM  [dbo].[TPatientRaw] WHERE tPatSName = @tPatSName";
string connectionString = "Server=.\PDATA_SQLEXPRESS;Database=;User Id=sa;Password=2BeChanged!;";

using (SqlConnection connection = new SqlConnection(connectionString))
{
    SqlCommand command = new SqlCommand(queryString, connection);
    command.Parameters.AddWithValue("@tPatSName", "Your-Parm-Value");
    connection.Open();
    SqlDataReader reader = command.ExecuteReader();
    try
    {
        while (reader.Read())
        {
            Console.WriteLine(String.Format("{0}, {1}",
            reader["tPatCulIntPatIDPk"], reader["tPatSFirstname"]));// etc
        }
    }
    finally
    {
        // Always call Close when done reading.
        reader.Close();
    }
}

```

<details>
<summary>Notable comments</summary>

**Nate** (5 upvotes): @Fa773NM0nK No good reason beyond its a sample and I forgot. For anyone wondering, here's a good read on why its a good idea: [stackoverflow.com/questions/3386770/using-on-sqldatareader](http://stackoverflow.com/questions/3386770/using-on-sqldatareader "using on sqldatareader")

**Fa773N M0nK** (6 upvotes): Is there any reason for the _using_ on SqlConnection but not on SqlDataReader?

**Nate** (0 upvotes): @Anjali Yes you can call SqlCmd.exe directly from C#, you would need to look into [Process.Start()](http://msdn.microsoft.com/en-us/library/system.diagnostics.process.start\(v=vs.110\).aspx)

**Nate** (0 upvotes): @Redracer68 Why would you want `OdbcCommand`? If your database is SQL Server, the `SqlCommand` (and `SqlConnection`) are the best classes to use; while you can access SQL Server via `OdbcCommand` and even `OleDbCommand` the `SqlCommand` is probably best. What's your usecase for using ODBC instead? That said, you could switch the above code to `OdbcConnection` and `OdbcCommand` setup an ODBC DSN and I don't see why it would not work.

**Nate** (1 upvotes): @Redracer68 I suspect an issue with the SQL query. Try using the name of the table in your query, `TPatientRaw` instead of the full `[dbo].[Table]`

</details>

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/21709663) — 184 upvotes *(accepted answer)*. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
