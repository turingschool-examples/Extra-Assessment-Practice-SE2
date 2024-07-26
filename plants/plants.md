# Plants

```js
  const coloradoPlants = [
    {
      name: "Colorado Blue Columbine",
      scientificName: "Aquilegia caerulea",
      bloomingSeason: "Spring to Early Summer",
      habitat: "meadows",
      height: 12,
    },
    {
      name: "Aspen Tree",
      scientificName: "Populus tremuloides",
      bloomingSeason: "Spring",
      habitat: "forests",
      height: 100,
    },
    {
      name: "Columbian Lily",
      scientificName: "Lilium columbianum",
      bloomingSeason: "Late Spring to Early Summer",
      habitat: "moutains",
      height: 24,
    },
    {
      name: "Rocky Mountain Bristlecone Pine",
      scientificName: "Pinus aristata",
      bloomingSeason: "Spring",
      habitat: "mountains",
      height: 120,
    },
    {
      name: "Alpine Forget-Me-Not",
      scientificName: "Myosotis alpestris",
      bloomingSeason: "Summer",
      habitat: "meadows",
      height: 6,
    },
    {
      name: "Indian Paintbrush",
      scientificName: "Castilleja spp.",
      bloomingSeason: "Spring to Summer",
      habitat: "grasslands",
      height: 18,
    },
    {
      name: "Engelmann Spruce",
      scientificName: "Picea engelmannii",
      bloomingSeason: "Spring",
      habitat: "forests",
      height: 180,
    },
    {
      name: "Fireweed",
      scientificName: "Chamerion angustifolium",
      bloomingSeason: "Summer",
      habitat: "meadows",
      height: 36,
    },
    {
      name: "Blue Spruce",
      scientificName: "Picea pungens",
      bloomingSeason: "Spring",
      habitat: "forests",
      height: 72,
    },
    {
      name: "Scarlet Gilia",
      scientificName: "Ipomopsis aggregata",
      bloomingSeason: "Late Spring to Summer",
      habitat: "mountains",
      height: 24,
    },
  ];
```

## Level One
Write a function that finds how many plants have a blooming season any time in the spring.

```js
findSpringPlants() // expected result ==> 8

```

## Level Two
Write a function that finds the average height of all plants.

```js
findAverageHeight() // expected result ==> 59.2
```

## Level Three
Write a function that sorts the list based on height and lists only scientific names and height.

```js
sortByHeight() // expected result ==> 
    // [
    //   { scientificName: 'Myosotis alpestris', height: 6 },
    //   { scientificName: 'Aquilegia caerulea', height: 12 },
    //   { scientificName: 'Castilleja spp.', height: 18 },
    //   { scientificName: 'Lilium columbianum', height: 24 },
    //   { scientificName: 'Ipomopsis aggregata', height: 24 },
    //   { scientificName: 'Chamerion angustifolium', height: 36 },
    //   { scientificName: 'Picea pungens', height: 72 },
    //   { scientificName: 'Populus tremuloides', height: 100 },
    //   { scientificName: 'Pinus aristata', height: 120 },
    //   { scientificName: 'Picea engelmannii', height: 180 }
    // ]
```


## Level Found
Write a function that creates an object that organizes the plants by habitat.

```js
organizeByHabitat() // expected result ==> 
    // {
    //   meadows: [ 'Colorado Blue Columbine', 'Alpine Forget-Me-Not', 'Fireweed' ],
    //   forests: [ 'Aspen Tree', 'Engelmann Spruce', 'Blue Spruce' ],
    //   moutains: [ 'Columbian Lily' ],
    //   mountains: [ 'Rocky Mountain Bristlecone Pine', 'Scarlet Gilia' ],
    //   grasslands: [ 'Indian Paintbrush' ]
    // }
    
```
