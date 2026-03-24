---
title: "Does anyone write games in Delphi?"
description: "My answer to \"Does anyone write games in Delphi?\" on Game Development"
date: 2010-10-19
author:
  name: Nate Bross
tags:
  - directx
  - platform
source: "Game Development"
sourceUrl: "https://gamedev.stackexchange.com/a/4635"
---

*Someone [asked on Game Development](https://gamedev.stackexchange.com/q/4631):*

> I am a very seasoned Delphi developer (over 12 years of experience not counting my Turbo Pascal experience) and was wondering does anyone write games in Delphi? I have seen DirectX API wrappers in Delphi that allow you to program against DirectX (even wrote a simple solitaire game with a friend), but haven't seen anything out there that shows me that I should keep up with Delphi. I just hate to walk away from so much knowledge and Object Pascal language, but I am not seeing much as to a reason to keep going with Delphi.
> 
> I currently program in C# and thinking about XNA, but it seems to me that the dominating opinion is go C/C++ route with DirectX.
> 
> Any other Delphi developers out there struggle with this too?
> 
> Thanks, MDV

*I posted the following answer, which received 3 upvotes:*

Not to dodge the main title of your question, but I can offer some advice in respect to the other aspect (where should you go next, since it seems you've already decided.) C# and XNA are simply an abstraction layer above DirectX. Using C# and XNA will help you decrease time to market, and can reduce some development costs; however, that is at the expence of some performance and control.

C/C++ and raw Direct X is popular because you get maximum performance and control. It really depends on your goals. Personally, I use C# and XNA because its entry level costs are basically zero (especially if you already know C#) and it only costs $99/year to be part of the Creators Club, which is only a requirement if you want to deploy your game to Xbox and or Windows Phone 7. Doing C# and XNA for Windows only is absolutly free, and can produce amazing results. At a minimum, I recommend you check it out before jumping headlong into C++ and raw Direct X.

---
*Originally posted on [Game Development](https://gamedev.stackexchange.com/a/4635) — 3 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
