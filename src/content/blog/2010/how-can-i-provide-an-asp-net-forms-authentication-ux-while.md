---
title: "How can I provide an ASP.NET Forms Authentication UX while using Active Directory Role and Authentication providers?"
description: "A question I asked on Stack Overflow"
date: 2010-04-09
author:
  name: Nate Bross
tags:
  - c#
  - .net
  - asp.net
  - security
  - forms
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/q/2610377"
---

*I [asked this on Stack Overflow](https://stackoverflow.com/q/2610377):*

Is it possible to use this Role Provider `AspNetWindowsTokenRoleProvider` with ASP.NET FORMS Authentication (via this MembershipProvider `System.Web.Security.ActiveDirectoryMembershipProvider`)?

It seems to only work with `<authentication mode="Windows">`, is it possible to use it with FORMS?

_background_ -- The objective here is to provide an ASP.NET Forms UX while using Active Directory as the back-end authentication system. If there is another, easy way to do this using built-in technologies, that's great and I'd like to hear about that as well.

**update**

I should say that I have the authentication working, what I'm struggling with is adding a level of granular control (such as Roles).

Currently, I have to setup my Active Directory Connection to point to a specific OU in my domain, which limits access to only users physically in that OU -- what I'd like is to point my Active Directory connection to my entire domain, and restrict access based on Group Membership (aka Roles) this works if I use Windows Authentication -- but I'd like to have the best of both worlds, is this possible without writing my own RoleProvider?

---

> [Thomas answered](https://stackoverflow.com/a/2660251) (7 upvotes):
>
> As others have mentioned, you cannot use the `ActiveDirectoryMembershipProvider` with the `AspNetWindowsTokenRoleProvider`. If you want to use the ADMP with Forms Authentication, you have a few choices:
> 
> 1.  Use the `AuthorizationManager` aka AzMan. - AzMan is built into Windows 2003+ and can interact with Active Directory groups. In addition, there is an `AuthorizationStoreRoleProvider` built into .NET 2.0+ that you can use to interact with it. AzMan works on Task, Operations and Roles wherein presumably your application would be coded to act on specific Tasks which could then be grouped into Operations and you can then create Roles which have authority to perform various Operations. There is a management application that gets installed when you install AzMan that you can use to manage Tasks, Operations and Roles. However, there are some downsides to AzMan. First, the `AuthorizationStoreRoleProvider` does not recognize Tasks. Rather, it loads the `Roles` list with a list of Operations. Thus, unless you create a custom version of the provider, your applications would need to seek Operation names instead of Task names. Second, it can be a bear to work with in that interaction, at the lowest level, is still via COM. Unless you want your administrators having to use the AzMan tool, you'll need to write your own pages to manage Operations, Roles and membership in roles.
>     
> 2.  Use the SqlRoleProvider and map roles to usernames. The advantage of this solution is that it is very simple to implement. You can pretty much use it out of the box since the RoleProvider operates on username and not UserId. In your code you would simply check for IsInRole to determine if the given user had been dropped into a role that your code recognizes. The significant downside is that it is geared on usernames only and not AD groups and thus there is no means for an admin to use the AD tools to manage users. Instead, you have to write a management console to manage role membership. In addition, changing a username at the AD level would require an update to your application's list of known usernames.
>     
> 3.  Write (or locate) a custom AD RoleProvider that honors AD groups. Writing a custom role provider is not for the faint of heart but doing so lets administrators manage role membership using their existing AD tools.

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/q/2610377) — 11 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
