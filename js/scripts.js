//Business Logic 
function beep(n) {
  let num = parseInt(n)  
  let beepArray = []; 
  for(i = 0; i <= num; i++) { 
    if ([i].toString().includes(3)) { 
      beepArray.push("won't you be neighbor? ") 
    } else if ([i].toString().includes(2)) {
      beepArray.push("boop! ")
    } else if ([i].toString().includes(1)) { 
      beepArray.push("beep! ")
    } else {
      beepArray.push(i + " ")
    }
      
  }
  console.log(beepArray)
  return beepArray;
};


  //UI Logic 
$(document).ready(function() {
  $("#myNeighbor").submit(function(event) {
    event.preventDefault();
    
    const userInput = $("#textPassage").val() 
    const functionVariable = beep(userInput)

    $("p").html(functionVariable)
    $(".result").show()
    
  });
});