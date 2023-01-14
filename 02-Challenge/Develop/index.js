// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is your name?',
      name: 'name',
    },
    {
        type: 'checkbox',
        message: 'What is your preferred method of communication?',
        name: 'stack',
        choices: ['HTML', 'CSS', 'JavaScript', 'MySQL'],
    },
    {
      type: 'list',
      message: 'What is your preferred method of communication?',
      name: 'contact',
      choices: ['Phone', 'email', 'pidgeon', 'smoke signal'],
    },
  ])
// .then((data) => {
//     const filename = `${data.name.toLowerCase().split(' ').join('')}.json`;
//   fs.writeFile(filename, JSON.stringify(data, null, '\t'), (err) =>
//   err ? console.error(err) : console.log('Success!'));
// });

.then(answers => {
  let markdown = `
                  #${answers.name}
                  ## You are located in ${answers.location}
                  ## A little bit about me is: ${answers.bio}
                  ## You can contact me through LinkedIn at : ${answers.linkedIn}
                  ## Or check out my repo at : ${answers.GitHub}
         `;
  fs.writeFile('README.MD', markdown, (err) =>
  err ? console.error(err) : console.log('Success!')); 
});


// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
