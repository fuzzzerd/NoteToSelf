---
title: "How do I get started with Unit Testing? Total n00b question, thoughts?"
description: "A question I asked on Stack Overflow"
date: 2009-11-05
author:
  name: Nate Bross
tags:
  - c#
  - .net
  - unit-testing
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/q/1678045"
---

*I [asked this on Stack Overflow](https://stackoverflow.com/q/1678045):*

So I'm starting to write a class library of useful methods I've written and picked up over the years, I'll start with two examples of code, then ask my specific questions:

I'd also like to make the argument that this is _not_ a duplicate of some of the other, "where do I start unit testin questions."

Check network connectivity (not internet, just netwok)

```
    public static Boolean IsNetworkConnected()
    {
        Boolean ret = false;
        try
        {
            String HostName = System.Net.Dns.GetHostName();
            System.Net.IPHostEntry thisHost = System.Net.Dns.GetHostEntry(HostName);
            String thisIpAddr = thisHost.AddressList[0].ToString();

            ret = thisIpAddr != System.Net.IPAddress.Parse("127.0.0.1").ToString();
        }
        catch (Exception)
        {
            return false;
        }
        return ret;
    }

```

And my IsValiEmail method (note, I didn't write the regex)

```
   public const String MatchEmailPattern = @"^(([\w-]+\.)+[\w-]+|([a-zA-Z]{1}|[\w-]{2,}))@"
         + @"((([0-1]?[0-9]{1,2}|25[0-5]|2[0-4][0-9])\.([0-1]?[0-9]{1,2}|25[0-5]|2[0-4][0-9])\."
         + @"([0-1]?[0-9]{1,2}|25[0-5]|2[0-4][0-9])\.([0-1]?[0-9]{1,2}|25[0-5]|2[0-4][0-9])){1}|"
         + @"([a-zA-Z]+[\w-]+\.)+[a-zA-Z]{2,4})$";


    public static bool IsValidEmail(string email)
    {
        if (email != null && email != string.Empty) 
            return Regex.IsMatch(email, MatchEmailPattern);
        else 
            return false;
    }

```

So, my question is how do I test that these methods actually work, obviously I want to start Unit Testing more of my code which is more complex than these quick examples.

I'd like to avoid installing additional tools/frameworks if possible, but I'm open to your ideas.

**update**

Where _should_ this new Unit-Test code (via the links already posted) live? In the same assembly? A seperate assembly?

---

> [J.W. answered](https://stackoverflow.com/a/1678116) (5 upvotes):
>
> Check out the book. [The art of unit testing](http://www.artofunittesting.com/). The wiki page has a lot of great resources.

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/q/1678045) — 1 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
