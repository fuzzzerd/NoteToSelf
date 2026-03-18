---
title: "Adding a sliding sound to a website"
description: "My answer to \"Adding a sliding sound to a website\" on Stack Overflow"
date: 2009-11-19
author:
  name: Nate Bross
tags:
  - c#
  - c++
  - c
  - audio
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/1765183"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/1765113):*

> I would like to add an unusual feature to a website that would allow the user to play a sound...a single sampled note. When the user moves a slider control the sound would go up or down in tone (seamlessly). So, as the user slides the button to the right the sound would rise in pitch, when moved to the left it would go down in pitch (from soprano to bass). Does anyone know how this could be achieved? What sort of sound file would you use and how would you get it to play continuously (when a button was pressed) and change pitch (when the slider was moved)? This isnt really language specific - it could be php or flex. Thanks in advance. Simon...
> 
> \=============================================== Further information
> 
> It appears that the best solution might involve something like C or C# or C++. Unfortunately, I have very little experience of these languages. Would anyone be able to tell me whether it is possible to achieve this in C? Thanks.

You will need a client-side plugin to make this work in a browser, Silverlight, Flex, or Flash will most likely be your best/only option.

On a website, with limited access to hardware, what you want to do will be hard, if not impossible. Your best bet is to have many audio files (for each note/pitch you want) and have the slide control play a different file.

You may want to use a queue and an array of different audio files.

If the next item from the queue is different than the first, play it, if the queue is empty, keep playing the last file. Then in the "slider" event you'll queue the next file.

If you were running a native application, you would have more control over the sound hardware, and could likely create this effect without having an mp3 for each note/pitch you want to play.

<details>
<summary>Notable comments</summary>

**Nate** (0 upvotes): When I said a native application, I meant an exe file that the user would run locally. C++, C#, Java, etc, something with direct access to the Windows API and the hardware.

</details>

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/1765183) — 0 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
