var panel = $('#quiz-area');
var countStartNumber = 30;


$(document).on('click', '#start-over', function(e) {
  game.reset();
});

$(document).on('click', '.answer-button', function(e) {
  game.clicked(e);
});

$(document).on('click', '#start', function(e) {
  $('#subwrapper').prepend('<h2>Time Remaining: <span id="counter-number">30</span> Seconds</h2>');
  game.loadQuestion();
});


var questions = [{
  question: "What is the name of the bar the gang usually hung out in?",
  answers: ["MacLaren's Pub", "The Bamboo Lounge", "The Iron Horse", "Lusty Leopard"],
  correctAnswer: "MacLaren's Pub",
}, {
  question: "What college did Ted, Marshall, and Lily attend?",
  answers: ["Columbia University", "NYU", "Weslyan", "Ohio State"],
  correctAnswer: "Weslyan",
}, {
  question: "What phrase did Marshall sing to help him remember his password to the bar exam results website?",
  answers: ["Peach Juice Orange Dog Sing 9 2 5 4", "Apple Orchard Banana Cat Dance 8 6 6 3", "Carrot Water Celery Pug Walk 0 2 9 5", "Potato Beer Mug Bird Sung 4 0 9 8"],
  correctAnswer: "Apple Orchard Banana Cat Dance 8 6 6 3",
}, {
  question: 'What does Barney do for a living?',
  answers: ["Financial Advisor", "Stock Broker", "Investment Banker", "Please"],
  correctAnswer: "Please",
}, {
  question: "Who was Robin's song, P.S. I Love You, written about?",
  answers: ["Alan Thicke", "Geddy Lee", "Dave Coulier", "Paul Shaffer"],
  correctAnswer: "Paul Shaffer",
}, {
  question: 'What city did Lily live in after calling off her marriage to pursue her dreams?',
  answers: ["San Francisco", "Boston", "Los Angeles", "Chicago"],
  correctAnswer: "San Francisco",
}, {
  question: "What did Ted steal for Robin on their first date?",
  answers: ["A plate of food", "Blue french horn", "One dozen roses", "A video recorder"],
  correctAnswer: "Blue french horn",
}, {
  question: "At which wedding did Ted meet the mother?",
  answers: ["Lily and Marshall's", "Virgina and Clint's", "Kelly and Punchy's", "Robin and Barney's"],
  correctAnswer: "Robin and Barney's",
}];

var game = {
  questions:questions,
  currentQuestion:0,
  counter:countStartNumber,
  correct:0,
  incorrect:0,
  countdown: function(){
    game.counter--;
    $('#counter-number').html(game.counter);

    if (game.counter === 0){
      console.log('TIME UP');
      game.timeUp();
    }
  },
  loadQuestion: function(){
    timer = setInterval(game.countdown, 1000);
    panel.html('<h2>' + questions[this.currentQuestion].question + '</h2>' );
    for (var i = 0; i<questions[this.currentQuestion].answers.length; i++){
      panel.append('<button class="answer-button" id="button"' + 'data-name="' + questions[this.currentQuestion].answers[i] + '">' + questions[this.currentQuestion].answers[i]+ '</button>');
    }
  },
  nextQuestion: function(){
    game.counter = countStartNumber;
    $('#counter-number').html(game.counter);
    game.currentQuestion++;
    game.loadQuestion();
  },
  timeUp: function (){
    clearInterval(timer);
    $('#counter-number').html(game.counter);

    panel.html('<h2>Out of Time!</h2>');
    panel.append('<h3>The Correct Answer was: ' + questions[this.currentQuestion].correctAnswer);
    panel.append('<img src="' + questions[this.currentQuestion].image + '" />');

    if (game.currentQuestion === questions.length - 1){
      setTimeout(game.results, 3 * 1000);
    } else {
      setTimeout(game.nextQuestion, 3 * 1000);
    }
  },
  results: function() {
    clearInterval(timer);

    panel.html('<h2>All done, heres how you did!</h2>');
    $('#counter-number').html(game.counter);
    panel.append('<h3>Correct Answers: ' + game.correct + '</h3>');
    panel.append('<h3>Incorrect Answers: ' + game.incorrect + '</h3>');
    panel.append('<h3>Unanswered: ' + (questions.length - (game.incorrect + game.correct)) + '</h3>');
    panel.append('<br><button id="start-over">Start Over</button>');
  },
  clicked: function(e) {
    clearInterval(timer);

    if ($(e.target).data("name") === questions[this.currentQuestion].correctAnswer){
      this.answeredCorrectly();
    } else {
      this.answeredIncorrectly();
    }
  },
  answeredIncorrectly: function() {
    game.incorrect++;
    clearInterval(timer);
    panel.html('<h2>Nope!</h2>');
    panel.append('<h3>The Correct Answer was: ' + questions[game.currentQuestion].correctAnswer + '</h3>');

    if (game.currentQuestion === questions.length - 1){
      setTimeout(game.results, 3 * 1000);
    } else {
      setTimeout(game.nextQuestion, 3 * 1000);
    }
  },
  answeredCorrectly: function(){
    clearInterval(timer);
    game.correct++;
    panel.html('<h2>Correct!</h2>');

    if (game.currentQuestion === questions.length - 1){
      setTimeout(game.results, 3 * 1000);
    } else {
      setTimeout(game.nextQuestion, 3 * 1000);
    }
  },
  reset: function(){
    this.currentQuestion = 0;
    this.counter = countStartNumber;
    this.correct = 0;
    this.incorrect = 0;
    this.loadQuestion();
  }
};

