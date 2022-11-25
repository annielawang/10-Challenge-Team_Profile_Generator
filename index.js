// modules used in the file
const inquirer = require("inquirer");
const fs = require("fs");
const renderHtmlObj = require("./src/render_html_template");
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");

const htmlObj = {};
var engineers = [];
var interns = [];

// question arrays used in the inquirer prompt
const questionsForManager = [
    {
        type: "input",
        message: "Please enter team manager's name.",
        name: "manager_name",
    },
    {
        type: "input",
        message: "Please enter team manager's employee ID.",
        name: "manager_ID",
    },
    {
        type: "input",
        message: "Please enter team manager's email address.",
        name: "manager_email",
    },
    {
        type: "input",
        message: "Please enter team manager's office number.",
        name: "manager_office_number",
    }
];

const questionsForEngineer = [
    {
        type: "input",
        message: "Please enter engineer's name.",
        name: "eng_name",
    },
    {
        type: "input",
        message: "Please enter engineer's employee ID.",
        name: "eng_ID",
    },
    {
        type: "input",
        message: "Please enter engineer's email address.",
        name: "eng_email",
    },
    {
        type: "input",
        message: "Please enter engineer's Github username.",
        name: "eng_github_username",
    }
];

const questionsForIntern = [
    {
        type: "input",
        message: "Please enter intern's name.",
        name: "intern_name",
    },
    {
        type: "input",
        message: "Please enter intern's employee ID.",
        name: "intern_ID",
    },
    {
        type: "input",
        message: "Please enter intern's email address.",
        name: "intern_email",
    },
    {
        type: "input",
        message: "Please enter intern's school.",
        name: "intern_school",
    }
];

var manager_prompt = function(){
    inquirer.prompt(questionsForManager).then((answers) => {
        // generate an incidence of Manager with input
        const manager = new Manager(answers.manager_name, answers.manager_ID, answers.manager_email, answers.manager_office_number);
        // put the manager incidence object into an object for later use in html
        htmlObj["manager"] = manager;
        // return to menu
        choice_prompt();
    })
}
    
var engineer_prompt = function(){
    inquirer.prompt(questionsForEngineer).then((answers) => {
        // generate an incidence of Engineer with input
        const engineer = new Engineer (answers.eng_name, answers.eng_ID, answers.eng_email, answers.eng_github_username);
        // push the engineer incidence object into an array for later use in html
        engineers.push(engineer);
        // return to menu
        choice_prompt();
    })
}

var intern_prompt = function(){
    inquirer.prompt(questionsForIntern).then((answers) => {
        // generate an incidence of Intern with input
        const intern = new Intern (answers.intern_name, answers.intern_ID, answers.intern_email, answers.intern_school);
        // push the manager incidence object into an array for later use in html
        interns.push(intern);
        // return to menu
        choice_prompt();
    })
}

// engineer, intern, finish menu
const choiceArray = [
    {
        type: 'list',
        name: 'choice',
        message: 'Add an engineer or an intern or finish.',
        choices: [
          'Engineer',
          'Intern',
          'Finish',
        ],
    }
];

// menu for manager to add more employee or finish
var choice_prompt = function(){
    inquirer.prompt(choiceArray).then((answers) => {
        if(answers.choice === "Engineer") {
            engineer_prompt();
        } else if(answers.choice === "Intern") {
            intern_prompt();
        } else if(answers.choice === "Finish") {
            // put engineers array and interns array into an object for later use in html
            htmlObj["engineers"] = engineers;
            htmlObj["interns"] = interns;
            generateHtml();
        } else {
            console.error("Unexpected choice.");
        }
    });
}

// generate html based on the input in CLI
var generateHtml = function() {
    fs.writeFile("./dist/index.html", renderHtmlObj.renderHtml(htmlObj), (err) => err ? console.error(err) : console.log('Success!'));
}

// main entry
manager_prompt();
