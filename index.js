const inquirer = require("inquirer");
const fs = require('fs');
const util = require('util');
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?",
    },
    // Liscense badge solution on lines 35 to 38 taught to me by alejo-brand (https://github.com/alejo-brand)
    {
        type: 'list',
        name: 'license',
        message: 'What type of license does your project use?',
        choices:["MIT","Apache2.0","GPL3.0","BSD_3","None"]
    },
    {
        type: "input",
        name: "description",
        message: "What is your project description?"
    },
    {
        type: "input",
        name: "installation",
        message: "What are your project's installation instructions?"
    },
    {
        type: "input",
        name: "usage",
        message: "What are your products usage instructions?"
    },
    {
        type: 'input',
        name: 'licenseDescription',
        message: 'Do you have any additional license information to add? If not leave blank.'
    },
    {
        type: "input",
        name: "contributors",
        message: "Who contributed to the project (place github username in parenthesis following names)?"
    },
    {
        type: "input",
        name: "test",
        message: "What are your testing instructions for this project?"
    }
];

// function to write README file
function generateReadme(fileName, data) {

    fs.writeFile(fileName, data, function (error) {
        if (error) throw error;

        console.log("--------------------------------")
        console.log("That was easy...");
        console.log("--------------------------------")


    });
}

// function to initialize program
function init() {
    inquirer.prompt(questions)

        .then(response => {
            console.log("Generating readme file...");

            console.log(response);

            let data = { ...response }

            generateReadme("readme.md", generateMarkdown(data));


        })
}

// function call to initialize program
init();