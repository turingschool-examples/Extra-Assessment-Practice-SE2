# Road Trip

```js
const roadTripStops = [
  {
    location: "Las Vegas, NV",
    milesFromDenver: 720,
    drivingTimeInHours: 5.5
  },
  {
    location: "San Franciso, CA",
    milesFromDenver: 1249,
    drivingTimeInHours: 6
    
  },
  {
    location: "Salt Lake City, UT",
    milesFromDenver: 520,
    drivingTimeInHours: 8
  },
  {
    location: "Los Angeles, CA",
    milesFromDenver: 1020,
    drivingTimeInHours: 4
  }
];
```

## Level One

We need to find out where to start our road trip! Write a function that returns the city closest to Denver. 

```js
"Salt Lake City, UT"
```

## Level Two
Let's make an itinerary! Refactor your function to order your road trip stops from closest to furthest. 

```js
{
  'Stop 1': 'Salt Lake City, UT',
  'Stop 2': 'Las Vegas, NV',
  'Stop 3': 'Los Angeles, CA',
  'Stop 4': 'San Franciso, CA'
},
````

## Level Three
We need to figure out how long this trip is going to take! Refactor your function to include the total driving time. Note: Since we need to get back to Denver, you'll calculate this as a round trip. 

```js
{
  itinerary: {
    'Stop 1': 'Salt Lake City, UT',
    'Stop 2': 'Las Vegas, NV',
    'Stop 3': 'Los Angeles, CA',
    'Stop 4': 'San Franciso, CA'
  },
  totalDrivingTime: '47 hours'
}
```