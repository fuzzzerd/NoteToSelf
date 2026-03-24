---
title: "Avatar creation / dressing feature"
description: "My answer to \"Avatar creation / dressing feature\" on Game Development"
date: 2011-03-02
author:
  name: Nate Bross
tags:
  - avatar
source: "Game Development"
sourceUrl: "https://gamedev.stackexchange.com/a/9236"
---

*Someone [asked on Game Development](https://gamedev.stackexchange.com/q/9229):*

> What is the effort required to use a game engine such as Unreal or Unity, etc. and create an avatar customization features...complete with clothes.
> 
> The user should be able to customize the body features and the clothes need to then fit onto the customized body.
> 
> What is needed? Can you create one set of 3D models for clothes and somehow programatically have the clothes adapt to the body shape? I.e. The same shirt model will be able to fit on a skinny person vs. someone with a big beer belly.
> 
> How difficult is this? What are the steps needed to implement this avatar creation/dressing feature.
> 
> I'm basically talking about something like in Rockband 3.

*I posted the following answer, which was chosen as the accepted answer and received 2 upvotes:*

In a general sense, the engines like Unreal or Unity provide you a way to get your assets on the screen. They may have tools for mashing up a bunch of assets, but you still need a program like Maya, 3D Studio Max, or Blender to build the assets you're going to be mashing up.

Specifically, to answer your question on effort: the effort required is probably significant, but not insurmountable. It depends on your skills and dedication. If your a programmer, building the 3D models for each of the items you want will probably be the area you spend the most effort; on the other hand, if your already adept with a 3D modeling package, and aren't much of a programmer, you'll find yourself struggling with any engine.

The steps required, in my view are: (assuming you're starting from absolute zero)

*   Get one full-body 3D model
*   Get one full set of 3D clothing models
*   Download / Install the Unity or Unreal SDK
*   Get a working creation model
    *   Using the scripting built-in to the engine to develop an interactive system
*   Obtain all other full-body 3D models and associated clothing items

Note the unordered list, most of these can happen asynchronously, though if its just you working on it, it would probably make sense the serialize the process.

This is a relatively large task, that will probably require significant effort, and is probably (at least in my opinion) not a good place to start building games, I'd recommend biting off a smaller project if this is your first.

---
*Originally posted on [Game Development](https://gamedev.stackexchange.com/a/9236) — 2 upvotes *(accepted answer)*. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
