---
title: "wpf image viewer path"
description: "My answer to \"wpf image viewer path\" on Stack Overflow"
date: 2010-09-09
author:
  name: Nate Bross
tags:
  - .net
  - wpf
  - xaml
  - wpf-controls
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/3677812"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/3677740):*

> I would like to make an image viewer where the client can load thumbnails to a file, then when the Photo Gallery button is selected the thumbnails appear in a grid and when the thumbnail is selected a larger photo will show in a viwbox. How do I get the path for the button click event to the photos? Can this be done in a markup ext?

*I posted the following answer:*

I assume you already have thumbnails created on the file system, something like this:

```
\Folder\Image1.png
\Folder\Image1-Thumb.png
\Folder\Image2.png
\Folder\Image2-Thumb.png

```

I would load that into a list of a custom class, maybe a ViewModel that had two properties for Image and ImageThumb -- then you can setup WPF Bindings accordingly.

<details>
<summary>Notable comments</summary>

**Nate** (0 upvotes): Folder is simply a place-holder. As long as you have a database of where every 'main' image is, you can generate a thumbnail right next to it and store that in your database as well.

</details>

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/3677812) — 0 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
