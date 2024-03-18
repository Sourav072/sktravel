const howMany = document.getElementById("howMany");
const fromDate = document.getElementById("fromDate");
const toDate = document.getElementById("toDate");
const textArea = document.getElementById("textArea");
const form = document.querySelector("form");
const whereTo = document.getElementById("whereTo");

var todayDate = new Date();

var tDate = todayDate.getDate();
var month = todayDate.getMonth() + 1;
var year = todayDate.getUTCFullYear();

if (month < 10) {
  this.month = "0" + month;
}
if (tDate < 10) {
  this.tDate = "0" + tDate;
}

var minDate = year + "-" + month + "-" + tDate;

fromDate.setAttribute("min", minDate);

function getDate() {
  // Get the input element by its ID
  var selectedDateInput = document.getElementById("fromDate");

  // Get the selected date value
  var fromDate = selectedDateInput.value;

  // You can now use the selectedDate value as needed
  document.getElementById("toDate").setAttribute("min", fromDate);
}
fromDate.addEventListener("input", function () {
  document.getElementById("toDate").removeAttribute("disabled");
});

function onSubmit() {
  if (
    whereTo.value != 0 &&
    howMany.value != 0 &&
    fromDate.value != "" &&
    toDate.value != "" 
  ) {
    window.alert("Booking Successful");
    whereTo.value = null;
    howMany.value = null;
    fromDate.value = null;
    toDate.value = null;
    textArea.value = null;
  }
}
document.addEventListener('contextmenu', function(e) { 
  e.preventDefault(); 
}); 