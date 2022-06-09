// set & display the date at the top of the page
var today = moment();
var now = today.format('LLLL'); 
const todaysDate = $('#currentDay');
todaysDate.text(now);

let currentTime = moment().format("H");
let hours = $(".time-block");

var taskArray = {
  "8": [],
  "9": [],
  "10": [],
  "11": [],
  "12": [],
  "13": [],
  "14": [],
  "15": [],
  "16": [],
  "17": []
};
var createTasks = function() {
  localStorage.setItem("taskArray", JSON.stringify(taskArray))
};

var loadTasks = function() {
  var tasks = JSON.parse(localStorage.getItem("taskArray"));

  // if nothing in localStorage, create a new object to track all task status arrays
  if (!tasks) {
    taskArray = {    
      "8": [],
      "9": [],
      "10": [],
      "11": [],
      "12": [],
      "13": [],
      "14": [],
      "15": [],
      "16": [],
      "17": []
    };
  } else if (tasks) {
    taskArray = tasks;
    $.each(tasks, function(taskHour) {
      taskHour = $('#' + hour)
    })
  }
};


$('.saveBtn').click(loadTasks); 