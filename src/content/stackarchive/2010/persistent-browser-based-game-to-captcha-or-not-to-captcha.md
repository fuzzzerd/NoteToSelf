---
title: "Persistent Browser Based Game: To Captcha or not to Captcha?"
description: "My answer to \"Persistent Browser Based Game: To Captcha or not to Captcha?\" on Game Development"
date: 2010-09-23
author:
  name: Nate Bross
tags:
  - web
  - game-mechanics
  - interface
  - security
source: "Game Development"
sourceUrl: "https://gamedev.stackexchange.com/a/4062"
---

*Someone [asked on Game Development](https://gamedev.stackexchange.com/q/4061):*

> I've been working (off-and-on) on a pbbg that's pretty old school. If you've ever played Carnage Blender then you get the idea.
> 
> If not, it's a simple idea that's been done a lot: A player is allocated a certain number of "points" each day, and spends those points to attack other players. Points accrue over time, up to a certain cap.
> 
> The point system is designed to prevent over-achievers from completely out-pacing casual players.
> 
> In the case of carnage blender, a CAPTACHA system prevents a user from "gaming" the system with a bot or a script designed to use all of their points each day with minimal effort. Every once in a while a random CAPTCHA is displayed, and if not passed the user will be suspended for an hour.
> 
> What I'm wondering is how to make this more user friendly for my game. I recognize that I must prevent bad behavior like this, and I could easily take the same CAPTCHA approach, but is there a more user friendly alternative?
> 
> Initial research uncovered ASIRRA by Microsoft, but the fluffy/cute vibe doesn't work well with my intended game theme.
> 
> **UPDATE**  
> What I'm most interested in are alternatives to the standard "spell this word" CAPTCHA. I want to try to keep game-play as uninterrupted as possible for the good players.
> 
> I've seen what I call _One-Time-Use_ CAPTCHAs, like asking a user "what is five plus six minus two?" But this would require too much effort compiling a large enough database of questions to foil the malicious users. Especially since the CAPTCHA is intended to be used so often.
> 
> **UPDATE #2**  
> As Joe Wreschnig pointed out in his answer, having a CAPTCHA system to limit bots from playing the game _faster_ than humans is a bit redundant if turns are limited per day. I didn't explain my point system to-the-letter, and that was my fault. In reality, 10 or 20 points accrue every few minutes, and cap off at 200. So, a very competitive player could return every few hours and use his points. I want to reward those people who like my game so much that they return so often. If I prevent them from playing until the next day when they get their points, I would be turning away players who would otherwise be enjoying my webgame. This prevents a player from spending points **constantly** while still giving them a few points every few minutes.
> 
> This is open to abuse.

*I posted the following answer, which received 2 upvotes:*

I would not ban a failed CAPTACHA for an hour, that seems harsh, I would just prevent them moving forward until they successfully complete the CAPTACHA and allowing for a new CAPTACHA image to be shown.

I would also only display the captcha if they making requests too quickly, I'd store the a DateTime on every request, and then compare it to the next request, if its less than 2-4 seconds, you display the CAPTACHA, otherwise let them go. You'll need to determine what a reasonable interval is for your game, server, and bandwidth.

You could also do a "forced" CAPTACHA every X times that an action is taken, this will prevent even an automated script with a `pause` built in so it doesn't trigger the time limit CAPTACHA.

<details>
<summary>Notable comments</summary>

**Nate** (0 upvotes): I don't know much about it, but KingsOfChaos.com has a very similar system as yours (points/turns every minute) you could see how they implement it.

**Nate** (0 upvotes): Write your game in Flash or Silverlight such that a bot will have a harder time remote-controlling your application?

</details>

---
*Originally posted on [Game Development](https://gamedev.stackexchange.com/a/4062) — 2 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
