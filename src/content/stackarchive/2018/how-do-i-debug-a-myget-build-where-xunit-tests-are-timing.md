---
title: "How do I debug a MyGet build where xUnit tests are timing out on even though tests run in under ten seconds locally?"
description: "A question I asked on Stack Overflow"
date: 2018-04-13
author:
  name: Nate Bross
tags:
  - c#
  - .net
  - .net-core
  - xunit
  - myget
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/q/49819499"
---

*I [asked this on Stack Overflow](https://stackoverflow.com/q/49819499):*

The title pretty much says it all; I've got some myget builds failing during the unit test project.

This is the link to the build log on Myget: [https://www.myget.org/BuildSource/List/filemaker#19f57648-9fb3-4550-ba06-b400e7d75ecc](https://www.myget.org/BuildSource/List/filemaker#19f57648-9fb3-4550-ba06-b400e7d75ecc)

MyGet Log Snip:

> ```
> Starting test execution, please wait...
> [xUnit.net 00:00:00.5400101]   Discovering: FMData.Tests
> [xUnit.net 00:00:00.6264854]   Discovered:  FMData.Tests
> [xUnit.net 00:00:00.6318313]   Starting:    FMData.Tests
> [Error] Error during build: The process has been killed because the maximum allowed working time of 15 minutes was exceeded.
> Destroying git credential provider...
> [Error] Error while running finalizing build steps: The process has been killed because the maximum allowed working time of 15 minutes was exceeded.
> Cleaning up build environment...
> Cleaning up sources...
> 
> ```

The actual code for the project and the unit tests can be found here [https://github.com/fuzzzerd/fmdata](https://github.com/fuzzzerd/fmdata).

Running locally via `dotnet test` nets me this:

> ```
> Starting test execution, please wait...
> [xUnit.net 00:00:00.7681456]   Discovering: FMData.Tests
> [xUnit.net 00:00:00.9135692]   Discovered:  FMData.Tests
> [xUnit.net 00:00:00.9193997]   Starting:    FMData.Tests
> [xUnit.net 00:00:01.1856516]   Finished:    FMData.Tests
> 
> Total tests: 8. Passed: 8. Failed: 0. Skipped: 0.
> Test Run Successful.
> Test execution time: 2.6027 Seconds
> 
> ```

As mentioned the unit tests run locally in 5-10 seconds; this is a very small project with very few dependencies, but something is clearly conflicting, but I'm not sure how to debug the myget build services or even find out if I have somehow incorrectly setup my unit test project.

Is there a way to turn on advanced/verbose logging? Right now I don't know if its a myget issue, a project issue, or a specific test that is causing problems here.

<details>
<summary>Notable comments</summary>

**Nate** (1 upvotes): It seems to be related to xunit running the tests in parallel. Adding this to the test assembly `[assembly: CollectionBehavior(DisableTestParallelization = true)]` seems to allow it to work in all CI environments; it runs locally without any problems though. Leaving open as I'm not sure WHY the parallelization matters.

**Nate** (0 upvotes): I've reproduced this behavior on appveyor build services now as well.

**Nate** (0 upvotes): @McGuireV10 thanks for checking. I removed the .NET Framework target, and I'm still getting a similar situation running the tests on the build server just hangs. The only thing I can think of is that I'm using this package: [github.com/richardszalay/mockhttp](https://github.com/richardszalay/mockhttp)

**Nate** (0 upvotes): FWIW: If I remove the test project from the build; it works and publishes the package to the feed. It seems to be something specific to the test project or the tests.

</details>

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/q/49819499) — 1 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
