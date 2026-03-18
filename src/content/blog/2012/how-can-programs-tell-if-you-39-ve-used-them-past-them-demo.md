---
title: "how can programs tell if you&#39;ve used them past them demo period?"
description: "My answer to \"how can programs tell if you&#39;ve used them past them demo period?\" on Stack Overflow"
date: 2012-06-12
author:
  name: Nate Bross
tags:
  - installation
  - software-distribution
  - serial-number
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/11004480"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/11004333):*

> On certain programs you can run them on a demo period for say 'ten tasks' or '5 hours' before you need to decide to purchase them to keep using them, but if you delete and uninstall the program then reinstall it, it knows that its been previously installed and wont let you run the demo again.
> 
> How does it do this ? When you download it does it send a identifiing number (ip ?) to the cdn to let it know youve downloaded it before, or when the program itself installed does it check to see traces of previous installation ?

There are many ways this can be implemented.

The easiest way to implement (and also the easiest way to bypass)

*   On first run, create a registry (or text file) entry somewhere
*   Add 1 to the counter every time the task (or the app) is run
*   Do not include this file/registry in the installer app (so it will persist after uninstallation)
*   If at any time the count is too high, notify the user that the trial has expired.

Using image diff tools this method is pretty easy to identify and overcome.

The hardest method to overcome or bypass is to use a server. On the first run, generate a hash code based on the users computer name, drive serial number, etc, and post this to your server. The server then tracks this as a unique installation, and allows the app to run. Each time you run the app, you update the server. This way, the user cannot find the breadcrumbs and delete them, since they are on your server. The down side, is that this method will require an Internet connection.

There are probably much more sophisticated methods to achieve this result, but the above are both implementations I've run across.

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/11004480) — 1 upvotes *(accepted answer)*. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
