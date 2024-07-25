//Use this file to write your js code to solve the prompts in the universities.md file.

//In your terminal, run: node universities/universities.js
console.log('universities.js is running!')

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


// Level One 
// findTotalEnrollment() 
    // expected result -->  119,128





// Level Two
// findSchoolEnrollment('osu')
    // expected result --> 'Ohio State University has 61369 students.'
// findSchoolEnrollment('ucsb')
    // expected result --> 'University of California, Santa Barbara has 24346 students.'





// Level Three
// findSchoolByMajor('biology') 
    // expected result --> 
      //['Ohio State University', 'University of California, Santa Barbara']
// findSchoolByMajor('business') 
    // expected result --> 
      //['Ohio State University', 'Colorado State University', 'University of California, Santa Barbara']





// Level Four
// findHighestByCategory('enrollment') 
    // --> 'Ohio State University'
// findHighestByCategory('graduationRate') 
    // --> 'University of California, Santa Barbara'