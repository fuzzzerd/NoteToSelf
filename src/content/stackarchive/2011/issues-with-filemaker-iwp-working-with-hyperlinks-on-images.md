---
title: "Issues with Filemaker IWP working with hyperlinks on images"
description: "My answer to \"Issues with Filemaker IWP working with hyperlinks on images\" on Stack Overflow"
date: 2011-02-11
author:
  name: Nate Bross
tags:
  - hyperlink
  - publishing
  - filemaker
  - instant
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/4973979"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/3207775):*

> I have a filemaker database that I need to be able to link records and all associated data (including container field data) to various points placed on a large PDF image, and then make that data appear via instant web publishing when someone clicks on the marker for that area on the PDF. For example the PDF may be an image of a car, and then I would have various close up images of issues with the car and descriptions of those images as records in the database. I would then want to drop points on the base PDF image and when you clicked on those points be able to see the close up images and other data related to those images.
> 
> I'm being told this is too much for IWP because:
> 
> 1.  I need to place the markers outside filemaker via PDF annotation
> 2.  Filemaker IWP can't handle the number of markers that may be necessary (it could be up to 1,000 on an E sized image.
> 
> Does anyone have a work around or explanation why this is a problem?

If I understand correctly, you would like to setup a PDF with links that will open a browser and show data related to what was clicked. Assuming that is the case, the reason this wont work is because IWP does not provide a unique URL for a unique page. For example, here on StackOverflow you can directly link to any question based on its URL:

```
http://stackoverflow.com/questions/3207775/ -- this question
http://stackoverflow.com/questions/4973921/ -- some other question

```

IWP uses Javascript and session variables to manipulate the output to the screen, so there is no way to link to a specific section of your IWP site, since the URL is always something like:

```
http://yoursite.com/fmi/iwp/cgi?-db=YOUR_DB-loadframes -- Product A
http://yoursite.com/fmi/iwp/cgi?-db=YOUR_DB-loadframes -- Product B
http://yoursite.com/fmi/iwp/cgi?-db=YOUR_DB-loadframes -- Product C

```

Because of the limited nature of IWP, you will not be able to workaround this issue. You'll need to build your own web-interface using the Custom Web Publishing Engine, either using the built-in PHP extensions or some other technology where you invoke the XML publishing API.

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/4973979) — 0 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
