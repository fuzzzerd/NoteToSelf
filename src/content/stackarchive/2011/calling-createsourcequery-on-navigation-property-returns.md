---
title: "Calling .CreateSourceQuery() on Navigation Property returns null when Unit Testing; works on actual database, how do I setup my test data to match?"
description: "A question I asked on Stack Overflow"
date: 2011-12-29
author:
  name: Nate Bross
tags:
  - c#
  - .net
  - entity-framework
  - unit-testing
  - test-data
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/q/8672072"
---

*I [asked this on Stack Overflow](https://stackoverflow.com/q/8672072):*

I have a method which is taking my Entity Framework Entity and converting it into a DTO object. In this method I have parameters to skip and limit the number of related items to return. With small data sets a simple query like this worked well:

```
var query = this.AccessLogs
    .Skip(skipRelated)
    .Take(takeRelated);

```

With larger data sets, I found that this actually executed SELECT \* at my database and caused lots of problems since I have millions of related records in some cases. After asking [this question](https://stackoverflow.com/questions/8662365/skip-take-on-entity-framework-navigation-properties-is-executing-select-o) I modified the query to this:

```
var query = this.AccessLogs
    .CreateSourceQuery()
    .OrderBy(p => p.ID)
    .Skip(skipRelated)
    .Take(takeRelated);

```

Now, while this fixed the performance problems I had during integration tests, this causes every single one of my unit tests to fail, because `.CreateSourceQuery()` returns null and then my `.OrderBy()` barfs with an ArgumentNullException on parameter name: source.

I have a repository which returns `IQueryable<T>` and I have dependency injection setup to unit test it, so I am setting up my "test" data like this. Originally I was just using `List<T>` but I found [this article](http://msdn.microsoft.com/en-us/library/ff714955.aspx) which uses an `InMemoryObjectSet<T>` for testing. Either way, my call to`.CreateSourceQuery()` returns null,even when there **is** data in the underlying collection.

```
IObjectSet<Parent> ret = new InMemoryObjectSet<Parent>();
var parent = new Parent();
parent.ID = 1;
parent.Name = "Name 1";
for(int i = 0; i < 5; i++)
{
    var ch = new Child();
    ch.ID = i;
    ch.ParentID = 1;
    ch.Property1 = "Name " + i.ToString();
    parent .Children.Add(ch);
}
ret.AddObject(parent);

```

**My question is this: How can I setup my test data for unit tests so that `.CreateSourceQuery()` does not return null?**

---

> [Ladislav Mrnka answered](https://stackoverflow.com/a/8672832) (1 upvotes):
>
> You will not. If you are testing EF related code you must do it with real EF and real database - there is no way around this and any try to avoid it equals to [not testing your application](https://stackoverflow.com/questions/6904139/fake-dbcontext-of-entity-framework-4-1-to-test/6904479#6904479) but some assumption about how should EF work.
> 
> Why it is not possible to fake in your case? `CreateSourceQuery` is a method of `EntityCollection` and entity collection is dependent on real ObjectContext. In the same time `EntityCollection` is sealed. This method is also not available in any public interface. So there is no way to replace its logic with normal unit testing APIs. The only option is to use some more advanced technology which will allow you redirect method call to some other (this is provided only by commercial TypeMock Isolator and MS Moles) but that would lead to the same problem as you are trying to do at the moment => testing assumption about code you don't own. Any kind of faking make sense only if your test is not testing EF related code, querying or persistence - that stuff must be covered by separate integration tests.
> 
> How to avoid it? In your tested class create new method:
> 
> ```
> protected virtual IEnumerable<AcessLog> GetLogs(int skipRelated, int takeRelated)
> {
>      return this.AccessLogs.
>                 .CreateSourceQuery()
>                 .OrderBy(a => p.ID)
>                 .Skip(skipRelated)
>                 .Take(takeRelated);
> }
> 
> ```
> 
> Now in your test don't use your original class but derived class which somehow override `GetLogs` method and returns what you expect in your test.
> 
> But wait. I have just skipped testing of your logic inside `GetLogs`, didn't I? Yes I indeed did. As mentioned above this code cannot be unit tested. It must be covered by separate integration test using a real database but you have that code isolated in single method and all other logic dependent on this method can be unit tested by faking this method.
> 
> It would still not cover all problems you can have with `CreateSourceQuery`. For example what happens if your relations are already loaded? Or what happens if your entity is from some reason detached? Those are side effects which are not easy to test.

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/q/8672072) — 0 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
