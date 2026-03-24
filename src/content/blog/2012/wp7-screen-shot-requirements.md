---
title: "WP7 Screen Shot Requirements"
description: "My answer to \"WP7 Screen Shot Requirements\" on Stack Overflow"
date: 2012-06-22
author:
  name: Nate Bross
tags:
  - windows-phone-7
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/11163884"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/11163870):*

> Microsoft declined to submit my application because I took a screen shot of the game which included the actual emulator.
> 
> Looking at [this](http://forums.create.msdn.com/forums/p/96106/574002.aspx) answer, the person says that I should us the snipping tool when I have made the phone emulator at 100%. And indeed, the snipping tools spits out an image of that screen at exactly 480x800 which is exactly what Microsoft wants. However, whenever I use the snipping tool, there is still the top black border of the WP7 remaining. I've looked at a few images on the Marketplace and other applications have it as well...I think. Some don't. Can anyone advice me on this please? How I can avoid getting penalised...again.
> 
> Will this suffice?
> 
> ![enter image description here](https://i.sstatic.net/U5hRl.png)

*I posted the following answer, which was chosen as the accepted answer and received 2 upvotes:*

If you update to the Windows Phone 7.1 SDK and Emulator, the new emulator has a built-in screenshot function to take screenshots without these issues.

![emulator screenshot taking utility](https://i.sstatic.net/Qhd9p.png)

I have never had my app rejected due to a screenshot taken from the emulator, I can't say you wont have issues, but assuming everything else in your screenshot checks out; the images from the emulator are the correct size and should be approved.

<details>
<summary>Notable comments</summary>

**Shawn Kendrot** (3 upvotes): You can collapse the SystemTray for the page by doing: shell:SystemTray.IsVisible="False" within the markup for the Page

**Nate** (0 upvotes): The black bar in the image you posted seems to big to be just for that part of the OS; however, I've never had any problems submitting screenshots generated form the emulator. That said, it looks like you've got an XNA game, maybe you are not setting it to fullscreen, so you get a larger area not used?

**Nate** (0 upvotes): @subby Does the border show up in the emulator? Does the border show up when you run your app on a real device? Can you upload the file that gets output when you click "save" from the emulator tool?

**Nate** (0 upvotes): @Subby I'm not sure what black border you're talking about... Can you upload your screenshot as part of your post so we can take a look and try to diagnose what it is?

</details>

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/11163884) — 2 upvotes *(accepted answer)*. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
