var today = moment();
var pHeader = document.querySelector("#date");
var projectFormEl = $("#project-form");

var projName = $("#project-name");
var projType = $("#project-type");
var projHourly = $("#hourly-wage");
var projDate = $("#datepicker");
var projTable = $("#project-table");

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
        type.text(inputObj.type);
        var hourly = $("<td>");
        hourly.text(inputObj.hourly);
        var date = $("<td>");
        date.text(inputObj.date);
    tr.append(name);
    tr.append(type);
    tr.append(hourly);
    tr.append(date);
    var dueDate = moment().year(inputObj.date.substring(6, 10)).month(inputObj.date.substring(0, 2) - 1).date(inputObj.date.substring(3, 5));
    var dayUntilDue = $("<td>");
    dayUntilDue.text(dueDate.date() - today.date());
    tr.append(dayUntilDue);
    var estTotalEarnings = $("<td>");
    estTotalEarnings.text(8 * inputObj.hourly * (dueDate.date() - today.date()));
    tr.append(estTotalEarnings);

    var btn = $('<btn>');
    btn.addClass("btn btn-danger");
    btn.text("Remove");
    tr.append(btn);

    projTable.append(tr);
    
}

function remove(event) {
    var btn = event.currentTarget;
    $(btn).parent().first().remove();
}

function makePage() {
    pHeader.textContent = today.format("MMM Do, YYYY");
}

$( function() {
    $("#datepicker").datepicker();
});

makePage();

projectFormEl.on("submit", formSubmit);
projTable.on("click", ".btn", remove);

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