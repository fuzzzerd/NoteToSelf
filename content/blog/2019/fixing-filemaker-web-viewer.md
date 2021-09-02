---
title: Comprehensive Guide to Fixing the FileMaker Web View Control on Windows 
alt: nice image
date: 2019-05-14
author: 
  name: Nate Bross
tags: 
  - web development
---
Working with the FileMaker Web View control can be a challenge on windows. The FileMaker Web View control is essentially a shim that allows us to put the MSHTML Control on a FileMaker layout. Common wisdom is that this control is "essentially IE" while true, that is misleading. By default the control operates in IE5.5 mode!  There is a lot of historical information and decisions that brought us to those defaults. Fact is, it doesn't have to remain that way. I'm going to outline how to get the MSHTML Control up to IE11 mode.

<!--more-->

There are a couple levers we can pull to nudge the control into supporting modern standards. The Document Mode and the Input Model.

## Setting up "Document Mode"

There are several ways to set the document mode that the control uses, and this behaves much like the IE the full browser. It can be specified couple ways.

### HTTP Header sent from the web server hosting the content loaded in the control.

This can be done many ways, depending on the server system in question. A simple way for a site hosted by IIS is to simply add this to web.config:

```xml
<system.webServer>
  <httpProtocol>
    <customHeaders>
      <clear />
      <add name="X-UA-Compatible" value="IE=Edge" />
    </customHeaders>
  </httpProtocol>
</system.webServer>
```

### Meta tag in the body of the document rendered

Lots of examples of doing this method. Advantage to this method is that it works with a data url.

### Registry setting on the computer running FileMaker Pro

Each method has benefits and drawbacks, and the later versions of FileMaker set the registry setting during install. FileMaker v16 and v17 both do. Other versions YMMV. It looks like this:

feature browser emuluation registry screen shot

#### Configuring the Input Model

The input model is the flag that toggles some more modern javascript apis, such as Pointer Events, among others. This can only be controlled via a registry setting on the computer running FileMaker Pro.

To DISABLE Legacy Input Mode (which is enabled unless you do this for any MSHTML Control) you must create the following registry key:

>     HKEY_CURRENT_USER (HKLM requires different keys based on bitness of FMPA version)
>         SOFTWARE
>             Microsoft
>                 Internet Explorer
>                     Main
>                         FeatureControl
>                             FEATURE_NINPUT_LEGACYMODE
>                                 FileMaker Pro Advanced.exe = (DWORD) 00000000

The zero value tell the operating system that when "FileMaker Pro Advanced.exe" (adjust accordingly if you're not using advanced) requests an MSHTML Control, it should disable the Legacy Input mode which is intended to support old legacy enterprise systems built for IE5.5 or IE6.

This is what it looks like prior to creating any entries:

empty registry section for legacy mode

Once you've pulled both levers, modern websites and controls will work much better while embedded inside your FileMaker solution. We're still working with IE11, so rendering issues will still present themselves. Your site must account for this, but at least more modern programming APIs will be available.