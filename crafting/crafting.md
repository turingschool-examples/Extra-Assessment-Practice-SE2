# Crafting

Once students encounter Object.keys() they often panic and assume they need to use it anytime their dataset is an object. These practice prompts will help you practice manipulating the crafting data set object _with_ and _without_ needing to reach for Object.keys().

Note: you will not need Object.keys() for midmods or final assessments.

```js
const craftSupplies = {
  crossStitching: [
    { name: 'fabric', amountNeeded: 0.25 }, 
    { name: 'needle', amountNeeded: 1 }, 
    { name: 'thread', amountNeeded: 10 }, 
    { name: 'scissors', amountNeeded: 1 },
    { name: 'hoop', amountNeeded: 1 }
  ],
  weaving: [
    { name: 'loom', amountNeeded: 1 }, 
    { name: 'needle', amountNeeded: 1 }, 
    { name: 'yarn', amountNeeded: 6 }, 
    { name: 'scissors', amountNeeded: 1 }
  ],
  knitting: [    
    { name: 'needle', amountNeeded: 2 }, 
    { name: 'yarn', amountNeeded: 4 }, 
    { name: 'scissors', amountNeeded: 1 }
  ],
  crocheting: [
    { name: 'hook', amountNeeded: 1 }, 
    { name: 'yarn', amountNeeded: 3 }, 
    { name: 'scissors', amountNeeded: 1 }
  ]
};
```

## Level One
Write a function that takes in a parameter of craft and returns a list of supplies needed


```js
getSupplyList('crossStitching') 
// --> ['fabric', 'needle', 'thread', 'scissors', hoop]

getSupplyList('crocheting') 
// --> ['hook', 'yarn', 'scissors']
```

## Level Two 🌶
Write a function that returns a list of supplies with associated crafts

```js
viewSupplies()  
// --> 
// {
//   fabric: ['crossStitching'],
//   needle: ['crossStitching', 'weaving', 'knitting'],
//   thread: ['crossStitching'],
//   scissors: ['crossStitching', 'weaving', 'knitting', 'crocheting'],
//   hoop: ['crossStitching'],
//   loom: ['weaving'],
//   yarn: ['weaving', 'knitting', 'crocheting']
//   hook: ['crocheting'] 
// }
````

## Level Three 🌶
Refactor your viewSupplies function to include the total amount needed for each supply


```js
viewSupplies() 
// --> 
// {
//   fabric: { crafts: ['crossStitching'], amountNeeded: 0.25 },
//   needle: { crafts: ['crossStitching', 'weaving', 'knitting'], amountNeeded: 0.25 },
//   thread: { crafts: ['crossStitching'], amountNeeded: 4 },
//   scissors: { crafts: ['crossStitching', 'weaving', 'knitting', 'crocheting'], amountNeeded: 4 },
//   hoop: { crafts: ['crossStitching'], amountNeeded: 1 },
//   loom: { crafts: ['weaving'], amountNeeded: 1 },
//   yarn: { crafts: ['weaving', 'knitting', 'crocheting'] amountNeeded: 13 },
//   hook: { crafts: ['crocheting'],  amountNeeded: 1 },
// }
```
