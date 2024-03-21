---
title: HTTP Status Codes Explained for Most Folks
date: 2023-04-03
author: 
  name: Nate Bross
tags: 
  - web development
  - http
---

There are lots of jokes about HTTP status codes, what they mean, and general frustration with the inconsistent way in which they're used.

## HTTP 1xx

- 100: Continue sending me the request.

## HTTP 2xx

- 200: OK, here you go.
- 201: OK, I created it for you.

## HTTP 3xx

- 301: Moved what you want to a new spot over here.
- 302: Found what you're looking for over here.

## HTTP 4xx

- 400: Your bad.
- 401: You aren't logged in.
- 403: You're logged in, but can't do/see that.

## HTTP 5xx: Our bad

- 500: We screwed up.
- 503: We forgot to start the server.

There are many more status codes, and as a developer I encourage other developers to use appropriate and specific response codes. For more [specific details, Wikipedia has a good overview](https://en.wikipedia.org/wiki/List_of_HTTP_status_codes).
