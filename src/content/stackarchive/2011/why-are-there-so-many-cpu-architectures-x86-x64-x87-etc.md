---
title: "Why are there so many CPU architectures: x86, x64, x87, etc...?"
description: "My answer to \"Why are there so many CPU architectures: x86, x64, x87, etc...?\" on Stack Overflow"
date: 2011-03-30
author:
  name: Nate Bross
tags:
  - cpu-architecture
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/5481432"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/5481394):*

> Is the main different just instruction set or something more essential??

The instruction set may differ slightly; however, the key differences are the length of registers, and as a result the amount of addressable memory.

```
x86 has 32 bit registers 
x87 is a floating point extension of x86
x64 has 64 bit registers

```

See also:

[http://en.wikipedia.org/wiki/X87](http://en.wikipedia.org/wiki/X87)

[http://en.wikipedia.org/wiki/X86](http://en.wikipedia.org/wiki/X86)

[http://en.wikipedia.org/wiki/X64](http://en.wikipedia.org/wiki/X64)

<details>
<summary>Notable comments</summary>

**supercat** (3 upvotes): The x87 wasn't an "extension" of the x86, but was a separate chip. When the x86 processed an ESC instruction, it would fetch the following byte and, depending upon the contents of that byte, it would perform read or write cycles to memory while ignoring the data bus. The x87 would watch the data bus and some control signals and, if it saw the x86 process an ESC instruction, it would watch the data bus to see what it was supposed to do; when appropriate, it would put data on the bus during the x86's write cycles so its data would get stored in RAM.

</details>

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/5481432) — 2 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
