---
title: "Can&#39;t find index of an Item on a List on Silverlight"
description: "My answer to \"Can&#39;t find index of an Item on a List on Silverlight\" on Stack Overflow"
date: 2011-01-24
author:
  name: Nate Bross
tags:
  - c#
  - silverlight
  - indexof
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/4784493"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/4784422):*

> I have a list of items of type Country and I'm trying to find the index of and specific Country on the list but the IndexOf() method always returns -1.
> 
> The Country object look like this:
> 
> ```
>     public class Country
>     {
>         public string CountryCode { get; set; }
>         public string CountryName { get; set; }
>     }
> 
> ```
> 
> Then when I try to use the IndexOf() method I do the next:
> 
> ```
> var newcountry = new Country
>                      {
>                          CountryCode = "VE",
>                          CountryName = "VENEZUELA"
>                      };
>         var countries = ListBoxCountries.Items.Cast<Country>().ToList();
> 
>         if (countries.IndexOf(newcountry) == -1)
>             countries.Add(newcountry);
> 
> ```
> 
> Lets assume I have an already filled list with with the countries and "Venezuela" is on the list, the IndexOf() method never find the country.
> 
> EDIT:
> 
> So I got a little help from ReSharper here and he made this once I told him to override the Equals() method:
> 
> ```
>         public override bool Equals(object obj)
>         {
>             if (ReferenceEquals(null, obj)) return false;
>             if (ReferenceEquals(this, obj)) return true;
>             if (obj.GetType() != typeof (Country)) return false;
>             return Equals((Country) obj);
>         }
> 
>         public bool Equals(Country other)
>         {
>             if (ReferenceEquals(null, other)) return false;
>             if (ReferenceEquals(this, other)) return true;
>             return Equals(other.CountryCode, CountryCode) && Equals(other.CountryName, CountryName);
>         }
> 
>         public override int GetHashCode()
>         {
>             unchecked
>             {
>                 return ((CountryCode != null ? CountryCode.GetHashCode() : 0)*397) ^ (CountryName != null ? CountryName.GetHashCode() : 0);
>             }
>         }
> 
> ```
> 
> And here comes another question: It's ok to do all this just to compare two objects?

I suspect this is due to a reference issue. You'll need to override the `Equals();` method in your `Country` class to check.

I'd use code like this:

```
public bool Equals(Country other)
{
    return this.CountryName.Equals(other.CountryName);
}

```

<details>
<summary>Notable comments</summary>

**Nate** (0 upvotes): You may also need to implement `GetHashCode()` but I don't see why `Equals()` is insufficient.

</details>

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/4784493) — 1 upvotes *(accepted answer)*. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
