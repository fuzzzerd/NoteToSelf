---
title: "Trying to display Cards using Images in WPF, why is it not working?"
description: "My answer to \"Trying to display Cards using Images in WPF, why is it not working?\" on Stack Overflow"
date: 2023-03-08
author:
  name: Nate Bross
tags:
  - c#
  - wpf
  - xaml
  - data-binding
  - wpf-controls
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/75678761"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/75678176):*

> I've tried Using Images and Bitmap Images in WPF C# to dynamically change what images I am displaying in my project, it is however not working. I am not getting any errors and if I put in an incorrect Source it tells me it is wrong, but it doesn't actually display any pictures when I run the code without any errors in it. This is the C# code I am trying to run:
> 
> ```
> var mainwindow = new MainWindow(); //creating a link to the UI to access the image controls
> Players[i].Cards = new Card[2];
> Players[i].Cards[0] = Deck[i * 2];
> string Suit = Convert.ToString(Players[i].Cards[0].Suit);
> string Rank = Convert.ToString(Players[i].Cards[0].Rank);
> Image Card = new Image();
> BitmapImage source = new BitmapImage();
> source.BeginInit();
> source.UriSource = new Uri($@"C:\Users\User\Documents\Cards\{Suit}\{Rank}.png", UriKind.Relative);
> source.EndInit();
> Card.Source = source;
> 
> ```
> 
> You can assume that the source is correct, I've already tested this.
> 
> I've tried a lot of stuff like only using Bitmap Controls and static image source, which is not what I want to use, but even that didn't work. Is there any setting I need to change to make it work? If I load the source directly into the XAML code it does work, but then I can't change it depending on the cards I get dealt. Any help would be massively appreciated!

*I posted the following answer:*

You should simply initialize the `BitmapImage` directly:

```
BitmapImage source = new BitmapImage(new Uri($@"C:\Users\User\Documents\Cards\{Suit}\{Rank}.png"));

```

_Note: you had specified a relative type of uri, but are in fact using a full path which I left off._

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/75678761) — 0 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
