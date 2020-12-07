const inquirer = require("inquirer");
const fs = require('fs');
const util = require('util');
const generateMarkdown= require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?",
    },
    {
        type: "input",
        name: "decription",
        message: "Describe your project here:"
    }


];

// function to write README file
function generateReadme(fileName, data) {

    fs.writeFile(fileName, data, error => {
        if (error) throw error;

        console.log("GREAT SUCCESS!!!");
    
        
    });

}

// function to initialize program
function init() {
    inquirer.prompt(questions)

    .then(response => {
        console.log("Generating readme file...");

        console.log(response);

        generateReadme("readme.md", generateMarkdown(response));

    
    })
}

// function call to initialize program
init();


// const promptUser = () =>
//   inquirer.prompt([
//     {
//       type: 'input',
//       name: 'name',
//       message: 'What is your name?',
//     },
//     {
//       type: 'input',
//       name: 'location',
//       message: 'Where are you from?',
//     },
//     {
//       type: 'input',
//       name: 'hobby',
//       message: 'What is your favorite hobby?',
//     },
//     {
//       type: 'input',
//       name: 'food',
//       message: 'What is your favorite food?',
//     },
//     {
//       type: 'input',
//       name: 'github',
//       message: 'Enter your GitHub Username',
//     },
//     {
//       type: 'input',
//       name: 'linkedin',
//       message: 'Enter your LinkedIn URL.',
//     },
//   ]);