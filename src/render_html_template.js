/**
 * 
 * Option1: (liang) ---> Array
 * [
 * {},{},{}
 * ]
 * 
 * manager, engs, interns
 * 
 * Option2: -----> Map!!!!  X
 * {
 * "Manager": {}
 * "Engineer": []
 * "Intern": []
 * 
 * }
 * 
 * 
 */

// const Engineer = require("../lib/engineer");
// const Manager = require("../lib/manager");

// var manager1 = new Manager("", "","","");
// var eng1 = new Engineer("","","","");
// var eng2 = new Engineer("","","","");
// var eng3 = new Engineer("","","","");

// var mockData = {};
// mockData["Manager"] = manager1;
// var engs = [];
// engs.push(eng1);
// engs.push(eng2);
// engs.push(eng3);

// mockData["Engineer"] = engs;
// mockData["Intern"] = [];

// var expectedStr = renderHtml(mockData);

function buildManagerHtmlCard(manager){
    if(manager == undefined || manager === null)
        return "";

    var managerCardHtml = `<div class="card mt-4 mb-2 mr-4 bg-info" style="width: 16rem; height:18rem">
    <div class="card-body mt-4">
        <h5 class="card-title">${manager.name}</h5>
        <h6 class="card-title">Manager</h6>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${manager.id}</li>
            <li class="list-group-item">Email: <a href="mailto:${manager.email}">${manager.email}</a></li>
            <li class="list-group-item">Office number: ${manager.officeNumber}</li>
        </ul>
    </div>
</div>`;
    return managerCardHtml;
}

function buildEngineerHtmlCards(engineers){
    if(engineers == undefined || engineers === null || engineers.length === 0)
        return "";

    var result = "";

    for (let i = 0; i < engineers.length; i++) {
        const element = engineers[i];
        var engineerCardHtml = `<div class="card mt-4 mb-2 mr-4 bg-info" style="width: 16rem; height:18rem">
    <div class="card-body mt-4">
        <h5 class="card-title">${element.name}</h5>
        <h6 class="card-title">Engineer</h6>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${element.id}</li>
            <li class="list-group-item">Email: <a href="mailto:${element.email}">${element.email}</a></li>
            <li class="list-group-item">GitHub: <a href="${element.github_username}">${element.github_username}</a></li>
        </ul>
    </div>
</div>`;
        result += engineerCardHtml;
    }
    return result;
}

function buildInternHtmlCards(interns){
    if(interns == undefined || interns === null || interns.length === 0)
    return "";

    var result = "";
    for (let i = 0; i < interns.length; i++) {
        const element = interns[i];
        var internCardHtml = `<div class="card mt-4 mb-2 mr-4 bg-info" style="width: 16rem; height:18rem">
        <div class="card-body mt-4">
            <h5 class="card-title">${element.name}</h5>
            <h6 class="card-title">Intern</h6>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${element.id}</li>
                <li class="list-group-item">Email: <a href="mailto: ${element.email}">${element.email}</a></li>
                <li class="list-group-item">School: ${element.school}</li>
            </ul>
        </div>
    </div>`;
        result += internCardHtml;
    }
    return result;
}

function renderHtml(htmlObjArray) {
    var headerPart = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css"
            integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
        <title>Document</title>
    </head>
    <body>
    <div class="row justify-content-center">`;

    var footPart = `</div>
    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"
    integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN"
    crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js"
    integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q"
    crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js"
    integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl"
    crossorigin="anonymous"></script>
</body>
</html>`;
    return `${headerPart} 
    ${buildManagerHtmlCard(htmlObjArray.manager)} 
    ${buildEngineerHtmlCards(htmlObjArray.engineers)} 
    ${buildInternHtmlCards(htmlObjArray.interns)} 
    ${footPart}`;
} 

module.exports = {
    "buildManagerHtmlCard": buildManagerHtmlCard,
    "buildEngineerHtmlCards": buildEngineerHtmlCards,
    "renderHtml": renderHtml,
}