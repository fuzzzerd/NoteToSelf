---
title: "Model becomes null when any of the parameters is null"
description: "My answer to \"Model becomes null when any of the parameters is null\" on Stack Overflow"
date: 2018-10-18
author:
  name: Nate Bross
tags:
  - c#
  - post
  - asp.net-core
  - angular5
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/52878043"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/52876765):*

> In my Angular 5 application, I would like to save an "event" object with the following method :
> 
> ```
> save(newEvent: NewEvent): Observable<any> {
>     const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
>     const requestUrl = 'api/event';
>     return this.http.post<any>(requestUrl, newEvent, httpOptions);
>   }
> 
> ```
> 
> The NewEvent model is :
> 
> ```
> export class NewEvent {
>   id: number;
>   title: string;...
> 
>   constructor() {
>     this.id = null;
>     this.title = '';...
>   }
> }
> 
> ```
> 
> And after I call this with a method in a controller with .NET Core :
> 
> ```
> [HttpPost("api/event")]
> public IDictionary<string, Object> SaveEvent([FromBody] EventViewModel model){...}
> 
> ```
> 
> The EventViewModel POCO is :
> 
> ```
> {
>     public class EventViewModel
>     {
>         public int Id { get; set; }
>         public string Title { get; set; }...
>     }
> }
> 
> ```
> 
> When my object `EventViewModel` has no attributes with a "null" value it works with no problems, but when I have "null" attributes it doesn't work (the `EventViewModel` became "null") and I want to have sometimes "null" attributes.

Your C# model has a non-nullable `int` for the Id column. If you want it to be nullable (as you set it to null in your javascript model) you should define it as `int?` or `Nullable<int>`.

See also: [Nullable Types.](https://learn.microsoft.com/en-us/dotnet/csharp/programming-guide/nullable-types/index)

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/52878043) — 2 upvotes *(accepted answer)*. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
