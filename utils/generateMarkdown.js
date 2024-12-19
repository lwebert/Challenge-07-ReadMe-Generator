// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

  if (license === "Apache License 2.0") {
    let badge = "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
    return badge
  }
  else if (license === "MIT License") {
    let badge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
    return badge
  }
  else if (license === 'Mozilla Public License 2.0') {
    let badge = "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)"
    return badge
  }
  else if (license === 'The Unlicense') {
    let badge = "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)"
    return badge
  }
  //if no license
  else if (license === "") {
    return ""
  }
}

// choices: ['Apache License 2.0', 'MIT License', 'Mozilla Public License 2.0', 'The Unlicense']

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "Apache License 2.0") {
    let link = "https://www.apache.org/licenses/LICENSE-2.0.txt";
    return link
  }
  else if (license === "MIT License") {
    let link = "https://mit-license.org/";
    return link
  }
  else if (license === 'Mozilla Public License 2.0') {
    let link = "https://www.mozilla.org/en-US/MPL/2.0/";
    return link
  }
  else if (license === 'The Unlicense') {
    let link = "https://unlicense.org";
    return link
  }
  //if no license
  else if (license === "") {
    return ""
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

  let licenseLink = renderLicenseLink(license);
  let licenseName = license;

  return `The application is covered under [${licenseName}](${licenseLink}).   
${licenseLink}
`
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

  return `# ${data.title}

${renderLicenseBadge(data.license)}

## Description
${data.description}

## Table of Contents
1. [Installation](#installation)
2. [Usage](#usage)
3. [Contributing](#contributing)
4. [Tests](#tests)
5. [License](#license)
6. [Questions](#questions)


## Installation
${data.install}

## Usage
${data.usage}

## Contributing
${data.contribution}

## Tests
${data.testInstruction}

## License
${renderLicenseSection(data.license)}

## Questions
- [GitHub](${data.github})
- Reach me at [${data.email}](${data.email}) with additional questions.

`;
}

export default generateMarkdown;
// ${licenseBadge} \n
// The application is covered under [${data.license}](${licenseLink}). \n
// ${licenseLink}