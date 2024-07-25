//Use this file to write your js code to solve the prompts in the tasks.md file.

//In your terminal, run: node tasks/tasks.js
console.log('tasks.js is running!')

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


// Level One 
// getAverageTime() 
    // expected result -->  'The average time for all tasks is 100 minutes.'





// Level Two
// getTasksByPerson('Leta') 
    // expected result --> ['write README', 'refactor']
// getTasksByPerson('Travis') 
    // expected result --> ['debug issue #14']





// Level Three
// getStatusTimes() 
  // expected results --> 
    // {
    //   complete: 200,
    //   inProgress: 30,
    //   inTriage: 170
    // }