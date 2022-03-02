---
title: When a Difference In Your Environment Make a Difference 
date: 2018-11-17
author: 
  name: Nate Bross
tags: 
  - food
---
I'm using IdentityServer4 for a couple projects. Its great, and might warrant a post of its own; however, one thing I've been struggling with is loading the jwt signing certificates. I've been using the powershell cmdlet New-SelfSignedCertificate to generate the pfx files and it works great on my local computer.

Running this on a web server has caused some grief, but lead to my learning a bit more about how these things actually work.

This is the final code that works, but I'll walk through how I got to it.

```csharp
​new X509Certificate2(keyFilePath, keyFilePassword, X509KeyStorageFlags.MachineKeySet | X509KeyStorageFlags.EphemeralKeySet)​
```

The first thing is that the certificate file itself can have indicators stating whether to load to User store or Machine store; so I've used MachineKeySet to ensure we override that.

Additionally I'm also specifying EphemeralKeySet, which indicates the private keys should not be persisted anywhere. This is the key part that allows everything to work when running as ApplicationPoolIdentity on a server without administrative privileges.

Without passing the additional Storage Flags, the system uses whats in the certificate file/data and that works locally since I have a user profile and/or administrative rights. By default, IIS does NOT load the user profile which means no environment variables or user certificate store. In order to use MachineKeySet you need administrative privileges (something your web facing accounts should not have) so that's where Ephemeral comes in to play. Nothing is persisted so the admin rights are not needed. There are some incompatibilities with this approach; noted in the sources below, but for jwt signing it works.

For reference and searches, here are the errors I got/overcame.

Using default constructor without flags:

> Internal.Cryptography.CryptoThrowHelper+WindowsCryptographicException: The system cannot find the file specified

Specifying only MachineKeySet, while running as ApplicationPoolIdentity:

> Internal.Cryptography.CryptoThrowHelper+WindowsCryptographicException: Access denied

Relevant sources:

- <https://stackoverflow.com/a/27242467/86860>
- <https://stackoverflow.com/a/17149834/86860>
- <https://github.com/dotnet/corefx/issues/14745>
- <https://github.com/dotnet/corefx/issues/23780>
