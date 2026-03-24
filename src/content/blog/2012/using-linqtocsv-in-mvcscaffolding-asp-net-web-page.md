---
title: "Using LINQtoCSV in MvcScaffolding ASP.NET Web Page"
description: "My answer to \"Using LINQtoCSV in MvcScaffolding ASP.NET Web Page\" on Stack Overflow"
date: 2012-05-15
author:
  name: Nate Bross
tags:
  - asp.net-mvc
  - linq
  - csv
  - export-to-csv
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/10607396"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/10607364):*

> I'm trying to add a link to a basic MvcScaffolding project that outputs all data from a IQueryable interface. The controllers are built with `Scaffold Controller Sales -Repository` and have nothing out of the ordinary in the Sale class, just a few strings and some integers. Everything in the project works as expected.
> 
> From posts I've found, LINQtoCSV could be a possible solution for me (http://www.codeproject.com/Articles/25133/LINQ-to-CSV-library). Unfortunately, I don't know what to add. If I have a link on the index page of /Sales/ that points to /Sales/CSV/, how can prompt the user with "Download or Open"?
> 
> I also saw this page (http://www.asp.net/web-api/overview/formats-and-model-binding/media-formatters) that tells how to build a Web API, but I cannot use MVC 4 per company standards.
> 
> The code I currently have in `SalesController.cs` is the following (which errors with `[DirectoryNotFoundException: Could not find a part of the path 'C:\...\Sales\CSV\LINQtoCSV.CsvContext'.]`):
> 
> ```
>     //
>     // GET: /Sales/CSV/
>     [Authorize]
>     public FilePathResult CSV()
>     {
>         List<Sale> dataRows = saleRepository.All.ToList();
> 
>         CsvFileDescription outputFileDescription = new CsvFileDescription
>         {
>             SeparatorChar = '\t', // tab delimited
>             //EnforceCsvColumnAttribute = false,
>             FirstLineHasColumnNames = true, // no column names in first record
>             FileCultureName = "en-US" // default is the current culture
>         };
>         CsvContext cc = new CsvContext();
> 
>         cc.Write<Sale>(dataRows,
>             "output.csv",
>             outputFileDescription);
> 
>         return File(cc.ToString(), "text/csv");
>     }
> 
> ```
> 
> **EDIT:** Modified code to create list from repository and output using File().
> 
> **EDIT:** This is the modified code that I'm using. In the model, I'm building the string with a joined list. The controller code is as follows:
> 
> ```
>     [Authorize]
>     public FileStreamResult CSV3()
>     {
>         MemoryStream output = new MemoryStream();
>         StreamWriter writer = new StreamWriter(output);
>         saleRepository.All.ToList().ForEach(s => writer.WriteLine(s.ToStringCSV));
> 
>         writer.Flush();
>         output.Position = 0;
> 
>         return File(output, "text/csv", "report.csv");
>     }
> 
> ```

*I posted the following answer, which was chosen as the accepted answer:*

Maybe you need to use the [FileResult](http://msdn.microsoft.com/en-us/library/system.web.mvc.fileresult.aspx) class? See also [How to create file and return it via FileResult in ASP.NET MVC?](https://stackoverflow.com/questions/1375486/how-to-create-file-and-return-it-via-fileresult-in-asp-net-mvc)

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/10607396) — 0 upvotes *(accepted answer)*. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
