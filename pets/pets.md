# Pets

```js
  const pets = {
    Buddy: {
      "species": "Dog",
      "age": 3,
      "favoriteToys": ["Tennis Ball", "Frisbee", "Stuffed Ladybug"]
    },
    Whiskers: {
      "species": "Cat",
      "age": 2,
      "favoriteToys": ["Feather Wand", "Toy Mice"]
    },
    Rocky: {
      "species": "Turtle",
      "age": 5,
      "favoriteToys": ["Coral Reef"]
    },
    Kiwi: {
      "species": "Parrot",
      "age": 1,
      "favoriteToys": ["Wooden Perch", "Colorful Rings"]
    }
  }
```

## Level One
Write a function that takes in a pet's name and returns it's species.  

```js
findSpecies('Kiwi') // expected result ==> 'Kiwi is a Parrot.'
```

## Level Two
Write a function that creates a list of all of the pets' favorite toys.

```js
listAllToys() 
    // ==> ["Tennis Ball", "Frisbee", "Stuffed Ladybug", "Feather Wand", "Toy Mice", "Coral Reef", "Wooden Perch", "Colorful Rings"] 
```

## Level Three
Write a function that finds all pets who have at least 2 favorite toys.
```js
findPetsWhoLoveToys()// ==> ["Buddy", "Whiskers", "Kiwi"]
```
