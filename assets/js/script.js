var today = moment();
var pHeader = document.querySelector("#date");
var projectFormEl = $("#project-form");

var projName = $("#project-name");
var projType = $("#project-type");
var projHourly = $("#hourly-wage");
var projDate = $("#datepicker");

var formSubmit = function (event) {
    event.preventDefault();

    var project = {
        name: projName.val(),
        type: projType.val(),
        hourly: projHourly.val(),
        date: projDate.val()
    };
    // link to function here
    printProject(project);
}

function printProject(inputObj) {
    var tr = $("<tr>");
        var name = $("<td>");
        name.text(inputObj.name);
        var type = $("<td>");
        type.text(inputObj.name);
        var hourly = $("<td>");
        hourly.text(inputObj.name);
        var date = $("<td>");
        date.text(inputObj.name);
    tr.append(name);
    tr.append(type);
    tr.append(hourly);
    tr.append(date);
    
}

function makePage() {
    pHeader.textContent = today.format("MMM Do, YYYY");
}

$( function() {
    $("#datepicker").datepicker();
});

makePage();

projectFormEl.on("submit", formSubmit);
console.log(projName);

// var handleFormSubmit = function (event) {
//     event.preventDefault();
  
//     var nameInput = nameInputEl.val();
//     var dateInput = dateInputEl.val();
  
//     if (!nameInput || !dateInput) {
//       console.log('You need to fill out the form!');
//       return;
//     }
  
//     printSkills(nameInput, dateInput);
  
//     nameInputEl.val('');
//     dateInputEl.val('');
//   };