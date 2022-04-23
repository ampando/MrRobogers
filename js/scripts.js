//Business Logic 
function beep(n) {
  let num = parseInt(n)  //converts sting input from user to integer for looping. 
  let beepArray = []; //new empty array for new return
  for(i = 0; i <= num; i++) { // 1 //looping through integer variable.
    if ([i].toString().includes(3)) { //[i] represents integer being iterated through, checks if includes 3
      beepArray.push("won't you be neighbor?") //if condition met, push phrase to beepArray
    } else if ([i].toString().includes(2)) {
      beepArray.push("boop!")
    } else if ([i].toString().includes(1)) { //turn integer to a string so the .includes() method can recognize double, triple and quad digit numbers as individual numbers ex: "143" reads as "1", "4", "3"
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