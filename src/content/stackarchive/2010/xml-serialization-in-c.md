---
title: "XML Serialization in C#"
description: "My answer to \"XML Serialization in C#\" on Stack Overflow"
date: 2010-07-07
author:
  name: Nate Bross
tags:
  - c#
  - xml
  - serialization
  - xml-serialization
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/3195867"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/3195813):*

> Where Can I find good tutorial about XMl serialization to the object? Thanks.

*I posted the following answer, which received 7 upvotes:*

Its really pretty simple, there are only three main steps.

1.  You need to mark your classes with the `[Serializable]` attribute.
2.  Write Serialization code
3.  Write Deserialization code

Serialization:

```
var x = new XmlSerializer(typeof(YourClass));
var fs = new FileStream(@"C:\YourFile.xml"), FileMode.OpenOrCreate);
x.Serialize(fs, yourInstance);
fs.Close();

```

Deserialization:

```
var x = new XmlSerializer(typeof(YourClass));
var fs = new FileStream(@"C:\YourFile.xml"), FileMode.Open);
var fromFile = x.Deserialize(fs) as YourClass;
fs.Close();

```

<details>
<summary>Notable comments</summary>

**Xenan** (5 upvotes): For XML serialization, the \[Serializable\] attribute is not necessary. The \[Serializable\] attribute is needed for binary serialization.

</details>

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/3195867) — 7 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
