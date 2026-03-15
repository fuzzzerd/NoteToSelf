---
title: Tests that worked fine on Windows are failing with an IOException on Ubuntu.
date: 2023-10-04
lastMod: 2023-10-04
author: 
  name: Nate Bross
tags: 
  - asp.net-core
  - dotnet
---

I have a set of integration tests that have been working great on Windows for quite some time. While troubleshooting an [unrelated issue](https://github.com/microsoft/vstest/issues/799#issuecomment-1379536695) I was running my tests on Ubuntu 20.04 LTS via WSL, and about half of the tests were failing with this IOException.

## The Error Message

> System.IO.IOException : The configured user limit (128) on the number of inotify instances has been reached, or the per-process limit on the number of open file descriptors has been reached.

It seems that due to the way my tests work using `WebApplicationFactory<Startup>` and calling `factory.WithWebHostBuilder(builder => ...`, I'm creating too many instances of the HostBuilder, which by default installs a file system watcher on the `appsettings.json` file. All those instances tap out the default number of inotify instances allowed. Switching to a polling mechanism clears this up.

## The Solution I Found

Configure the environment variable to have dotnet use polling instead.

```bash
export DOTNET_USE_POLLING_FILE_WATCHER=true
```

I don't know if there are unintended side effects of this change; however, since its only applying to test runs, I feel its a safe change to make.
