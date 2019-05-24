var correctChoices = ["c1", "b2", "c3", "d4", "d5"];

var questions = ["q1", "q2", "q3", "q4", "q5"];

var gameState = new Object();
gameState.correctAnswers = 0;
gameState.incorrectAnswers = 0;
gameState.totalWins = 0;
gameState.totalLosses = 0;

$("#questions-form").on("submit", function(event) {
  event.preventDefault();

  for (let i = 0; i < questions.length; i++) {
    if 
    // get the for loop to 
    // if the user inputs the correct answer, add one to the number of correct answers. if wrong, add one to the number of incorrect answers
    // add the number of correct/incorrect answers
    // display added number of correct/incorrect answers
    // for 5/5, set an alert "You're a true New Yorker"
    // for anything else out of 5, set an alert, "We're onto you".
}
  $('input[name="q1"]:checked').val();

  correctAnswers = function() {};

  // loop
  // try adding the values to the arrays and comparing the arrays instead

  //var q1 = $('input[name="q1"]:checked').val();
  //console.log(q1);

  //var q2 = $('input[name="q2"]:checked').val();
  // console.log(q2);

  //var q3 = $('input[name="q3"]:checked').val();
  //console.log(q3);

  // var q4 = $('input[name="q4"]:checked').val();
  //console.log(q4);

  //var q5 = $('input[name="q5"]:checked').val();
  //console.log(q5);
  // a function does only one thing**
  // top: declarations, bottom: implementations, or event listeners
});
