---
title: "Best way to manage multiple apps in Subversion"
description: "A question I asked on Stack Overflow"
date: 2009-10-23
author:
  name: Nate Bross
tags:
  - svn
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/q/1615403"
---

*I [asked this on Stack Overflow](https://stackoverflow.com/q/1615403):*

How do you maintain two (or more) versions of a project in SVN? different trunks, inside the main trunk? branches? Totally separate folders?

I currently have, assuming I am about to make v2 of ProjecA, but I still need to fix bugs in v1:

```
\ProjectA\trunk\[myfiles]
\ProjectA\tags\
\ProjectA\branches\

```

Which would be the best way to do that?

```
\ProjectA\trunk\[myfiles]
\ProjectA\tags\
\ProjectA\branches\v1\[myfiles]
\ProjectA\branches\v2\[myfiles]

```

OR would something like this be better?

```
\ProjectAv1\trunk\[myfiles]
\ProjectAv1\tags\
\ProjectAv1\branches\

\ProjectAv2\trunk\[myfiles]
\ProjectAv2\tags\
\ProjectAv2\branches\

```

Which would you use, and more specifically, why? I am leaning toward the first option, but something about it feels wrong. At the same time, the second option seems clean, but ugly.

Any thoughts are appreciated.

---

> [rmeador answered](https://stackoverflow.com/a/1615420) (7 upvotes):
>
> The usual approach is pretty much exactly your middle example. There's a good discussion of branching patterns in [the subversion documentation](http://svnbook.red-bean.com/en/1.5/svn.branchmerge.commonpatterns.html).

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/q/1615403) — 3 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
