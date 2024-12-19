// TODO: Include packages needed for this application
import inquirer from "inquirer";
import fs from 'fs';
import generateMarkdown from "./utils/generateMarkdown.js";

// TODO: Create an array of questions for user input
const questions = [
    {
        name: 'title',
        type: 'input',
        message: 'What is your project\'s title?'
    },
    {
        name: 'description',
        type: 'input',
        message: 'Enter your project description.'
    },
    {
        name: 'install',
        type: 'input',
        message: 'What are the installation instructions?'
    },
    {
        name: 'usage',
        type: 'input',
        message: 'Enter the project\'s usage information.'
    },
    {
        name: 'contribution',
        type: 'input',
        message: 'Enter the project\'s contribution guidelines.'
    },
    {
        name: 'testInstruction',
        type: 'input',
        message: 'Enter the project\'s test instructions.'
    },
    {
        name: 'license',
        type: 'list',
        message: 'Choose a license for the application.',
        choices: ['Apache License 2.0', 'MIT License', 'Mozilla Public License 2.0', 'The Unlicense']
    },
    {
        name: 'github',
        type: 'input',
        message: 'What is your GitHub username?'
    },
    {
        name: 'email',
        type: 'input',
        message: 'What is your email address?'
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

    fs.mkdir("./output", { recursive: true }, (err) => console.log(err));

    fs.writeFile(fileName, data, (err) =>
        err ? console.log(err) : console.log(`Successfully created professional README.md file for your project!`))
};

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((responses) => {
            const markdownData = generateMarkdown(responses);
            writeToFile('./output/README.md', markdownData);
        })
        .catch((error) => console.log(error));
};

// Function call to initialize app
init();
