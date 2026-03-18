---
title: "How to do the reverse of what a vuejs slot does normally according to the documentation?"
description: "A question I asked on Stack Overflow"
date: 2018-12-18
author:
  name: Nate Bross
tags:
  - javascript
  - asp.net
  - typescript
  - vue.js
  - vuejs2
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/q/53840965"
---

*I [asked this on Stack Overflow](https://stackoverflow.com/q/53840965):*

After reading the [documentation on slots](https://v2.vuejs.org/v2/guide/components-slots.html) I've come away not really understanding why they are useful, because it seems they function exactly opposite of what I need to do.

For those familiar with ASP.NET, what I really want is an `@section`. That is I have my main page layout defined in some component, and within that component I want to control one small section from within the child where the hierarchy of markup does not make this easy.

I want to have basically this same markup in my application as in the docs:

```
<div class="container">
  <header>
    <slot name="header"></slot>
  </header>
  <main>
    <slot></slot>
  </main>
  <footer>
    <slot name="footer"></slot>
  </footer>
</div>

```

The issue is that I want this to live in my higher level component, and then within the child I want to specify the content that goes in header, for example:

```
<template>
    <div>
        <h1 slot="header">Name Of This Page {{ DataFromChildContext }}</h1>
        <div id="remainder-of-child">
        <!snip...-->
        </div>
    </div>
</template>

```

The documentation is pretty clear, this goes in the PARENT:

> To provide content to named slots, we can use the slot attribute on a element **in the parent:**

_emphasis mine_

Am I barking up the wrong tree or is there a way to make this work using native VueJS features? I want to define the content of the slots in the child and the slot space in the parent.

---

> [Daniel answered](https://stackoverflow.com/a/53841659) (1 upvotes):
>
> Slots offer an easier way to create reusable components. For example, a modal, where you can define the header and body, or some other ui widget like a custom button.
> 
> The design of Vue (and other FE/JS frameworks) is data driven, and the data flows from top down.
> 
> It sounds like what you're looking for, is that a action/data that originates at the bottom affects changes at the top level. The way to do this is to make the data available at the top level. There are plugins that can help with these cases, such as vuex and route. Vuex provides a globally accessible store, so one component can make a change, and another component can listen for that change, and it doesn't matter what the relationship is. Router is used to manage navigation between pages, and allows to easily define which component should be shown within a context of a template. You can create your own implementation too, using listeners and emit, a global bus, or even passing a function as a prop.

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/q/53840965) — 3 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
