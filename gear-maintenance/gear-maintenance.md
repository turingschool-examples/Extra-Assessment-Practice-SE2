# Gear Maintenance

Once students encounter Object.keys() they often panic and assume they need to use it anytime their dataset is an object. These practice prompts will help you practice manipulating the universities data set object with and _without_ needing to reach for Object.keys().

Note: you will not need Object.keys() for midmods or final assessments.

``` js
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
```

## Level One

Write a function that will return an array of all items that are in bad condition. 

```js
['sleeping bag', 'climbing shoes', 'dry bag' ]
```

## Level Two

Refactor your function so that we can keep track of which activity the bad condition item is associated with.

```js
[
  { camping: 'sleeping bag' },
  { climbing: 'climbing shoes' },
  { kayaking: 'dry bag' }
]
```

## Level Three

Refactor your function so that the gear is organized by condition.
```js
{
  good: [
    { item: 'tent', activity: 'camping' },
    { item: 'harness', activity: 'climbing' }
  ],
  bad: [
    { item: 'sleeping bag', activity: 'camping' },
    { item: 'climbing shoes', activity: 'climbing' },
    { item: 'dry bag', activity: 'kayaking' }
  ],
  excellent: [
    { item: 'flashlight', activity: 'camping' },
    { item: 'life jacket', activity: 'kayaking' }
  ],
  okay: [ { item: 'kayak', activity: 'kayaking' } ]
}
```