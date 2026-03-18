---
title: "Multiple ways to define C# Enums with [Flags] attribute?"
description: "A question I asked on Stack Overflow"
date: 2010-01-25
author:
  name: Nate Bross
tags:
  - c#
  - .net
  - enums
  - flags
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/q/2134204"
---

*I [asked this on Stack Overflow](https://stackoverflow.com/q/2134204):*

I understand how Enums work in C#, and I get what the Flags attribute brings to the table.

I saw this question, [here](https://stackoverflow.com/questions/1792437/c-enums-with-flags-attribute). Which recommends the first flavor, but doesn't provide any reason/justification for it.

Is there a difference in the way in which these two are defined, is one better than the other? What are the advantages to using the first synax as instead of the second? I've always used the second flavor when defining Flags type Enums... have I been doing it wrong all this time?

```
[Serializable]
[Flags]
public enum SiteRoles
{
    User = 1 << 0,
    Admin = 1 << 1,
    Helpdesk = 1 << 2
}

```

Is that not the same as

```
[Serializable]
[Flags]
public enum SiteRoles
{
    User = 1,
    Admin = 2,
    Helpdesk = 4
}

```

---

> [Lee answered](https://stackoverflow.com/a/2134252) (6 upvotes):
>
> The main advantage with the first one is that you don't need to calculate the correct values for each flag since the compiler will do it for you. Apart from that they are the same.

<details>
<summary>Notable comments</summary>

**Nate** (0 upvotes): Thanks for the info all, I'll be using the first aproach, since it seems better for all but the most simple cases.

**Eric Lippert** (3 upvotes): Spot the bug in this code: BackupOperator = 1073714824. You can avoid the bug in the first place by saying BackupOperator = 1<<30

</details>

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/q/2134204) — 7 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
