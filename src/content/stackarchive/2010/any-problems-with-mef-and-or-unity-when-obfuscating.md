---
title: "Any Problems With MEF and/or Unity When Obfuscating?"
description: "My answer to \"Any Problems With MEF and/or Unity When Obfuscating?\" on Stack Overflow"
date: 2010-12-02
author:
  name: Nate Bross
tags:
  - c#
  - obfuscation
  - mef
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/4337414"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/4337351):*

> I am currently using MEF in a plugin architecture. I am about to obfuscate my code and I had a concern whether that would muck up MEF and it's discovery. I am using a DirectoryCatalog to resolve the plugins and I plan on obfuscating the plugins as well. Some of the extensions also run in the main assembly, which will be obfuscated as well.
> 
> So, my question is whether this will be an issue with MEF (the obfuscation) and if so, does Unity also suffer from the same? Thank you in advance.

Since (in an ideal world) bbfuscation does not change the binary compatibility of an assembly, I don't see any issues coming up.

That said, I have not actually done any work with obfuscated assemblies and MEF, so I could be wrong.

<details>
<summary>Notable comments</summary>

**Nate** (0 upvotes): I agree. In most cases, its not really worth it.

**Nate** (0 upvotes): The underlying point here is, I think you'll need to test it out to be sure if it will affect your code.

</details>

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/4337414) — 2 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
