// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// module.exports = generateMarkdown;

// const generateMarkdown = require('./utils/generateMarkdown.js');

inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is your Project called?',
      name: 'name',
    },
    {
        type: 'checkbox',
        message: 'What is your pdeveloper tool?',
        name: 'stack',
        choices: ['HTML', 'CSS', 'JavaScript', 'MySQL'],
    },
    {
      type: 'list',
      message: 'What license did you use?',
      name: 'license',
      choices: ['MIT', 'email', 'pidgeon', 'smoke signal'],
    },

  ])

.then(answers => {

  const marked = require(`marked`);
  marked.setOptions({
    gfm: true,
    breaks: true,
  });
  let markdown = 
  `# ${answers.name}
  ##  My preferred developer tool is ${answers.stack}
  ## If you need to reach me, ${answers.license} is best.
  ## You can contact me through LinkedIn at : ${answers.linkedIn}
  ## Or check out my repo at : ${answers.GitHub}`;
  
         
  fs.writeFile('README.md', markdown, (err) =>
  err ? console.error(err) : console.log('Success!')); 
});



// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
