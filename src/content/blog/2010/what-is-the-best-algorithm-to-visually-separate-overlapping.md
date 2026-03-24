---
title: "What is the best algorithm to visually separate overlapping vehicles in close proximity on a map?"
description: "My answer to \"What is the best algorithm to visually separate overlapping vehicles in close proximity on a map?\" on Stack Overflow"
date: 2010-10-13
author:
  name: Nate Bross
tags:
  - c#
  - algorithm
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/3928454"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/3928429):*

> I am looking for an algorithm that will allow me to visually separate any two to four vehicles within a large list of vehicles that are close enough together on a map such that they obscure one another. I need to filter out instances where there are more than four vehicles as the vehicles will congregate in certain areas in large quantities and it is unimportant to separate them in those cases. The algorithm should also mark vehicles that have already been processed.
> 
> In my problem space, it is more important to know that the vehicles are present and to be able to see information about them, than to have absolutely accurate information as to where they are.
> 
> The idea is to add approximately 10 yards (given the map scale that is being used) so individual vehicles can be seen instead of being obscured by other vehicles in close proximity.
> 
> I have thought of several ways to do this, but given the quality of the answers here and the fact that somebody might have already done this, I thought I would post the question.
> 
> I am adding an image of what is currently shown in order to help clarify as one of the comments suggested (OK, it is not a diagram but this is what is actually shown to the user).
> 
> Several of the answers require changing the visual queues used to indicate how many vehicles (golf cars) are in a given location. I don't want to change what the users are expecting visually and have to explain to the users what the meaning is. The answer using a square is closest to what I was looking for but that is just the visual part. I am also looking for the algorithm for how to best traverse the list finding groups of 2 to 4 golf cars that are within n (lets say 5) yards of each other while ignoring larger groupings (cart barn, snack shack, etc). The numbers on the icons correspond to the cart numbers.
> 
> This application also allows the user to zoom the map in/out so the further zoomed out the map the more separation is needed between the cars so that they do not visually overlap.
> 
> Note in the picture that cars 78 and 62 are obscuring the cars that are behind them.
> 
> ![alt text](https://i.sstatic.net/MH8nQ.jpg)

*I posted the following answer, which was chosen as the accepted answer:*

A square seems like a good candidate since you are not worried about instances with more than four vehicles.

I would take the average location of all vehicles in "overlapping" proximity, and set this as the "center" of the square, with length and width sufficently large that putting a vehicle on each corner will not result in any overlap.

Then I would start with vehicle 0 at the top left and work my way around the corners of the square counter clockwise, adding the next vehicle to the next corner.

Simple, and effective, you lose some accuracy, assuming thats OK (from your post it seems it is?) this is what I woul do.

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/3928454) — 0 upvotes *(accepted answer)*. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
