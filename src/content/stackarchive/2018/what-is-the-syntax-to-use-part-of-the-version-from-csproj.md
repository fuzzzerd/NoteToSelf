---
title: "What is the syntax to use part of the version from CSPROJ and AppVeyor {build} to get a 2.0.x style build number?"
description: "A question I asked on Stack Overflow"
date: 2018-08-13
author:
  name: Nate Bross
tags:
  - c#
  - .net
  - build
  - appveyor
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/q/51826670"
---

*I [asked this on Stack Overflow](https://stackoverflow.com/q/51826670):*

Is it possible to have AppVeyor builds use the build number from the csproj file but replace the 'patch' version with the `{build}` variable?

For Example:

```
CSPROJ: <Version>2.1.0</Version>
AppVeyor: ??? What goes here? Manually setting 2.1.{build} will work but then to rev to 2.2, we have to update appveyor AND csproj.
Output: 2.1.15 (assuming build number is 15)

```

Is this possible with the build-in AppVeyor Patching system?

---

> [Ilya Finkelsheyn answered](https://stackoverflow.com/a/51829640) (1 upvotes):
>
> This should work. Just replace subfolder and file name in `$xmlPath`
> 
> ```
> install:
> - ps: |
>     $xmlPath = "$env:appveyor_build_folder\mysubfolder\myproject.csproj"
>     $xml = [xml](get-content $xmlPath)
>     $version = ($xml.Project.PropertyGroup | ? {$_.Version}).Version
>     $env:newversion = ($version.Substring(0, $version.LastIndexOf(".") + 1)) + $env:appveyor_build_number
> 
> dotnet_csproj:
>   patch: true
>   file: '**\*.csproj'
>   version: $(newversion)
>   package_version: $(newversion)
>   assembly_version: $(newversion)
>   file_version: $(newversion)
>   informational_version: $(newversion)
> 
> ```

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/q/51826670) — 0 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
