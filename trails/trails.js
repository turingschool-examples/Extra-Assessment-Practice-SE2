//Use this file to write your js code to solve the prompts in the trails.md file.

//In your terminal, run: node trails/trails.js
console.log('trails.js is running!')

const fountainValleyLoopTrail = {
  name: 'Fountain Valley Loop',
  location: 'Littleton, CO',
  distance: 2.3,
  traffic: 'moderate',
  features: ['bird watching','hiking','cross country skiing','snowshoeing']
}

const emeraldLakeTrail = {
  name: 'Emerald Lake',
  location: 'Estes Park, CO',
  distance: 3.1,
  traffic: 'heavy',
  features: ['bird watching', 'hiking', 'fishing']
}


// Level One 
// displayTrailData('fountainValleyLoopTrail') 
    // expected result -->  
      // [ 
      //   'The trail name: Fountain Valley Loop',
      //   'The trail location: Littleton, CO',
      //   'The trail distance:  2.3',
      //   'The trail traffic: moderate',
      //   'The trail features: bird watching, hiking, cross country skiing, snowshoeing'
      // ];





// Level Two
const favoriteActivities = [
  { name: 'hiking', preferenceLevel: 9  },
  { name: 'fishing', preferenceLevel: 7 },
  { name: 'snowshoeing', preferenceLevel: 0 },
  { name: 'bird watching', preferenceLevel: 6 },
 ]
// displayTrailData('fountainValleyLoopTrail', favoriteActivities) 
    // expected result --> 
      // [ 
      // 'The trail name: Fountain Valley Loop',
      //  'The trail location: Littleton, CO',
      //  'The trail distance:  2.3',
      //  'The trail traffic: moderate',
      //  'The trail features: hiking, bird watching, snowshoeing'
      // ];





// Level Three
// displayTrailData('fountainValleyLoopTrail', favoriteActivities) 
  // expected results --> 
    // [ 
    //   'The trail name: Fountain Valley Loop',
    // 'The trail location: Littleton, CO',
    // 'The trail distance:  2.3',
    // 'The trail traffic: moderate',
    // 'The trail features: hiking, bird watching'
    // ];
