---
title: "Why am I getting the Yellow Screen Of Death on an Umbraco SurfaceController on a default/OOTB Umbraco installation?"
description: "A question I asked on Stack Overflow"
date: 2014-01-13
author:
  name: Nate Bross
tags:
  - c#
  - .net
  - asp.net-mvc
  - umbraco
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/q/21096156"
---

*I [asked this on Stack Overflow](https://stackoverflow.com/q/21096156):*

**My Question Is This**

What configuration step have I missed to make Mvc Surface Controllers work in Umbraco?

My theory is that since there is a folder in the default Umbraco install called `/umbraco/` which is used to connect to the CMS that the physical path is interfiering with the route `/umbraco/surface/{Controller}/{Action}` thus resulting in the ASP.NET YSOD (and an IIS 404 when I try to access a controller on that route that isn't defined.)

* * *

**Background Information**

* * *

I have added this class to my `App_Code` folder in a freshly downloaded copy of Umbraco 6.1.6:

```
public class MembersController : SurfaceController
{
    public ActionResult Index()
    {
        return Content("Hello, Member!");
    }
}

```

When I navigate to what I think should be the route for my `Index()` method, I get a YSOD that says the resource could not be found:

![YSOD for route to path](https://i.sstatic.net/6Loav.png)

the code is not executed and the above error is displayed; however, if I change the Uri to garbage I get an IIS 404 error:

![IIS 404 error for route to non-existing path](https://i.sstatic.net/0IKKL.png)

I started getting this in an existing site, thinking my site was screwed up I tried it in a new copy of Umbraco 6.1.6 and got the exact same results.

For the record, I have also tried `MembersSurfaceController` and its associated Uri, which has the exact same result as above. YSOD when I hit the valid route, and IIS 404 when I don't.

I have changed my `umbracoSettings.config` to MVC in the `/config/` directory as well.

* * *

**update**

* * *

I'm using the out-of-the-box `web.config` file, which has this:

```
 <system.webServer>
     <validation validateIntegratedModeConfiguration="false" />
     <modules runAllManagedModulesForAllRequests="true">
         <remove name="UrlRewriteModule" />
         <add name="UrlRewriteModule" type="UrlRewritingNet.Web.UrlRewriteModule, UrlRewritingNet.UrlRewriter" />
         .
         ..
         ...

```

On my default Umbraco site I don't have any rewrite rules defined; but on my actual site I have several rewrite rules in place. I'm thinking that's not causing it since I'm seeing the same behavior on both sites though...

I have tried removing `UrlRewrite` completely I get the same results.

* * *

---

> [anikiforov answered](https://stackoverflow.com/a/23487064) (3 upvotes):
>
> The following approach works for me in Umbraco 7.1, and I expect it to work in 6.1 as well:
> 
> Create folder called 'Controllers' within your App\_Code folder, and put your surface controllers in there (so that they will be within the 'Controllers' namespace).
> 
> E.g. I have the following controller in the App\_Code\\Controllers folder (and hence, **within the 'Controllers' namespace**):
> 
> ```
> namespace Controllers
> {
>     public class ServiceCentersController : SurfaceController
>     {
>         public ActionResult GetServiceCenters(string country = "", string region = "", string city = "")
>         {
>         ...
>         }
>     }
> }
> 
> ```
> 
> My site runs on localhost, so I can invoke the GetServiceCenters action by navigating to:
> 
> ```
> http://localhost/umbraco/Surface/ServiceCenters/GetServiceCenters?country=aa&region=bb&city=cc
> 
> ```

<details>
<summary>Notable comments</summary>

**Nate** (0 upvotes): @Jan\_V I have not figured it out yet, but I have not tried with more recent Umbraco versions either.

**Nate** (0 upvotes): @milquetoastable I have not tried that yet (I will), but it feels like a lot of overkill for my current site.

**milquetoastable** (3 upvotes): I can replicate this issue, but only by placing my Controllers in the App\_Code folder (Umbraco v6.1.3) - if they're complied, there seems to be no issue. It's a long shot, but could you compile the Controllers (by adding a Class Library, moving the Controllers to there and adding a reference to your Website to the Class Library if your project is a Website) and try again?

**Nate** (0 upvotes): I'm not sure what you mean, I'm running the out-of-the-box web.config.

</details>

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/q/21096156) — 5 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
