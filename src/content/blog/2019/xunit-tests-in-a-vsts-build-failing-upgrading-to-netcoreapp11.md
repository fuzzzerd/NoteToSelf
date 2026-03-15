---
title: xUnit Tests in a VSTS Build Failing Upgrading to netcoreapp1.1 and Microsoft.NETCore.App 1.1.1 with project.json and preview 2.1 tooling.
description: When using netcoreapp1.0 I had been using the existing Visual Studio Test task from the Build Editor (v1.x) and simply overriding the ‘path to dlls’ with a ‘path to project.json` file as outlined here.
date: 2017-04-05
author: 
  name: Nate Bross
tags: 
  - tests
  - dotnet
---
When using netcoreapp1.0 I had been using the existing Visual Studio Test task from the Build Editor (v1.x) and simply overriding the ‘path to dlls’ with a ‘path to project.json` file as outlined here.

Upon upgrading the application and all tests to netcoreapp1.1 VSTS started failing builds with the following error:

    Error: 'test-xunit' returned '-2147450749'.

Running these tests locally though Visual Studio, `dotnet test` and vstest.console.exe all worked just fine.

Scouring the internet, you’ll find plenty of sources suggesting that you add the nuget package ‘Microsoft.DotNet.InternalAbstractions’ to your test project. In my case, this did NOT solve the problem.

The only way I could get it working was to downgrade the test projects from

    Microsoft.NETCore.App : { version: 1.1.1 }

    to

    Microsoft.NETCore.App: { version: 1.1.0 }

I suspect that the build agent doesn’t have v1.1.1; and that is why running locally the tests always work. All I know for sure is that running it locally everything worked fine, but it would blow up on a VSTS Build Agent.
