//Use this file to write your js code to solve the prompts in the crafting.md file.

//In your terminal, run: node crafting/crafting.js
console.log('crafting.js is running!')

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


// Level One 
// getSupplyList('crossStitching') 
    // expected result --> ['fabric', 'needle', 'thread', 'scissors', hoop]
// getSupplyList('crocheting') 
    // expected result --> ['hook', 'yarn', 'scissors']





// Level Two
// viewSupplies()  
    // expected result -->
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





// Level Three
// viewSupplies() 
  // expected result --> 
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





