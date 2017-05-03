 
// var crystal = {
//       "color:" "white";
//       "font-family:" times, "sans-serif";
//       "font-size:" "30px";
//       "border-style:" "groove";
//       "border-radius:" "2px";
//       "border:" "1px solid #A44531";
//       "padding:" "10px"; 
//       "margin:" "10px 5px 5px 20px";
//       "color:" "white";
//       "background:" "#A44531";
// }


// $("#crystals").addClass("game");

 var score = 0;
 var win = 0;
 var losses = 0;
 var maxJewelValue = 12;
 var maxGoal = 120;
 var goal;


// var goal = Math.floor((Math.random()*120) +19);
// function createGoal(){
// 	var maxGoal = 120;
//   	// console.log("goal is:" + goal);
// 	if (goal >  120){
// 		// alert ("goal is not valid!");
//   		goal = maxGoal;
//   		// console.log("new goal is:" + goal);
//   		return goal;
//   	} 
// 	else if(goal >18 || goal <  121){
//   		return goal;
//   	}  
// }
//   createGoal();
//   document.querySelector("#rand").innerHTML = goal;

// random # between 1 & 12 for each crystal-icon 
 	var diamondValue = Math.floor((Math.random()*12) +1);
 	var spadeValue  = Math.floor((Math.random()*12) +1);
 	var heartValue  = Math.floor((Math.random()*12) +1);
 	var clubsValue  = Math.floor((Math.random()*12) +1);


$(document).ready(function(){


  var goal = Math.floor((Math.random()*120) +19);
function createGoal(){

	var maxGoal = 120;
  	// console.log("goal is:" + goal);
	if (goal >  120){
		// alert ("goal is not valid!");
  		goal = maxGoal;
  		// console.log("new goal is:" + goal);
  		return goal;
  	} 
	else if(goal >18 || goal <  121){
  		return goal;
  	}  
}
  createGoal();
  document.querySelector("#rand").innerHTML = goal;








 //set the diamond-icon as a button and clicable.
 $("#diamond-icon").on("click", function() {
 	// alert ("diamond");
    score += diamondValue;
    document.querySelector("#value").innerHTML = score;
    console.log("D: Your total score is: " +diamondValue +",   "+ score);

    if (score === goal) {
      alert("You win!");
      win ++;
      document.querySelector("#wins").innerHTML = win;
  
    }

    else if (score>= goal) {
      alert("You lose!!");
      losses++;
      document.querySelector("#losses").innerHTML = losses;

        }
  });

$("#spade-icon").on("click", function() {
 	// alert ("spade");
    score += spadeValue;
    document.querySelector("#value").innerHTML = score;
    console.log("S: Your total score is:  " +spadeValue+",   "+ score);

    if (score === goal) {
      alert("You win!");
      win ++;
      document.querySelector("#wins").innerHTML = win;
    }

    else if (score>= goal) {
      alert("You lose!!");
      losses++;
      document.querySelector("#losses").innerHTML = losses;
        }
  });

$("#heart-icon").on("click", function() {

    score += heartValue;
	// alert ("heart");
    document.querySelector("#value").innerHTML = score;
    console.log("H: Your total score is:  " +heartValue+",   "+ score);

    if (score === goal) {
      alert("You win!");
      win ++;
      document.querySelector("#wins").innerHTML = win;
    }

    else if (score>= goal) {
      alert("You lose!!");
      losses++;
      document.querySelector("#losses").innerHTML = losses;
        }
  });

$("#clubs-icon").on("click", function() {
 	// alert ("clubs");
    score += clubsValue;
    document.querySelector("#value").innerHTML = score;
    console.log("C: Your total score is:  " +clubsValue+",   "+ score);
    if (score === goal) {
      alert("You win!");
      win ++;
      document.querySelector("#wins").innerHTML = win;
    }

    else if (score>= goal) {
      alert("You lose!!");
      losses++;
      document.querySelector("#losses").innerHTML = losses;
        }
  });

function reset(){
var score = 0;
createGoal();
}
reset();
});