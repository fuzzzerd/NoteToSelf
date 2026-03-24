---
title: "Games for Facebook, iPhone, Web"
description: "My answer to \"Games for Facebook, iPhone, Web\" on Game Development"
date: 2011-01-26
author:
  name: Nate Bross
tags:
  - game-design
  - iphone
  - cross-platform
source: "Game Development"
sourceUrl: "https://gamedev.stackexchange.com/a/7747"
---

*Someone [asked on Game Development](https://gamedev.stackexchange.com/q/7745):*

> if I want to build a game for web, facebook, and iphone, do I need to build 3 completely different versions? I know there is a new company that is "build once, launch anywhere," but I'm asking about current best/practice and methodology in doing this.

*I posted the following answer, which was chosen as the accepted answer and received 1 upvote:*

This really depends what type of game that you are making.

If your game is a simple text based game, then you can build the same interface in HTML and use different CSS to make it look good based on where the game is being accessed from.

More realistically, your game is highly interactive, and it would be best to build the web/facebook version in Flash/Silverlight or another browser plugin. Then port it to iPhone in Objective-C. (Or, if you're more proficient in Objective-C start there and port to web/facebook.)

The main issue that you'll probably run into is that on iPhone the input scheme will be different which could impact gameplay.

The bottom line, is that you will need to, at a minimum, build a different Rendering and Input scheme for each platform you wish to deploy to. Facebook, is really just a normal web deployment, inside the facebook site, so the design would be the same for facebook or any other web game.

**edit**

A few things I'd like to point out, based on your comments. First, HTML5 is probably NOT a good place to start, it has poor browser support (thought getting better), I'd stick with HTML4 and/or XHTML 1.1 and CSS2, these will work in almost all modern browsers; however, if you require any animation, I'd recommend using Flash or Sliverlight to build the game, and use their associated ability to call web services to save state to a server. Second, HTML is just the presentation, if you don't go the plugin route, you would likely need PHP or ASP.NET on the server to manage your game state and persist it to a database.

<details>
<summary>Notable comments</summary>

**Nate** (0 upvotes): Yes, I would think so. It depends how you build it. It will be most easy if you follow the principles of [csszengarden.com](http://csszengarden.com/)

**Nate** (0 upvotes): For a go-fish type of game, you could probably use HTML and javascript, which you could adapt to work on all of your listed platforms, with minimal changes.

</details>

---
*Originally posted on [Game Development](https://gamedev.stackexchange.com/a/7747) — 1 upvotes *(accepted answer)*. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
