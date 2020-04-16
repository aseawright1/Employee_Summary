const inquirer = require('inquirer');
const fs = require('fs');
// const Employee = require('./lib/employee')
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const Manager = require('./lib/manager');
const constructHTML = require('./templates/mainHTML');
const engineerHTML = require('./templates/engineerHTML');
const internHTML = require('./templates/internHTML');
const managerHTML = require('./templates/managerHTML');

function generateFullHTML(employees) {
    let layout = ''
    employees.forEach((newEmp) => {
        // switch between roles
        switch (newEmp.role) {
            case 'Engineer':
                const newEng = new Engineer(newEmp.name, newEmp.id, newEmp.email, newEmp.roleResponse);
                layout = layout + engineerHTML.generateHTML(newEng);
                break;
            case 'Intern':
                const newInt = new Intern(newEmp.name, newEmp.id, newEmp.email, newEmp.roleResponse);
                layout = layout + internHTML.generateHTML(newInt);
                break;
            case 'Manager':
                const newMan = new Manager(newEmp.name, newEmp.id, newEmp.email, newEmp.roleResponse);
                layout = layout + managerHTML.generateHTML(newMan);
                break;
        }
    });
    return layout;
}


// recursive inquirer to continue prompting user after selection
inquirer.registerPrompt('recursive', require('inquirer-recursive'))

inquirer.prompt([{
    // general questions
    type: 'recursive',
    message: 'Add a new team member?',
    name: 'employees',
    prompts: [{
            type: 'list',
            message: 'New member job title:',
            name: 'role',
            choices: ['Manager', 'Engineer', 'Intern']
        },
        {
            name: 'name',
            message: 'New member\'s name:'
        },
        {
            name: 'id',
            message: 'New member\'s ID number:'
        },
        {
            name: 'email',
            message: 'New member\'s email address:',
        },
        // role-specific follow-up questions
        {
            when(response) {
                if (response.role === 'Manager') {
                    return true
                } else { return false }
            },
            name: 'roleResponse',
            message: 'Office number:'
        },
        {
            when(response) {
                if (response.role === 'Engineer') {
                    return true
                } else { return false }
            },
            name: 'roleResponse',
            message: 'Github username:'
        },
        {
            when(response) {
                if (response.role === 'Intern') {
                    return true
                } else { return false }
            },
            name: 'roleResponse',
            message: 'School name:'

        }
    ]
}]).then((users) => {
    let layout = generateFullHTML(users.employees);
    layout = constructHTML.generateHTML(layout);
    fs.writeFile('./output/YourTeam.html', layout, (err) => {
        if (err) { return console.log(err) }
        console.log('File created')
    })
})