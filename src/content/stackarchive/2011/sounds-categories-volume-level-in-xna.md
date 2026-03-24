---
title: "Sounds categories volume level in xna"
description: "My answer to \"Sounds categories volume level in xna\" on Game Development"
date: 2011-06-05
author:
  name: Nate Bross
tags:
  - xna
  - sound
source: "Game Development"
sourceUrl: "https://gamedev.stackexchange.com/a/13213"
---

*Someone [asked on Game Development](https://gamedev.stackexchange.com/q/13204):*

> I am preparing sounds system to my game in xna. I am using XACT Tools, and i got problem.
> 
> There is class SoundCategory. I can change sound level for all sounds in that category easily.
> 
> ```
> SoundCategory category = engine.GetCategory("music");
> category.SetVolume(float_value);
> 
> ```
> 
> But there is no such function like:
> 
> ```
> category.AddVolume(float_value);
> 
> ```
> 
> Which would increase or deacrease that value. There is also no function that get current volume so i can do thing like:
> 
> ```
> float vol = category.Add(float_value);
> vol += 0.1;
> category.SetVolume(vol);
> 
> ```
> 
> Is there some clever way to achive what i want without creating some additional variables which keep current volume for all sounds categories ?

*I posted the following answer, which received 1 upvote:*

I suspect what you are trying to implement is a slider control in your game that allows the user to select the SFX volume and the Music volume independently.

Assuming that's the case, whatever volume the user picks IS the value you set in `.SetVolume(float);` For example, every time the Music Volume slider changes, it changes a float variable from 0.0 to 1.0 and at that time, you call `.SetVolume(sliderValue);` If you are trying to implement an Up/Down volume control which moves in increments, you don't need to add .05f to the current sound, you need to always know what it was before (storing the volume value outside the SoundCategory).

---
*Originally posted on [Game Development](https://gamedev.stackexchange.com/a/13213) — 1 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
