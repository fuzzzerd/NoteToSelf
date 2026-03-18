---
title: "how to insert an image into a database using WPF"
description: "My answer to \"how to insert an image into a database using WPF\" on Stack Overflow"
date: 2010-02-25
author:
  name: Nate Bross
tags:
  - sql
  - wpf
  - image
  - insert
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/2336461"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/2333796):*

> I have a WPF question.
> 
> I have 2 textboxes and an image control in a WPF Form. The image control has an image in it.
> 
> I want to insert the contents of each of the text boxes and the image in the 3 separate columns in an SQL database. The text boxes feed into varchar columns while the image itself is loaded into a column with datatype image.
> 
> How can I do this?
> 
> Thanks

I'm not sure how the image field type works, however, this might be useful:

[Image UriSource and Data Binding](https://stackoverflow.com/questions/20586/wpf-image-urisource-and-data-binding)

In other words, you may need to use a value converter to convert to/from your db format to your presentation (WPF) format.

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/2336461) — 0 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
