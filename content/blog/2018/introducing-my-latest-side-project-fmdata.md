---
title: Introducting my latest side project - FMData
date: 2018-09-05
author: 
  name: Nate Bross
tags: 
  - dotnet
  - web development
  - filemaker
  - open source
---
I switched jobs in March of this year, that is a story for a different time, but the important thing is that it reintegrated me with some technology I had not used in quite some time: FileMaker. FileMaker is a database system that provides UI and basic scripting capabilities all in a single package. Users use the FileMaker client to access data stored in FileMaker databases, utilizing layouts and scripts in the database. Its an all in one system.

As a web developer with a lot of C# code under my belt, I wanted to connect to data in FileMaker from the outside. Historically the way to do this was through their XML Publishing Engine, I picked up an existing open source project and modified it to suit my needs. Ten years ago, this was a great solution and it worked well. It still does, but as things change so must we. In FileMaker 17 the Data API was introduced. It uses JSON and is RESTful. A new package was needed. [Enter my side project: FMData](https://github.com/fuzzzerd/fmdata). I built this as a learning exercise, but quickly realized it could be useful to other developers.

The library provides coverage for the FileMaker 17 Data API, and I've just released v2.1, cleaning up a handful of bugs and improving coverage of the underlying FileMaker API. I still don't have full coverage, but I'm inching towards it. I have tons of ideas for features and enhancements, so be sure to keep an eye on the project. If you find it useful let me know. If you find a bug, open an issue. If you have a feature idea, open an issue on github and consider making a pull request.

The package is available on Nuget, and getting some data is really this simple:

```csharp
var client = new FileMakerRestClient("server", "fileName", "user", "pass"); // without .fmp12
var toFind = new Model { Name = "someName" };
var results = await client.FindAsync(toFind);
// results = IEnumerable<Model> matching with Name field matching "someName" as a FileMaker Findrequest.
```

That's all there is to it, and there's more examples on the project site: https://fmdata.io/