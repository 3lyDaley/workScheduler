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
      if (hourId < currentTime) {
        $(this).next().addClass("past");
      } 
    });
}
 timeAudit();

// update task backgrounds on the hour
//watches hour progression
hourProgress = 3600000 - today.milliseconds(); 
setTimeout(function() {
    setInterval(timeAudit, 3600000)
}, hourProgress);


//when a save button is clicked, the task will be saved
let btns = document.querySelectorAll('button');

for (i of btns) {
  (function(i) {
    i.addEventListener('click', function() {
    var taskHour = $(this).siblings(".hour").text();
    var taskText = $(this).siblings('textarea').val();
    localStorage.setItem(taskHour, JSON.stringify(taskText));
 
    console.log(taskHour);
    
    });
  })(i);
}

function loadTasks() {

  $(".hour").each(function() {
      var currHour = $(this).text();
      var currTask = localStorage.getItem(currHour);

      console.log(this);
      console.log(currHour);

      if(currTask !== null) {
          $(this).siblings("textarea").val(currTask);
      }
  });
}

loadTasks();

$('.clearBtn').click(function () {
  localStorage.clear();
  location.reload();
})


 