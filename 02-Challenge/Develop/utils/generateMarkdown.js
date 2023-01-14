// TODO: Create a function that returns a license badge based on which license is passed in



// If there is no license, return an empty string
function renderLicenseBadge(license) {
  const badges = {
    MIT: `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]`,
    GNU: `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)`,
    Apache: `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]`,
    ISC: `[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)]`,
  }
  return badges[license]
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  const licenseLinks= {
    MIT: `https://choosealicense.com/licenses/mit/`,
    GNU: `https://choosealicense.com/licenses/gpl-3.0/`,
    Apache: `https://choosealicense.com/licenses/apache-2.0/`,
    ISC: `https://choosealicense.com/licenses/isc/`,
  }
  return licenseLinks[license]
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license) {
    return `Licensed under the ${renderLicenseLink(license)} license`
  } else {
    return ``
  }
  }


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  ${renderLicenseBadge(data.license)}
  # ${data.title}
  
  ## Table of Contents
  - [Description](#description)
  - [Install](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [License](#license)
  - [[Questions](#questions)

  ## Description
  ${data.description}

  ## Installation
  ${data.install}
  
  ## Usage
  ${data.usage}
  
  ## Contributing
  ${data.contribute}
  
  ## Tests
  ${data.test}
  
  ## License
  ${renderLicenseSection(data.license)}
  
  ## Questions
  ${data.github}
  ${data.link}
  ${data.email}
  
  `;
};
 

module.exports = generateMarkdown;
