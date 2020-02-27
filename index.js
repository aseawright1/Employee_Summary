const inquirer = require('inquirer');
const fs = require('fs');
const engineer = require('./lib/engineer');
const intern = require('./lib/intern');
const manager = require('./lib/manager');

inquirer.registerPrompt('recursive', require('inquirer-recursive'))

inquirer.prompt([{
    type: 'recursive',
    message: 'Add a new team member?',
    name: 'users',
    prompts: [{
            type: 'list',
            message: 'New member job title:',
            name: 'role',
            choices: ['Manager', 'Engineer', 'Intern']
        },
        {
            type: 'input',
            name: 'name',
            message: 'New member\'s name:'
                //insert test for name is required
        },
        {
            type: 'input',
            name: 'id',
            message: 'New member\'s ID number:'
                //insert test for invalid ID
        },
        {
            type: 'input',
            name: 'email',
            message: 'New member\'s email address:',
            //insert test for email is required
        },
        {

        }
    ]
}])