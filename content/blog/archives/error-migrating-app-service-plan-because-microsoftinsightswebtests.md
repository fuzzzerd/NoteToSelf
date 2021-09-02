---
title: Error Migrating App Service Plan because of ‘microsoft.insights/webtests’ 
description: Had two azure subscriptions along with two AppServicePlans (one each) for cost savings I wanted to combine them, but you can’t use the ‘Change AppServicePlan’ on the individual AppServices unless they’re in the same sub, resource group, and region.
date: 2017-05-27
author: 
  name: Nate Bross
tags: 
  - web development
  - azure
---
Had two azure subscriptions along with two AppServicePlans (one each) for cost savings I wanted to combine them, but you can’t use the ‘Change AppServicePlan’ on the individual AppServices unless they’re in the same sub, resource group, and region.

Each time I tried to use the portal to move one AppServicePlan to the other subscription, I would get this error:

    the subscription ‘subscription-guid’ is not registered for resource types 'microsoft.insights/webtests (centralus)'. #code: missingregistrationsfortypes#

Turns out that I had some existing web tests from the old portal that were orphaned and couldn’t be opened/read from the new portal.

Enter the commandline tool from the web portal (yes, the terminal in the web portal, its neat check it out!):

    az resource list –resource-type microsoft.insights/webtests

and there I get a nice json list of the resources that were giving me trouble, along with their “id” so I was able to delete them with

    az resource delete –id /subscriptions/[guid]/resourceGroups/[my-resource-group]/providers/microsoft.insights.webtests/[test-name]

Someone more in tune with the bash shell could probably link those up to double down and delete all the items returned with a single command, but I was able to do it manually as I only had a few of these troublesome resources clogging up my migration.