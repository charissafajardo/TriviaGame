var correctAnswers = ["c1", "b2", "c3", "d4", "d5"];
//object: has properties w values.

// object allows you to keep track of the game-- encompasses the different properties of the game
var gameState = {
  // key: value
  wins: 0,
  losses: 0,
  rightAnswers: 0 
  // add the zero there b/c needs a property
  wrongAnswers: 0
}



$("#questions-form").on("submit", function(event) {
  event.preventDefault();

  // loop
  // try adding the values to the arrays and comparing the arrays instead

  var q1 = $('input[name="q1"]:checked').val();
  //console.log(q1);

  var q2 = $('input[name="q2"]:checked').val();
  // console.log(q2);

  var q3 = $('input[name="q3"]:checked').val();
  //console.log(q3);

  var q4 = $('input[name="q4"]:checked').val();
  //console.log(q4);

  var q5 = $('input[name="q5"]:checked').val();
  //console.log(q5);
  // a function does only one thing**
  // top: declarations, bottom: implementations, or event listeners
});
