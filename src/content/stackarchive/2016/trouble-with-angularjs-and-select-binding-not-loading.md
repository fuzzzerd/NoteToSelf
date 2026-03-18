---
title: "Trouble with AngularJS and Select binding not loading default values"
description: "A question I asked on Stack Overflow"
date: 2016-03-01
author:
  name: Nate Bross
tags:
  - javascript
  - angularjs
  - data-binding
source: "Stack Overflow"
sourceUrl: "https://stackoverflow.com/q/35733417"
---

*I [asked this on Stack Overflow](https://stackoverflow.com/q/35733417):*

I am having trouble with a `<select>` input and binding with AngluarJS. I've created a minimum working sample on Plunker: [http://plnkr.co/edit/P4T25RoJrU4mvbBiUJ9S?p=preview](http://plnkr.co/edit/P4T25RoJrU4mvbBiUJ9S?p=preview).

The basic issue is as follows: the value in the dropdown is never pre-selected with the value from my model.

Additionally, in Angular 1.1.5, `ng-options` appears to not include a "label" on the generated `<option>` tags, so when you change selection the drop down control doesn't register any change.

---

> [georgeawg answered](https://stackoverflow.com/a/35735731) (1 upvotes):
>
> Two issues:
> 
> *   Compare strings to strings
> *   Be careful when using `select as` and `track by` in the same expression.
> 
> JS
> 
> ```
> angular.module('defaultValueSelect', [])
>   .controller('ExampleController', ['$scope', function($scope) {
>     $scope.data = {
>      availableOptions: [
>        {id: '1', name: 'Option A'},
>        {id: '2', name: 'Option B'},
>        {id: '3', name: 'Option C'}
>      ],
>      //USE this
>      selectedOption: '2'
>      //NOT this
>      //selectedOption: 2 //This sets the default value
>      };
>  }]);
> 
> ```
> 
> HTML
> 
> ```
> <!-- remove 'track by option.id' -->
> 
> <select name="mySelect" id="mySelect"
>     ng-options="option.id as option.name for option 
>                 in data.availableOptions track by option.id"
>     ng-model="data.selectedOption">
> </select>
> 
> ```
> 
> From the Docs:
> 
> > Be careful when using `select as` and `track by` in the same expression.
> > 
> > This will work:
> > 
> > ```
> > <select 
> >     ng-options="item as item.label for item in items track by item.id"
> >     ng-model="selected">
> > </select>
> > 
> > ```
> > 
> > but this will not work:
> > 
> > ```
> > <select 
> >     ng-options="item.subItem as item.label for item in items track by item.id"
> >     ng-model="selected">
> > </select>
> > 
> > ```
> 
> \-- [AngularJS `ng-options` Directive API Reference](https://docs.angularjs.org/api/ng/directive/ngOptions)

<details>
<summary>Notable comments</summary>

**Nate** (0 upvotes): @VivekN That seems to have fixed my problem. Thank you very much. Post that as an answer so I can accept it.

</details>

---
*Originally posted on [Stack Overflow](https://stackoverflow.com/q/35733417) — 1 upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
