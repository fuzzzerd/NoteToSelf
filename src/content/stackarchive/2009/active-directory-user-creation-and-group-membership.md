---
title: "Active Directory User Creation and Group Membership modification privileges"
description: "A question I asked on Server Fault"
date: 2009-10-08
author:
  name: Nate Bross
tags:
  - windows
  - security
  - active-directory
  - permissions
source: "Server Fault"
sourceUrl: "https://serverfault.com/q/72608"
---

*I [asked this on Server Fault](https://serverfault.com/q/72608):*

I have a group of users, lets call them DOMAIN\\MyPowerUsers; I would like to give everyone in this group the abbility to create, edit, and delete users in the DOMAIN, and to modifiy group membership of users in the domain. Is this possible?

---

> [Izzy answered](https://serverfault.com/a/72612) (2 upvotes):
>
> You need to Delegate Control to that group. In AD Users and Computers:
> 
> *   Right click on your domain DOMAIN.LOC
>     
> *   select `Delegate Control`
>     
> *   Next
>     
> *   Click Add and select the group
>     
> *   Select the permissions you wish to give the users (in your case, _Create, Delete, Manage User Accounts_ & _Modify the Memberships of Groups_)
>     
> *   Click Next
>     
> *   Click Finish

---
*Originally posted on [Server Fault](https://serverfault.com/q/72608) — 1 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
