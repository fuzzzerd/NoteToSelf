---
title: How to provide non-webpack'd configuration (easy to edit post-build/deploy) to a webpack'd single page application 
alt: nice image
date: 2019-02-05
author: 
  name: Nate
tags: 
  - web development
---
SPAs, or single page applications, are all the rage these days. They have their merits, and they are beneficial for many scenarios. One issue that has plagued me repeatedly when working on SPAs is trying to define environment specific variables that are NOT KNOWN at build time. WebPack is great, and scary, and confusing all at the same time, but it packages everything up at once. If you don't know the value at build time, you're out of luck.

<!--more-->

While there are dozens of ways to handle this situation, some including separate build and release pipelines with tokens, I opted for a more low tech solution. Let me set the stage before I continue, as I think it helps paint the picture around why I like this solution. My app connects to some web services, and the uri of said services will be different for each deployment. Its important to note, that my SPA and web services are hosted on different domains and setup with CORS configuration. I can't simply use relative paths.

I created a simple config.js file and included it in the head section of my index.html (the entry point for my SPA). It looks like this:

```js
window.api_root_url = "https://runtime-api.example.com";
window.client_id = "my-client-id-for-open-id-connect";
```

In my SPA code (I'm using typescript) I created a simple globals.ts file which wraps these into type safe constants.

```ts
export const apiRootUrl: string = (window as any).api_root_url;
export const clientId: string = (window as any).client_id;
```

and then whenever I need to reference my api endpoint or my client id I can simply import and use:

```ts
import * as globals from '@/globals';
// later on...
console.log(globals.apiRootUrl);
```

This works well, and provides a single file to edit on the deployed solution. It makes it easy to configure via ftp, ssh, rdp, etc.
