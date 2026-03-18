---
title: "Calling Unmanaged DLL from VB"
description: "My answer to \"Calling Unmanaged DLL from VB\" on Stack Overflow"
date: 2009-06-12
author:
  name: Nate Bross
tags:
  - vb.net
  - visual-studio
  - unmanaged
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/988955"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/988941):*

> I'm having some trouble finding the syntax for making function calls to unmanaged DLLs in VB.NET. Is anyone familiar with this?
> 
> Let's just assume there's a function "Connected" in unmanaged DLL "Connector.DLL". I want to call this function by creating an abstract function call to it.
> 
> I've seen some code out there that looks something like
> 
> ```
> [DllImport("Connector.DLL")]
> Public Shared Function Connect(ByVal intPort)
> 
> ```
> 
> But that syntax doesn't work for me.

In Visual Studio, add a reference to this Dll.

In Code:

```
Dim vr as new COMDllClass()
vr.FunctionInDll()

```

**EDIT per comment:**

Try this code:

```
<DllImport("Connector.DLL")> _
Public Shared Function Connect(ByVal intPort)

```

<details>
<summary>Notable comments</summary>

**Nate** (0 upvotes): So this is not even a COM visible DLL? Then you'll likely need to write a COM wrapper and call that from Visual Basic.

</details>

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/988955) — -2 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
