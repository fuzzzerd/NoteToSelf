---
title: "C++ .NET DLL vs C# Managed Code ? (File Encrypting AES-128+XTS)"
description: "My answer to \"C++ .NET DLL vs C# Managed Code ? (File Encrypting AES-128+XTS)\" on Stack Overflow"
date: 2010-05-21
author:
  name: Nate Bross
tags:
  - c#
  - c++
  - dll
  - encryption
  - aes
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/a/2882813"
---

*Someone [asked on Stack Overflow](https://stackoverflow.com/q/2882763):*

> I need to create a Windows Mobile Application (WinMo 6.x - C#) which is used to encrypt/decrypt files. However it is my duty to write the encryption algorithm which is AES-128 along with XTS as the mode of operation. RijndaelManaged just doesn't cut it :( Very much slower than DES and 3DES CryptoServiceProviders :O
> 
> I know it all depends on how good I am at writing the algorithm in the most efficient way. (And yes I my self have to write it from scratch but i can take a look @ other implementations)
> 
> Nevertheless, does writing a **C++ .NET DLL** to create the encryption/decryption algorithm + all the file handling and using it from C# have a **significant performance advantage** OVER writing the encryption algorithm + file handling in completely managed C# code?
> 
> If I use C++ .NET to create the encryption algorithm, should I use MFC Smart Device DLL or ATL? What is the difference and is there any impact on which one I choose? And can i just add a reference to the C++ DLL from C# or should I use P/Invoke?
> 
> I am fairly competent with C# than C++ but performance plays a major role as I have convinced my lecturers that AES is a very efficient cryptographic algorithm for resource constrained devices.
> 
> Thanx a bunch :)

*I posted the following answer, which was chosen as the accepted answer and received 1 upvote:*

Writing a "managed" program will have equal performance in C++ or C# or VB, since they all compile to IL anyway.

I don't know, but if you write an unmanaged C++ class library and invoke it from managed C# app you may loose some performance during the p/invoke but your speed increase (from going unmanaged) may be enough to justify it. There's an equal chance the p/invoke might cancel it out any potential performance gain from going unmanaged.

I don't think there's anyway to know for sure without doing it both ways and testing.

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/a/2882813) — 1 upvotes *(accepted answer)*. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
