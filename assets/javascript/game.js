 
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


// random # between 19 & 120  
 var goal = Math.floor((Math.random()*120) +19);   
 var score = 0;
 var wins = 0;
 var losses = 0;


// random # between 1 & 12 for each crystal-icon 
 var diamondValue = Math.floor((Math.random()*12) +1);
 var spadeValue  = Math.floor((Math.random()*12) +1);
 var heartValue  = Math.floor((Math.random()*12) +1);
 var clubsValue  = Math.floor((Math.random()*12) +1);

 //set the diamond-icon as a button and clicable.

 $("#diamond-icon").on("click", function() {
 	alert ("diamond");
    score += diamondValue;

    alert("Your total score is: " + score);

    if (score === goal) {
      alert("You win!");
      win ++;
    }

    else if (score>= goal) {
      alert("You lose!!");
      losses++;
        }
  });

$("#spade-icon").on("click", function() {
 	alert ("spade");
    score += spadeValue;

    alert("Your total score is: " + score);

    if (score === goal) {
      alert("You win!");
      win ++;
      reset;
    }

    else if (score>= goal) {
      alert("You lose!!");
      losses++;
      reset;
        }
  });

$("#heart-icon").on("click", function() {

    score += heartValue;
	alert ("heart");
    alert("Your total score is: " + score);

    if (score === goal) {
      alert("You win!");
      win ++;
    }

    else if (score>= goal) {
      alert("You lose!!");
      losses++;
        }
  });

$("#clubs-icon").on("click", function() {
 	alert ("clubs");
    score += clubsValue;

    alert("Your total score is: " + score);

    if (score === goal) {
      alert("You win!");
      win ++;
    }

    else if (score>= goal) {
      alert("You lose!!");
      losses++;
        }
  });