//Business Logic 
function beep(n) {
  let num = parseInt(n)  // 12 //converts sting input from user to integer for looping. 
  let beepArray = []; //new empty array for new return
  for(i = 0; i <= num; i++) { // 1 //looping through integer variable.
    if ([i].includes(3)) { //[i] represents integer being iterated through, checks if includes 3
      beepArray.push("won't you be neighbor?") //if condition met, push phrase to beepArray
    } else if ([i].includes(2)) {
      beepArray.push("boop!")
    } else if ([i].includes(1)) {
      beepArray.push("beep!")
    } else {
      beepArray.push(i)
    }
      
  }
  console.log(beepArray)
  return beepArray;
}


  //UI Logic 
$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
  }
}