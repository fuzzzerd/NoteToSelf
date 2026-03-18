---
title: "Is it bad to use nested Try..Catch blocks like this?"
description: "A question I asked on Stack Overflow"
date: 2009-10-21
author:
  name: Nate Bross
tags:
  - c#
  - .net
  - try-catch
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/q/1602102"
---

*I [asked this on Stack Overflow](https://stackoverflow.com/q/1602102):*

Is this a bad idea? Is there a better way to achieve the same effect?

```
// assume that "name" is a string passed as a parameter to this code block
try
{
    MainsDataContext dx = new MainsDataContext();
    try
    {
        Main m = dx.Main.Single(s => s.Name == name);
        return m.ID;
    }
    catch (InvalidOperationException)
    {
        Guid g = Guid.NewGuid();

        Main s = new Main 
        {
            Name = name,
            ID = g
        };

        dx.Mains.InsertOnSubmit(s);
        dx.SubmitChanges();

        return g;
    }
}
catch (Exception ex)
{
    // handle this
}

```

The objective here is to get the ID of a record if it exists, otherwise create that record and return it's ID.

---

> [Stan R. answered](https://stackoverflow.com/a/1602121) (6 upvotes):
>
> You should use SingleOrDefault, that way if a record doesn't exist it will return the default value for the class which is null.
> 
> ```
> MainsDataContext dx = null;    
> try
>     {
>          dx = new MainsDataContext();
> 
>         Main m = dx.Main.SingleOrDefault(s => s.Name == name);
> 
>         if ( m == null)
>         { 
>            Guid g = Guid.NewGuid();
> 
>            m = new Main 
>           {
>               Name = name,
>               ID = g
>           };
> 
>          dx.Mains.InsertOnSubmit(m);
>          dx.SubmitChanges();
> 
>         }
> 
>         return m.ID;
>     }
>     catch (Exception ex)
>     {
>         // handle this
>     }
>     finally
>     {
>        if(dx != null)
>           dx.Dispose();
>     }
> 
> ```
> 
> it is a good idea to use the **using** keyword when using a DataContext
> 
> ```
> using ( MainsDataContext dx = new MainsDataContext())
> {
>         Main m = dx.Main.SingleOrDefault(s => s.Name == name);
> 
>         if ( m == null)
>         { 
>            Guid g = Guid.NewGuid();
> 
>            m = new Main 
>           {
>               Name = name,
>               ID = g
>           };
> 
>          dx.Mains.InsertOnSubmit(m);
>          dx.SubmitChanges();
> 
>         }
> 
>         return m.ID;
> }
> 
> ```

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/q/1602102) — 2 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
