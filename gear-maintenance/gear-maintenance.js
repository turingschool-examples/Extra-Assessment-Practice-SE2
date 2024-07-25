//Use this file to write your js code to solve the prompts in the gear-maintenance.md file.

//In your terminal, run: node gear-maintenance/gear-maintenance.js
console.log('gear-maintenance.js is running!')

const gear = {
  camping: [
    {
      item: 'tent',
      condition: 'good'
    },
    {
      item: 'sleeping bag',
      condition: 'bad'
    },
    {
      item: 'flashlight',
      condition: 'excellent'
    }
  ],
  climbing: [
    {
      item: 'climbing shoes',
      condition: 'bad'
    },
    {
      item: 'harness',
      condition: 'good'
    }
  ],
  kayaking: [
    {
      item: 'kayak',
      condition: 'okay'
    },
    {
      item: 'life jacket',
      condition: 'excellent'
    },
    {
      item: 'dry bag',
      condition: 'bad'
    }
  ]
};


// Level One 
// findBadConditionItems() 
    // expected result -->  ['sleeping bag', 'climbing shoes', 'dry bag' ]





// Level Two
// findBadConditionItems()
    // expected result --> 
      // [
      //   { camping: 'sleeping bag' },
      //   { climbing: 'climbing shoes' },
      //   { kayaking: 'dry bag' }
      // ]





// Level Three
// findBadConditionItems() 
    // expected result --> 
      // {
      //   good: [
      //     { item: 'tent', activity: 'camping' },
      //     { item: 'harness', activity: 'climbing' }
      //   ],
      //   bad: [
      //     { item: 'sleeping bag', activity: 'camping' },
      //     { item: 'climbing shoes', activity: 'climbing' },
      //     { item: 'dry bag', activity: 'kayaking' }
      //   ],
      //   excellent: [
      //     { item: 'flashlight', activity: 'camping' },
      //     { item: 'life jacket', activity: 'kayaking' }
      //   ],
      //   okay: [ { item: 'kayak', activity: 'kayaking' } ]
      // }

