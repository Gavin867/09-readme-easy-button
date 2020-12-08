const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const generateMarkdown = require("./generateMarkdown");

// array of questions for user
const readmeInformation = [
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?",
    },
    {
        type: "list",
        name: "license",
        message: "What type of license does your project use?",
        choices:["MIT","Apache2.0","GPL3.0","BSD_3","None"]
    },
    {
        type: "input",
        name: "year",
        message: "What is your project's copyright year?"
    },
    {
        type: "input",
        name: "description",
        message: "What is your project description?"
    },
    {
        type: "input",
        name: "demo",
        message: "Copy the link to your demo file and paste by right clicking here:"
    },
    {
        type: "input",
        name: "installation",
        message: "What are your project's installation instructions?"
    },
    {
        type: "input",
        name: "usage",
        message: "What are your product's usage instructions?"
    },
    {
        type: "input",
        name: "test",
        message: "What are your testing instructions for this project?"
    },
    {
        type: "input",
        name: "contributors",
        message: "Who contributed to the project? Place github username in parenthesis following names:"
    },
    {
        type: "input",
        name: "resources",
        message: "What sources and webpages did you reference to build your project?"
    },
    {
        type: "input",
        name: "name",
        message: "What is your name?"
    },
    {
        type: "input",
        name: "username",
        message: "What is your github username (input is case sensitive)?"
    },
    {
        type: "input",
        name: "email",
        message: "What is a good email for users to reach you with questions?",
    },
];

// function to write README file
function generateReadme(fileName, data) {

    fs.writeFile(fileName, data, function (error) {

        if (error) throw error;

        console.log("Well that was easy!");
    });
}

// function to initialize program
function init() {
    inquirer.prompt(readmeInformation)

        .then(response => {

            console.log("Generating readme file...");

            console.log(response);

            let data = { ...response }

            generateReadme("readme.md", generateMarkdown(data));
        })
}

// function call to initialize program
init();