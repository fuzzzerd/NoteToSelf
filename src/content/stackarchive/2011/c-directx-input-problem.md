---
title: "C# DirectX input problem"
description: "My answer to \"C# DirectX input problem\" on Stack Overflow"
date: 2011-07-06
author:
  name: Nate Bross
tags:
  - c#
  - input
  - directx
  - device
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/6602970"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/6602873):*

> So i have simple application, just a few lines:
> 
> ```
> using System;
> using System.Collections.Generic;
> using System.ComponentModel;
> using System.Data;
> using System.Drawing;
> using System.Linq;
> using System.Text;
> using System.Windows.Forms;
> using Microsoft.DirectX.DirectInput;
> 
> namespace asdasd
> {
>     public partial class Form1 : Form
>     {
>         public Device joystick;
>         public Form1()
>         {
>             InitializeComponent();
>         }
> 
>         private void Form1_Load(object sender, EventArgs e)
>         {
>             foreach (
>                 DeviceInstance di in
>                 Manager.GetDevices(
>                     DeviceClass.GameControl,
>                     EnumDevicesFlags.AttachedOnly))
>             {
>                 joystick = new Device(di.InstanceGuid);
>                 break;
>             }
> 
>             if (joystick == null)
>             {
>                 throw new Exception("No joystick found.");
>             }
>         }
>     }
> }
> 
> ```
> 
> and i try to get the active joystick on my computer, but i get error:
> 
> ![The error](https://i.sstatic.net/xjMQV.png)
> 
> i have the assembly Microsoft.DirectX.DirectInput and i have directX SDK 2010 installed.
> 
> Can someone tell me where is the problem?

*I posted the following answer:*

The DirectX assemblies are built against .NET v1.1 Microsoft stopped actively developing them before .NET v2.0 was released.

They cannot be used in projects targeting other than .NET v1.1. XNA is the "blessed" path forward for managed access to Direct X features. I don't know all if it's features, but [SlimDX](http://slimdx.org/) appears to give a more Direct X feeling API for C# than XNA, though I have not used it, I've heard a lot about it.

You might find better responses for chosing an upgrade path over at gamedev.stackexchange.com though.

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/6602970) — 0 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
