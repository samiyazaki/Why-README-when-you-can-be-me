const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const generateMarkdown = require('./utils/generateMarkdown.js');

const questions = [
  {
    type: "input",
    message: "What is your Project called?",
    name: "title",
  },
  {
    type: "input",
    message: "Write a short description of your project.",
    name: "description",
  },
  {
    type: "input",
    message: "What do you need to install for your project to work?",
    name: "install",
  },
  {
    type: "input",
    message: "How is your project utilized?",
    name: "usage",
  },
  {
    type: "input",
    message: "How can users contribute to your project?",
    name: "contribute",
  },
  {
    type: "input",
    message: "How should users submit issues or test your project?",
    name: "test",
  },
  {
    type: "checkbox",
    message: "Which license did you use?",
    name: "license",
    choices: ["MIT", "Apache", "BNU", "ISC"],
  },
  {
    type: "input",
    message: "What is your GitHub username?",
    name: "github",
  },
  {
    type: "input",
    message: "What is your Email Address?",
    name: "email",
  },
];

function init() {
  return inquirer.prompt(questions).then((data) => {
    const markdown = generateMarkdown(data)
    fs.writeFile("README.md", markdown, function (err) {
      if (err) {
        console.error('error', err);
      } else {
        console.log('Success!')
      }
    })
  })
  .catch((error) => {
    console.log(error)
  })
}

// Function call to initialize app
init();
