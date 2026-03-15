---
title: Graphing United States Road/Highway Lane Mileage by State and Type Of Road 
date: 2018-12-27
author: 
  name: Nate Bross
tags: 
  - web development
  - javascript
---
There are a few data visualization projects I want to tackle and a good number of them have a cartography component. I knew I had to get started with one and build on it or I'd never get any of them rolling. I ran across a ['Functional System Lane Length' data set from Federal Highway Administration](https://www.fhwa.dot.gov/policyinformation/statistics/2017/hm60.cfm). I figured the table could be cleaned up and presented in a more intuitive way using a map and it would force me to kick start this little prototype.

<iframe src="/highway-map-data/map.html" frameborder="0" style="width: 100%; height: 900px;"></iframe>

This is what I came up with, its still a work in progress, though updates will likely come slowly and will be applied to the next data visualization project. This is how I approached it.

## Visualization Technology

I had worked with jqvmap on some previous projects, and they have a great sample for color coding a map based on a set of data, so I decided to stick with something I already knew. I also knew I wanted to throw this in a separate page that I could embed on my blog here, so I wanted to make sure it could be completely self contained.
Data Processing

The data was available in an html table form, as well as pdf and excel. I found an online html table to json converter, and used that to build an array of data from the table. This got me close to what I wanted, but it left a bad taste in my mouth indexing into a multi dimensional array to pull out data every time I wanted to change data sets. This is what it looked like before any conversion:

```js
[
    ["INTERSTATE","OTHER FREEWAYS AND EXPRESSWAYS","OTHER PRINCIPAL ARTERIAL","MINOR ARTERIAL","MAJOR COLLECTOR","MINOR COLLECTOR (2)","LOCAL (2)","TOTAL","INTERSTATE","OTHER FREEWAYS AND EXPRESSWAYS","OTHER PRINCIPAL ARTERIAL","MINOR ARTERIAL","MAJOR COLLECTOR","MINOR COLLECTOR","LOCAL (2)","TOTAL","",""  ],
    ["Alabama","2,414","-","6,045","8,398","24,615","12,441","94,725","148,638","2,189","138","4,905","6,070","7,547","372","41,481","62,701","211,339"  ],
    ["Alaska","2,057","-","1,612","867","2,743","2,862","15,294","25,434","303","-","503","475","510","472","3,898","6,162","31,597"  ],
    ["Arizona","3,714","70","3,417","2,691","8,552","3,789","61,350","83,584","1,462","1,552","3,771","9,278","4,352","456","40,505","61,375","144,959"  ],
    ["Arkansas","1,752","288","4,996","6,360","23,780","13,656","122,548","173,378","1,469","424","2,208","4,364","4,504","499","23,685","37,154","210,532"  ],
    ["California","5,254","1,518","8,253","12,647","24,037","15,080","82,233","149,022","9,671","9,283","25,149","30,758","27,593","644","142,263","245,361","394,383"  ],
]
```

Clearly, something needed done, so I wrote a small processing utility and JSON.stringify'd it:

```js
var ddt = [];
for (var i = 0; i < states.length; i++) {
    var abvr = StateAbvrFromName(states[i][0]); // since data shows state name and jqvmap uses state code, il, ca, etc
    ddt[ddt.length] = {
        'State': { 'Name' : states[i][0], 'Code': abvr },
        'Rural': {
            'Interstate': parseInt(states[i][1].replace(/,/g, ""), 10),
            'Other_Freeways_Expressways': parseInt(states[i][2].replace(/,/g, ""), 10),
            'Other_Principal_Arterial': parseInt(states[i][3].replace(/,/g, ""), 10),
            'Minor_Arterial': parseInt(states[i][4].replace(/,/g, ""), 10),
            'Major_Collector':parseInt(states[i][5].replace(/,/g, ""), 10),
            'Minor_Collector_2': parseInt(states[i][6].replace(/,/g, ""), 10),
            'Local_2': parseInt(states[i][7].replace(/,/g, ""), 10),
            'Total': parseInt(states[i][8].replace(/,/g, ""), 10),
        },
        'Urban': {
            'Interstate': parseInt(states[i][9].replace(/,/g, ""), 10),
            'Other_Freeways_Expressways': parseInt(states[i][10].replace(/,/g, ""), 10),
            'Other_Principal_Arterial': parseInt(states[i][11].replace(/,/g, ""), 10),
            'Minor_Arterial': parseInt(states[i][12].replace(/,/g, ""), 10),
            'Major_Collector': parseInt(states[i][13].replace(/,/g, ""), 10),
            'Minor_Collector_2': parseInt(states[i][14].replace(/,/g, ""), 10),
            'Local_2': parseInt(states[i][15].replace(/,/g, ""), 10),
            'Total': parseInt(states[i][16].replace(/,/g, ""), 10),
        },
        'Total' : parseInt(states[i][17].replace(/,/g, ""), 10),
    };
}
```

Throwing It All Together

Going in to this little project, I knew that I wanted to run without any server side code, I wanted users to be able to minipulate the data to change the map, and I knew I wanted it to be as light weight as possible. I didn't want any node modules or components or any 'build' time tooling to be required to make this work.

I opted to use some jQuery event handling to glue everything together, and I'm actually happy with how it worked out.
