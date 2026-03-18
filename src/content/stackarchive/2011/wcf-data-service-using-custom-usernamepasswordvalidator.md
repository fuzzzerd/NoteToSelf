---
title: "WCF Data Service using custom UserNamePasswordValidator"
description: "A question I asked on Stack Overflow"
date: 2011-10-19
author:
  name: Nate Bross
tags:
  - .net
  - wcf
  - authentication
  - authorization
  - wcf-data-services
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/q/7826932"
---

*I [asked this on Stack Overflow](https://stackoverflow.com/q/7826932):*

I am trying to setup a WCF Data Service to use my custom `UserNamePasswordValidator` it is working great for standard WCF Services; the problem I have is this: In my web.config I cannot specify the WCF Data Service endpoint because it does not implement a contract I can use. See below

```
  <service behaviorConfiguration="GetHttpsIncludeFaults" name="WCFDataService">
    <endpoint
        address=""
        binding="basicHttpBinding"
        bindingConfiguration="BasicHTTP"
        Contract="WHAT-GOES-HERE?"/>
    <endpoint address="mex" binding="mexHttpBinding" contract="IMetadataExchange" />
  </service>

  <behavior name="GetHttpsIncludeFaults">
    <dataContractSerializer maxItemsInObjectGraph="204800" />
    <serviceCredentials>
      <userNameAuthentication userNamePasswordValidationMode="Custom" customUserNamePasswordValidatorType="pjt.UPValidate, pjt"/>
    </serviceCredentials>
    <serviceMetadata httpsGetEnabled="true" />
    <serviceDebug includeExceptionDetailInFaults="true" />
  </behavior>

```

For my normal WCF services, I simply sepcify the interface that the class implements; with Data Services I have no such interface.

If there is a better way to customize the `ServiceBehavior` I'm open to that, this is just the only way I know how to do it.

---

> [Nate answered](https://stackoverflow.com/a/7851122) (1 upvotes):
>
> After a bit of poking around, I was able to get a new error by using this contract: `System.Data.Services.IRequestHandler`.
> 
> After getting past the error that the contract was not implemented by my service, it seems as if WCF Data Services only work with webHttpBinding -- which does not support TransportWithmessageCredential security.
> 
> So, this doesn't exactly answer my question; however, this appears to be the only way to secure a WCF Data Service via a custom username / password validator: [http://blogs.msdn.com/b/astoriateam/archive/2010/07/21/odata-and-authentication-part-6-custom-basic-authentication.aspx](http://blogs.msdn.com/b/astoriateam/archive/2010/07/21/odata-and-authentication-part-6-custom-basic-authentication.aspx)
> 
> It involves using BASIC authentication, and writing your own HttpModule to have IIS delegate the authentication to your own custom username password validator. Obviously, this should only be used over HTTPS.

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/q/7826932) — 2 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
