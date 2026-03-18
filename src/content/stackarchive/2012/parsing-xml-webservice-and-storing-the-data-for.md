---
title: "Parsing XML webservice and storing the data for presentation on a windows phone 7 device"
description: "My answer to \"Parsing XML webservice and storing the data for presentation on a windows phone 7 device\" on Stack Overflow"
date: 2012-03-05
author:
  name: Nate Bross
tags:
  - web-services
  - windows-phone-7
  - xml-parsing
  - isolatedstorage
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/9570755"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/9570619):*

> I'm working on an app that requires extracting data from an xml web service, then I want to store that data (images+titles+datetime ...) to display it on my app then select an item and navigate to another page that displays more info about this item.
> 
> Is there a detailed tutorial that explains the parsing and storing process clearly (with the threads) because I'm gonna need it a lot for my app.Thanks! I usually use this method, but didn't always get me what i want:
> 
> ```
> var doc = XDocument.Load(new StringReader(e.Result));
> var items = from c in doc.Descendants("item")
>         select new RSSitem()
>         {
>             Title = c.Element("title").Value,
>             Photo = c.Element("img").Attribute("src").Value,
>             Description = c.Element("description").Value,
>             Link = c.Element("link").Value,
>         };
> ListBoxNews.ItemsSource = items;
> 
> ```

Sounds like you are in over your head (based on the vague nature of your question). So I'm offering my advise to get up to speed, so you can get started and ask a question that we can help give a definitive answer to.

With WP7 and .NET you shouldn't really have to do much manual parsing of [Web Services](http://zetitle.wordpress.com/2010/03/30/wp7-connecting-to-web-services-that-uses-authentication/). You should be able to [add a Service Reference](http://social.msdn.microsoft.com/forums/en-us/windowsphone7series/thread/E3F8BA1D-F044-4230-BD1B-7E61F93E90EA) and generate a proxy which will handle this for you. This will also generate business objects for the data returned by your service.

Once you have that done, you can look into [Windows Phone Navigation](http://www.windowsphonegeek.com/articles/WP7-Navigation-in-depth--Navigation-Framework) which should help you transition between pages in your application.

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/9570755) — 1 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
