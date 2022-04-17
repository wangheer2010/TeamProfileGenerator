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
            message:'Please enter the name of the manager',
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
            message:'Please enter the id of the manager',
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
            message:'Please enter the email of the manager',
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
            message:'Please enter the office number of the manager',
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
        promptElse();
    })
}

const promptElse = () => {
    return inquirer.prompt([
        {
            type:'list',
            name:'otherMember',
            message:'Do you have other people on your team?',
            choices:['Yes','No']
        }
    ]).then(selected => {
        if (selected.otherMember == "Yes") {
            promptOther();
        } else {
            completeTeam();
        }
    })
};
const promptOther = () => {
    return inquirer.prompt([
        {
            type:'list',
            name:'role',
            message:'What else role you want to add to your team?',
            choices:['Engineer','Intern']
        }
    ]).then(selected => {
        if (selected.role == "Engineer") {
            promptEngineer();
        } else if (selected.role == "Intern") {
            promptIntern();
        }
    })
};

const promptEngineer = () => {
    console.log(`
    Adding an engineer
    `);
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
            name:'gitHub',
            message:'Please enter the gitHub of the employee',
            validate: gitHub => {
                if (gitHub) {
                    return true;
                } else {
                    console.log('No gitHub is entered')
                    return false;
                }
            }
        },
    ]).then(answerArray => {
        console.log(answerArray);
        const engineer = new Engineer(answerArray.name, answerArray.id, answerArray.email, answerArray.gitHub);
        teamArray.push(engineer); 
        promptElse();
    })

}

const promptIntern = () => {
    console.log(`
    Adding an intern
    `);
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
            name:'school',
            message:'Please enter the school of the employee',
            validate: school => {
                if (school) {
                    return true;
                } else {
                    console.log('No school is entered')
                    return false;
                }
            }
        },
    ]).then(answerArray => {
        console.log(answerArray);
        const intern = new Intern(answerArray.name, answerArray.id, answerArray.email, answerArray.school);
        teamArray.push(intern); 
        promptElse();
    })
    
}

const completeTeam = () => {
    console.log(`
    Completing the construction of a team!
    `);
    fs.writeFileSync('./dist/index.html', generateHTML(teamArray),'utf-8');
}

promptManager();

