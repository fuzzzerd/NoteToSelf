---
title: "NewsAPI C# library runs on console, hangs on winforms"
description: "My answer to \"NewsAPI C# library runs on console, hangs on winforms\" on Stack Overflow"
date: 2018-10-18
author:
  name: Nate Bross
tags:
  - c#
  - .net
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/52878862"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/52878534):*

> I ran the example given at the web site under Visual Studio 2017 Community Edition and it worked fine. However, when I attempted to run it on a winforms library, it hung, even when given the exact same term:
> 
> Console Version
> 
> ```
> static void Main(string[] args)
> {
>     var newsApiClient = new NewsApiClient("KeyRedacted");
>     var articlesResponse = newsApiClient.GetEverything(new EverythingRequest
>     {
>         Q = "Apple",
>         SortBy = SortBys.Popularity,
>         Language = Languages.EN,
>         From = new DateTime(2018, 10, 16)
>     });
>     if (articlesResponse.Status == Statuses.Ok)
>     {
> 
>     //code here
> 
> ```
> 
> Winforms Version
> 
> ```
> private void btnSearch_Click(object sender, EventArgs e)
> {
>     var newsApiClient = new NewsApiClient("keyredacted");
>     var articleResponse = newsApiClient.GetEverything(new EverythingRequest
>     {
>         Q = "Apple",
>         SortBy = SortBys.Popularity,
>         Language = Languages.EN,
>         From = new DateTime(2018, 10, 16)
>     });  //this is where it hangs
> 
>     if (articleResponse.Status == Statuses.Ok)
>     {
> 
> ```

*I posted the following answer, which was chosen as the accepted answer and received 1 upvote:*

Assuming that you're using [this client](https://github.com/News-API-gh/News-API-csharp), the [method you're calling](https://github.com/News-API-gh/News-API-csharp/blob/ff4a118e1511ff7c32a60dc1341d81f91d518bdc/NewsAPI/NewsApiClient.cs#L179) uses a `Task.Result` which can [cause a deadlock](https://stackoverflow.com/a/17248813/86860). Seems reasonable, since the code/signature and examples match.

I would rewrite your code like this for WinForms:

```
private async void btnSearch_Click(object sender, EventArgs e)
{
    var newsApiClient = new NewsApiClient("keyredacted");
    var articleResponse = await newsApiClient.GetEverythingAsync(new EverythingRequest
    ...

```

If you are deadset on not using the async methods in your code you could try running it inside of a `Task.Run(() => /* stuff */);`

See also: [https://blogs.msdn.microsoft.com/pfxteam/2012/04/13/should-i-expose-synchronous-wrappers-for-asynchronous-methods/](https://blogs.msdn.microsoft.com/pfxteam/2012/04/13/should-i-expose-synchronous-wrappers-for-asynchronous-methods/)

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/52878862) — 1 upvotes *(accepted answer)*. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
