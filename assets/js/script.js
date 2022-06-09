// set & display the date at the top of the page
var today = moment();
var now = today.format('LLLL'); 
const todaysDate = $('#currentDay');
todaysDate.text(now);

var saveBtn = document.querySelector('.saveBtn');

let currentTime = moment().format("H");
let taskHours = $(".hour");

function timeAudit () {
  $.each(taskHours, function (i) {
      var hourId = parseInt($(this).attr("id"));
      if (hourId === currentTime) {
        $(this).next().addClass("present");
      } else if (hourId < currentTime) {
        $(this).next().addClass("past");
      } else if (hourId > currentTime) {
        $(this).next().addClass("future");
      }
    });
}
timeAudit();

