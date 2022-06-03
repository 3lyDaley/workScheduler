// set & display the date at the top of the page
var today = moment();
var now = today.format('LLLL'); 
const todaysDate = $('#currentDay');
todaysDate.text(now);

var taskArrays = {
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