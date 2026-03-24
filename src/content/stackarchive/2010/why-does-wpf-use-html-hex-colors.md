---
title: "Why does WPF use HTML/HEX Colors?"
description: "My answer to \"Why does WPF use HTML/HEX Colors?\" on Stack Overflow"
date: 2010-11-11
author:
  name: Nate Bross
tags:
  - c#
  - .net
  - wpf
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/4159923"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/4159876):*

> Why:
> 
> ```
> <Trigger Property="ItemsControl.AlternationIndex" Value="2">
>     <Setter Property="Background" Value="#FAC896"></Setter>
> </Trigger>
> 
> ```
> 
> and not:
> 
> ```
> <Trigger Property="ItemsControl.AlternationIndex" Value="2">
>     <Setter Property="Background" Value="50 50 50 255"></Setter>
> </Trigger>
> 
> ```
> 
> ?
> 
> Is this for performance reasons of the Xaml parser/compiler?
> 
> Reason I ask is, it's really difficult for artists to design an interface when they are used to RGB and/or HSV colors.
> 
> Btw I use VS 2010 WPF Editor.

*I posted the following answer, which received 7 upvotes:*

If you're an artist, you should really be using [Expression Blend](http://en.wikipedia.org/wiki/Microsoft_Expression_Blend). It will give you a very nice color picker, and it will handle the correct color codes for you. Also, the HEX number you provide is in the form of RGB. Two bytes of RED, two bytes of GREEN, and two bytes of BLUE.

To answer your question, someone from the WPF Design team would have to say, but I suspect it was used to keep some consistency with HTML.

As far as I know there is no difference between a HEX number, and a decimal number, they are all constants and have equal performance, since they are all represented as binary numbers in the computer.

<details>
<summary>Notable comments</summary>

**Nate** (1 upvotes): You can open a project in both VS and Blend.

</details>

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/4159923) — 7 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
