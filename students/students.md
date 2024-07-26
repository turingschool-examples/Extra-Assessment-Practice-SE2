# Students

```js
  const students = [
    {
      "name": "John",
      "enrolled": true,
      "grades": [85, 92, 78, 90]
    },
    {
      "name": "Alice",
      "enrolled": false,
      "grades": [76, 89, 94, 81]
    },
    {
      "name": "Bob",
      "enrolled": true,
      "grades": [88, 73, 90, 87]
    },
    {
      "name": "Eve",
      "enrolled": true,
      "grades": [92, 91, 89, 95]
    }
  ]
```

## Level One
Write a function that finds all students that are enrolled.

```js
findEnrolledStudents() // expected result ==> ["John", "Bob", "Eve"]

```

## Level Two
Write a function that takes in a student's name and returns that student's average grade.

```js
getAverageGrade("John") // ==> 86.25
```

## Level Three
Write a function that finds the name of the student with the highest average grade.

```js
findBestAverageGrade() // ==> "Eve"
```
