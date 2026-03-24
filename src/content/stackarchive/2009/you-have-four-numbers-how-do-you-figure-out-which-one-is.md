---
title: "You have four numbers, how do you figure out which one is greatest?"
description: "My answer to \"You have four numbers, how do you figure out which one is greatest?\" on Stack Overflow"
date: 2009-06-09
author:
  name: Nate Bross
tags:
  - vb.net
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/971259"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/971241):*

> Is there a very simple algorithm to figure out which of 4 numbers is the greatest?

*I posted the following answer, which received 12 upvotes:*

If they are in an array, something like this should work:

VB:

```
Dim ar As Integer() = {3, 6, 9, 12}
Dim largest As Integer = ar(0)
For i As Integer = 1 To ar.Length - 1
    If ar(i) > largest Then
        largest = ar(i)
    End If
Next

```

C#:

```
int[] ar = {3, 6, 9, 12};
int largest = ar[0];
for(int i = 1; i < ar.Length; i++) {
    if(ar[i] > largest) {
        largest = ar[i];
    }
}

```

<details>
<summary>Notable comments</summary>

**Nate** (0 upvotes): This will also work with any version of Visual Basic (even pre .NET); and the algorithm will work for any language.

</details>

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/971259) — 12 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
