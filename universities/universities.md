# Universities

Once students encounter Object.keys() they often panic and assume they need to use it anytime their dataset is an object. These practice prompts will help you practice manipulating the universities data set object with and _without_ needing to reach for Object.keys().

Note: you will not need Object.keys() for midmods or final assessments.


```js
const universities = {
  osu: {
    name: 'Ohio State University',
    location: 'Columbus, Ohio',
    majors: ['business', 'biology', 'psychology', 'marketing', 'computer science'],
    graduationRate: 0.82,
    enrollment: 61369
  },
  csu: {
    name: 'Colorado State University',
    location: 'Fort Collins, Colorado',
    majors: ['business', 'human development', 'psychology', 'kinesiology', 'mechanical engineering'],
    graduationRate: 0.71,
    enrollment: 33413
  },
  ucsb: {
    name: 'University of California, Santa Barbara',
    location: 'Santa Barbara, California',
    majors: ['sociology', 'business', 'communication', 'psycology', 'biology'],
    graduationRate: 0.85,
    enrollment: 24346
  }
};

```

## Level One
Write a function that finds the total enrollment for ALL students in ALL unversities  
(Hint: You DO need Object.keys() for this one - why??)


```js
findTotalEnrollment() 
// -->  119,128
```

## Level Two
Write a function that takes a parameter of a school code and returns that school's enrollment  
(Hint: You DO NOT need Object.keys() for this one - why??)

```js
findSchoolEnrollment('osu')
// 'Ohio State University has 61369 students.'

findSchoolEnrollment('ucsb')
// 'University of California, Santa Barbara has 24346 students.'
```

## Level Three
Write a function that takes a parameter of major and returns a list of school names that have that major


```js
findSchoolByMajor('biology') 
// -->  ['Ohio State University', 'University of California, Santa Barbara']

findSchoolByMajor('business') 
// -->  ['Ohio State University', 'Colorado State University', 'University of California, Santa Barbara']
```

## Level Four (🌶)
Write a function that takes a parameter of 'enrollment' or 'graduationRate' and returns the name of the school with the highest value in the given category

```js
findHighestByCategory('enrollment') 
// --> 'Ohio State University'

findHighestByCategory('graduationRate') 
// --> 'University of California, Santa Barbara'
```