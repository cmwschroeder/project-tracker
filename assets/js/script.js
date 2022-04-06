var today = moment();

var pHeader = document.querySelector("#date");

function makePage() {
    pHeader.textContent = today.format("MMM Do, YYYY");
}

$( function() {
    $("#datepicker").datepicker();
});

makePage();