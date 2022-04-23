//Business Logic 
function beep(n) {
  let num = parseInt(n)
  console.log(num)
  let beepArray = [];
  for(i = 0; i <= num; i++) {
    console.log(i)
  }
  
}


  //UI Logic 
$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
  }