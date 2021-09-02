---
title: Anatomy of a blob storage Uri, and how to use a blob name prefix to make Azure do your filtering. 
description: Sounds simple enough, right? The blob storage account has a Uri and each part means something.
date: 2017-07-05
author: 
  name: Nate Bross
tags: 
  - web development
  - dotnet
  - azure
---
Sounds simple enough, right? The blob storage account has a Uri and each part means something.

There are only three levels of hierarchy built into the system:

 1. Account
 2. Container
 3. Blob

Seen as:

> https://[STORAGE_ACCOUNT_NAME].blob.core.windows.net/[CONTAINER-NAME]/[BLOB-NAME]

Within the Blob itself, the NAME property can be used to create additional ‘virtual’ directories, but they are just that. Virtual. This is where things get pretty powerful. Using the Storage Client libraries for .NET, the ListBlobsSegmentedAsync method allows you to have Azure filter out blobs based on prefix. The prefix filter here only applies to the Blob Name. If we look at a specific example (redacted to protect the guilty):

> https://[STORAGE_ACCOUNT].blob.core.windows.net/[CONTAINER]/VirtualFolder1/2017/7/01/15/fileanme.ext

You see this whole part [VirtualFolder1/2017/07/01/15/fileanme.ext] is all the Blob Name. It just so happens to be setup by folders Year/Month/Date/Hour and because of this we can use the ListBlobsSegmentedAsync to filter based on it.

```csharp
var list = await container.ListBlobsSegmentedAsync(
    "VirtualFolder1/2017/07", 
    true, 
    BlobListingDetails.None,
    int.MaxValue, 
    null, 
    null, 
    null);
```

This would give us all files for the month of July in the year 2017, regardless of which day or hour they are listed in. Doing it this way allows me to query a much more limited set of data, meaning I have to process out fewer files locally and there is less data transfer in and out as a result.

The main caveat I’ve found is that you cannot use wildcards, so you can’t find all the blobs for July in any year without doing multiple queries. Because the container is not part of the blob name, you cannot query across containers either.