// Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const generateMarkdown = require("./utils/generateMarkdown.js");


// Create an array of questions for user input
const questions = [

    {
        type: 'input',
        default: 'Project Title',
        message: 'What is the name of your project?',
        name: 'title'
    },
    {
        type: 'input',
        message: 'Please briefly describe your project.',
        name: 'description'
    },
    {
        type: 'input',
        message: 'Please describe the installation process if any.',
        name: 'installation'
    },
    {
        type: 'input',
        message: 'What is this project usage for?',
        name: 'usage'
    },
    {
        type: 'input',
        message: 'Who contributed to this project?',
        name: 'contributors'
    },
    {
        type: 'input',
        message: 'Were there any tests included?',
        name: 'tests'
    },
    {
        type: "list",
        message: "Choose the appropriate license for this project: ",
        name: "license",
        choices: [
            "Apache",
            "Academic",
            "GNU",
            "ISC",
            "MIT",
            "Mozilla",
            "Open",
            "None"
        ]
    },
    {
        type: "list",
        message: "Select a color for your license badge:",
        name: "badgeColor",
        choices: [
            "brightgreen", 
            "yellow", 
            "red", 
            "blue", 
            "orange", 
            "lightgray", 
            "blueviolet"
        ],
        when: answers => answers.license !== "None"
    },
    {
        type: 'checkbox',
        message: "Select all technologies used in building the application:",
        name: 'technologies',
        choices: [
            "HTML", 
            "CSS", 
            "Bootstrap 4", 
            "JavaScript", 
            "jQuery", 
            "React.js", 
            "Node.js", 
            "Express", 
            "MySQL", 
            "MongoDb"
        ]
      },
    {
        type: 'input',
        message: 'Please enter your Github username: ',
        name: 'username'
    },
    {
        type: 'input',
        message: 'Please enter your email address: ',
        name: 'email'
    },
    {
        type: 'input',
        message: 'Please input the file path to your live demo.',
        name: 'demo'
    },
];

// Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if(err) {
            return console.log(err);
        }
        console.log("Success! The README.md file was generated!");
    }
)};

const writeFileAsync = util.promisify(writeToFile);

// Create a function to initialize app
async function init() {
    try {
        const answers = await inquirer.prompt(questions);
        const markdown = generateMarkdown(answers);
        console.log(markdown);

        await writeFileAsync('README.md', markdown);
    } catch (error) {
        console.log(error);
    }
};

// Function call to initialize app
init();