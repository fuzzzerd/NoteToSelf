---
title: "Archiving My Stack Overflow Contributions"
date: 2026-03-17
author:
  name: Nate Bross
tags:
  - stack-overflow
description: "Why and how I archived my Stack Overflow answers and questions to my own site."
---

Over the years I've answered questions on Stack Overflow, asked a few of my own, and generally tried to make the internet a little better one post at a time. That content has been living on other platforms, under others control. I wanted to bring it home alongside the rest of my content on this site.

## How

I used Claude Code to generate a throwaway TypeScript script that hits the [Stack Exchange API](https://api.stackexchange.com/2.3), fetches all my answers and questions, and converts them to Markdown files for this site. The script paginates through the API, converts HTML to Markdown with [Turndown](https://github.com/mixmark-io/turndown), and drops each post into the right year folder.

I wanted to capture the most useful questions and answers as blog posts in my feed for posterity, so the script filters based on accepted answer and post score.

## Why

Stack Overflow gave developers a lot, it came to the internet in a time when searching for expert answers to technical programming problems was a not insignificant and difficult part of being a developer. It was fast, reduced noise and got straight to the point. It was so bad, that there [is an XKCD comic about the subject.](https://xkcd.com/979/)

Times change, and while Stack Overflow has a lot of great content, it is no longer the community I joined in 2009 and I want to ensure that my contributions remain available, to myself and others, for as long as I maintain this internet presence.
