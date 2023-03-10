const inquirer = require('inquirer');
const fs = require('fs')
const Employee = require('./modals/Employee')
const Engineer = require('./modals/Engineer')
const Intern = require('./modals/Intern')
const Manager = require('./modals/Manager')

const employees = []

// Create an array of questions for user input
function init() {
    inquirer
    .prompt([
    {
    type: 'input', 
    name: 'title',
    message: "What is your name?",
 },
 {
    type: "checkbox",
    name: "jobTitle",
    message: "What job title?",
    choices: [" Manager", " Engineer", " Intern", " Employee"],
 },
 {
    type: 'input', 
    name: 'employeeID',
    message: "What is your Employee ID?",
 }, 
 {
    type: 'input', 
    name: 'education',
    message: "What is the University you attended?",
 }, 
 {
    type: 'input', 
    name: 'githubUsername',
    message: "What is your github username?",
 },
 {
    type: 'input', 
    name: 'email',
    message: "What is your email?",
 }

]).then((answers) => {
    const {title, jobTitle, employeeID, education, githubUsername, email} = answers
    const manager = new Manager(title, jobTitle, employeeID, education, githubUsername, email);

    employees.push(manager)
    menuPrompt()
})
};

// Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile("myReadMe.md", data, (error) => {
        return error
            ? console.error(error)
            : console.log("File written successfully");
        });
    }


// Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((inquirerRes) => {
        console.log('Generating readme file')
        writeToFile('README.md', generateMarkdown({...inquirerRes}))
    })
}

function menuPrompt() {
inquirer.prompt([
    {
        type: 'list',
        name: 'menu',
        message: 'What would you like to do?',
        choices: ['Add Engineer', 'Add Intern', 'Finish']
    }

]).then((answers) => {
    if(answers.menu === 'Add Engineer') {
        addEngineer()
    } else if (answers.menu === 'Add Intern') {
        addIntern()
    } else {
        finish()

    }
})}

// Function call to initialize app
init();
