---
title: "Windows Phone 7 (WP7) PhotoChooserTask with Crop"
description: "My answer to \"Windows Phone 7 (WP7) PhotoChooserTask with Crop\" on Stack Overflow"
date: 2012-09-03
author:
  name: Nate Bross
tags:
  - windows-phone-7
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/12253950"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/5391152):*

> I've seen this in a number of apps but can't find anything in the documentation or online samples.
> 
> When you invoke the PhotoChooserTask some apps enable you to resize / crop to use only a portion of that image (by showing a white rectangle). How can I use this and set my own dimensions for the target image?

You can set the width and height of the desired image and the [PhotoChooserTask](http://msdn.microsoft.com/en-us/library/windowsphone/develop/microsoft.phone.tasks.photochoosertask%28v=vs.92%29) will automatically create the crop mechanism.

```
photoChooser.PixelHeight = 500;
photoChooser.PixelWidth = 500;

```

There are some known issues with this method in the pre-nodo emulator; using the 7.1.1 tools I have not had any problems with this method.

<details>
<summary>Notable comments</summary>

**Nate** (0 upvotes): Rolled back question and posted answer as CW.

</details>

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/12253950) — 6 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
