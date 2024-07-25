# Trails

Once students encounter Object.keys() they often panic and assume they need to use it anytime their dataset is an object. These practice prompts will help you practice manipulating the universities data set object with and _without_ needing to reach for Object.keys().

Note: you will not need Object.keys() for midmods or final assessments.

```js

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

```

## Level One


Write a function called `displayTrailData` that will take in any single object of trail data from above. It should return an array of strings. Passing in `fountainValleyLoopTrail` should return:

``` js
[ 
  'The trail name: Fountain Valley Loop',
  'The trail location: Littleton, CO',
  'The trail distance:  2.3',
  'The trail traffic: moderate',
  'The trail features: bird watching, hiking, cross country skiing, snowshoeing'
 ];
 ```
 
 ## Level Two
 
 ```js
 const favoriteActivities = [
  { name: 'hiking', preferenceLevel: 9  },
  { name: 'fishing', preferenceLevel: 7 },
  { name: 'snowshoeing', preferenceLevel: 0 },
  { name: 'bird watching', preferenceLevel: 6 },
]
 ```
 
 Refactor your function so that you can pass in a second parameter of `favoriteActivities`. Sort the trail features by `preferenceLevel` so that my favorite activites show first. Now when you pass in `fountainValleyLoopTrail` and `favoriteActivities`, you should return the following, because hiking has the highest preference level.
 
 ```js
[ 
 'The trail name: Fountain Valley Loop',
  'The trail location: Littleton, CO',
  'The trail distance:  2.3',
  'The trail traffic: moderate',
  'The trail features: hiking, bird watching, snowshoeing'
 ];
 ```
 
 **NOTE: What happens if my preference activities and the trail feautures don't match up 100%?**
 
 ## Level Three
 
 Refactor your function to remove activities that have a 0 `preferenceLevel`. Now when you pass in `fountainValleyLoopTrail` and `favoriteActivities`, you should return the following, because snowshoeing has a `preferenceLevel` of 0.
 
  ```js
[ 
   'The trail name: Fountain Valley Loop',
  'The trail location: Littleton, CO',
  'The trail distance:  2.3',
  'The trail traffic: moderate',
  'The trail features: hiking, bird watching'
 ];