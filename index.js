// Runs the application
const fs = require('fs');
const inquirer = require('inquirer');
const generateHTML = require("./src/render");
const Manager = require('./lib/Manager');
const Engineer =  require('./lib/Engineer');
const Intern = require('./lib/Intern');

const teamArray = [];
const promptManager = () => {
    return inquirer.prompt([
        {
            type:'input',
            name:'name',
            message:'Please enter the name of the employee',
            validate: inputName => {
                if (inputName) {
                    return true;
                } else {
                    console.log('No name is entered')
                    return false;
                }
            }
        },
        {
            type:'input',
            name:'id',
            message:'Please enter the id of the employee',
            validate: inputId => {
                if (inputId) {
                    return true;
                } else {
                    console.log('No id is entered')
                    return false;
                }
            }
        },
        {
            type:'input',
            name:'email',
            message:'Please enter the email of the employee',
            validate: inputEmail => {
                if (inputEmail) {
                    return true;
                } else {
                    console.log('No Email is entered')
                    return false;
                }
            }
        },
        {
            type:'input',
            name:'officeNumber',
            message:'Please enter the office number of the employee',
            validate: inputOfficeNumber => {
                if (inputOfficeNumber) {
                    return true;
                } else {
                    console.log('No office number is entered')
                    return false;
                }
            }
        },
    ]).then(answerArray => {
        console.log(answerArray);
        const manager = new Manager(answerArray.name, answerArray.id, answerArray.email, answerArray.officeNumber);
        teamArray.push(manager); 
    })
}

const promptOther = () => {
    return inquirer.prompt([
        {
            type:'list',
            name:'role',
            message:'What else role you want to add to your team?',
            choices:['Engineer','Intern','Nobody']
        }
    ]).then(selected => {
        if (selected.role == "Engineer") {
            promptEngineer();
        } if (selected.role = "Intern") {
            promptIntern();
        } else {
            completeTeam();
        }
    })
};

const promptEngineer = () => {
    console.log(`
    Adding an engineer
    `);

}

const promptIntern = () => {
    console.log(`
    Adding an intern
    `);
    
}

const completeTeam = () => {
    console.log(`
    Completing the construction of a team!
    `);
}

