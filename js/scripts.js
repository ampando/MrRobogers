//Business Logic 
function beep(n) {
  let num = parseInt(n)
  let beepArray = [];
  for(i = 0; i <= num; i++) {
    if ([i].includes(3)) {
      beepArray.push("won't you be neighbor?")
      console.log(beepArray)
    }  
    console.log(i)
  }
  
}


  //UI Logic 
$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
  }
}