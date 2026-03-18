---
title: "LINQ TO SQL am I missing something obvious here?"
description: "A question I asked on Stack Overflow"
date: 2009-10-28
author:
  name: Nate Bross
tags:
  - c#
  - .net
  - linq
  - linq-to-sql
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/q/1639726"
---

*I [asked this on Stack Overflow](https://stackoverflow.com/q/1639726):*

I have this method, that will be called against from a WCF Client, but for my testing, I'm uisng a local "add project reference." I'm getting the error that I cannot call the DataContext after it's disposed.

```
    public IEnumerable<Server> GetServers()
    {
        // initialze to null
        ServersDataContext sdc = null;

        try
        {
            // get connected
            using (sdc = GetDataContext())
            {
                // disable this deferred loading
                sdc.DeferredLoadingEnabled = false;

                var relations = from svr in sdc.Servers; // complex linq here

                // return
                return relations;
            }
        }
        catch (Exception ex)
        {
            LogError(ex, "fwizs.Internal");
            throw;
        }
        finally
        {
            if (sdc != null)
            {
                sdc.Dispose();
            }
        }
    }

```

And here is how I'm using the method, which gives this error: "Cannot access a disposed object."

```
    if (da.GetServers()
        .Select(sv => sv.ServerID == s.ServerID).Count() == 0)
    {

        // do work since we found it
    }

```

Using the .Select() method on this returned IEnumerable objects trys to run back to the database to make the select. After being serialized for WCF I don't think it'll be an issue, but I would like my local tests to work.

---

> [tvanfosson answered](https://stackoverflow.com/a/1639739) (4 upvotes):
>
> Materialize your query inside the method to ensure that the database call is actually performed before you dispose of the data context.
> 
> ```
> var relations = from svr in sdc.Servers;
> 
> return relations.ToList();
> 
> ```

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/q/1639726) — 1 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
