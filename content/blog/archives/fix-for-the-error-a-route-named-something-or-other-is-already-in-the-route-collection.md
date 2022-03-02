---
title: A fix for the error - A route named 'something or other' is already in the route collection. Route names must be unique. 
description: I was setting up a new Umbraco Project, for the first time in a while. At my company, we have a base implementation that we 'fork' manually by copy/pasting the repository and creating a specific one for each client. 
date: 2017-10-06
author: 
  name: Nate Bross
tags: 
  - dotnet
  - azure
---
I was setting up a new Umbraco Project, for the first time in a while. At my company, we have a base implementation that we 'fork' manually by copy/pasting the repository and creating a specific one for each client.

I set it up and try to run it, and immediately hit this error:

    A route named 'something or other' is already in the route collection. Route names must be unique.

A good error message that describes the problem exactly, and how to fix it. My problem? I'm not defining any routes manually, and this is the same code that was working in another project. What gives? There are lots of posts explaining how to update your RouteConfig to remove the duplicate.

Eventually I come across a highly up voted post, suggesting to delete the bin files and try again. I know the bin folder is created by the compiler for my project; but deleting everything in there felt a little draconian to me. This is an axe kind of fix, and I'm thinking this is more of a scalpel problem.

One of those manual steps to creating our client specific projects, is to go in and rename folders, solution, and project files (and their internal path references to each other). This went just fine, and from a Visual Studio perspective everything linked up worked, and built.

Then it hit me. I renamed the project and its compiled output was in the bin folder along with the newly built and compiled version with my new name. Ultimately I had two copies of identical code in the bin folder with different physical file names.

I deleted the dll files from my original build with the old name, and that ultimately fixed the problem.
