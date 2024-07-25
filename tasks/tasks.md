# Tasks

```js
const tasks = [
  {
    taskName: 'write README',
    assignedTo: 'Leta',
    minutesNeeded: 30,
    status: 'inProgress'
  },
  {
    taskName: 'debug issue #14',
    assignedTo: 'Travis',
    minutesNeeded: 120,
    status: 'complete'
  },
  {
    taskName: 'add feature #37',
    assignedTo: null,
    minutesNeeded: 170,
    status: 'inTriage'
  },
  {
    taskName: 'refactor',
    assignedTo: 'Leta',
    minutesNeeded: 80,
    status: 'complete'
  },
];
```

## Level One
Write a function that determines the average time for all tasks


```js
getAverageTime() 
// --> 'The average time for all tasks is 100 minutes.'
```

## Level Two
Write a function that takes in a parameter of a person's name and outputs a list of their assigned tasks

```js
getTasksByPerson('Leta') 
// --> ['write README', 'refactor']

getTasksByPerson('Travis') 
// --> ['debug issue #14']
````

## Level Three
Write a function that shows the total minutes for each status

```js
getStatusTimes() 
// --> 
// {
//   complete: 200,
//   inProgress: 30,
//   inTriage: 170,
// }
```