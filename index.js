const inquirer = require('inquirer');
const generateHTML = require('./js/generateHTML');
const fs = require('fs')
const Employee = require('./modals/Employee')
const Engineer = require('./modals/Engineer')
const Intern = require('./modals/Intern')
const Manager = require('./modals/Manager')

const employees = []
const arrayHTML = []

// Create an array of questions for user input
function managerQuestions() {
    menuPrompt();
    inquirer
    .prompt([
    {
    type: 'input', 
    name: 'title',
    message: "What is your name?",
 },
 {
    type: 'input', 
    name: 'employeeID',
    message: "What is your Employee ID?",
 }, 
 {
    type: 'input', 
    name: 'officeNumber',
    message: "What is your office number?",
 },
 {
    type: 'input', 
    name: 'email',
    message: "What is your email?",
 }
]).then((answers) => {
    const {title, employeeID, officeNumber, email} = answers
    const manager = new Manager(title, employeeID, officeNumber, email);

    employees.push(manager)
    menuPrompt();
})};

function addEngineer() {
    inquirer.prompt([
    {
        type: 'input', 
        name: 'title',
        message: "What is your name?",
     },
     {
        type: 'input', 
        name: 'employeeID',
        message: "What is your Employee ID?",
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
        const {title, employeeID, githubUsername, email} = answers
        const engineer = new Engineer(title, employeeID, githubUsername, email);
    
        employees.push(engineer)
        menuPrompt();
    })};
    
    function addIntern() {
        inquirer.prompt([
        {
            type: 'input', 
            name: 'title',
            message: "What is your name?",
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
            name: 'email',
            message: "What is your email?",
         }
        ]).then((answers) => {
            const {title, employeeID, education, email} = answers
            const intern = new Intern(title, employeeID, education, email);
        
            employees.push(intern)
        })};
    

// console.log(questions)


function menuPrompt() {
    inquirer.prompt([
        {
        type: 'list',
        name: 'menu',
        message: 'What would you like to do?',
        choices: [' Add Manager',  ' Add Engineer', ' Add Intern', ' Finish']
        }
    ])
    .then((answers) => {
        if(answers.menu === 'Add Engineer') {
            addEngineer()
        } else if (answers.menu === 'Add Manager') {
            managerQuestions()
        } else if (answers.menu === 'Add Intern') {
            addIntern()
        } else if (answers.menu === 'Finish') {
            finishTeam()
        }
    }
)}

function finishTeam() {
    console.log(employees)
}   

function init() {
    fs.writeFileSync('index.html', generateHTML(employees), (error) => {
        return error
            ? console.error(error)
            : console.log("File written successfully");
        }
)}

    

// Function call to initialize app
managerQuestions();


