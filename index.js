//WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests

// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown")


// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Project title?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Project Description?',
    },
    {
        type: 'input',
        name: 'github',
        message: 'Github username?',
    },
    {
        type: 'input',
        name: 'contact',
        message: 'What is your email address for any questions?',
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Contribution info?',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Installation instructions?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Usage info?',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose a license?',
        choices: [
            "mit",
            "afl-3.0",
            "apache-2.0",
            "artistic-2.0",
            "bsl-1.0",
            "bsd-2-clause",
            "bsd-3-clause",
            "bsd-3-clause-clear",
            "cc",
            "cc0-1.0",
            "cc-by-4.0",
            "cc-by-sa-4.0",
            "wtfpl",
            "ecl-2.0",
            "epl-1.0",
            "epl-2.0",
            "eupl-1.1",
            "agpl-3.0",
            "gpl",
            "gpl-2.0",
            "gpl-3.0",
            "lgpl",
            "lgpl-2.1",
            "lgpl-3.0",
            "isc",
            "lppl-1.3c",
            "ms-pl",
            "mpl-2.0",
            "osl-3.0",
            "postgresql",
            "ofl-1.1",
            "ncsa",
            "unlicense",
            "zlib"
        ]
    },
];




// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(fileName, data, (err) => {
        err ? console.log(err) : console.log("successful readme")
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then((answers) => {
            console.log(answers);
            return writeToFile("README.md", generateMarkdown(answers))
        })
}

// Function call to initialize app
init();

//what are the different types of prompt from iquirer