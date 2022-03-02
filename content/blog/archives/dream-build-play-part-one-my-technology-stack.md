---
title: Dream Build Play - Part One - My Technology Stack 
description: Choosing the right technologies for a project is one of the early decisions you must make and its a crucial factor in long term success. Technology choices can make a project go smoothly or they can be a constant impediment to forward progress.
date: 2017-10-23
author: 
  name: Nate Bross
tags: 
  - web development
  - dotnet
---
Choosing the right technologies for a project is one of the early decisions you must make and its a crucial factor in long term success. Technology choices can make a project go smoothly or they can be a constant impediment to forward progress.

Since this a just for fun build, I'm going to try to throw a bunch of things at it, but first lets start with the basic technology stack.

## Front end

UWP, obviously, but more specifically the plan is to use html and javascript as the building blocks packaged up inside a UWP application. To cap things off, I figured why stop there, lets throw in typescript, to get statically typed javascript and throw in a couple front-end frameworks to boot. Aurelia, for data binding and non-gamey stuff. Phaser-CE for gamey things.

## Server Side

I'm a Full Stack .NET developer in my day life, so in order to focus on the game specifics for the front end, I decided not to bite off another layer of complexity by choosing a tech stack I'm not already proficient with. With that in mind, C# service/controller layer and Razor views (that serve up the baseline for the aforementioned Aurelia framework to pickup). The plan is to host this on Azure App Services, and then to throw some new things in the mix, I'm going to try to find a way to fold in CosmosDB, Notifications Hub, and maybe even some container services.

To summarize this up into a nicely packaged list:

- Languages and Frameworks
  - C# + ASP.NET Core
  - Typescript + Aurelia
  - Phaser-CE
- Apps and Tools
  - Tiled
  - Paint.NET
  - The GIMP

The idea is by using a lot of tooling I'm already familiar and comfortable with, I'll be able to focus on the game specific tasks for this project.
