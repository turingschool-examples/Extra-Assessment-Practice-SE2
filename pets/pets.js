//Use this file to write your js code to solve the prompts in the pets.md file.

//In your terminal, run: node pets/pets.js
console.log('pets.js is running!')

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

// Level One 
// findSpecies('Kiwi') 
    // expected result ==> 'Kiwi is a Parrot.'



// Level Two
// listAllToys() 
    // expected result ==> 
      // ["Tennis Ball", "Frisbee", "Stuffed Ladybug", "Feather Wand", "Toy Mice", "Coral Reef", "Wooden Perch", "Colorful Rings"] 



// Level Three
// findPetsWhoLoveToys()
    // expected result ==> ["Buddy", "Whiskers", "Kiwi"]
