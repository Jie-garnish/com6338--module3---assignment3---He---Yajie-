// Your code here
var questionsArr = [
    {
      question: 'JavaScript is the best language',
      answer: true
    },
    {
        question: 'The Earth is flat.',
        answer: false
    },
    {
        question: 'The sky is blue.',
        answer: true
    },
    {
        question: 'There are 50 states in the United States.',
        answer: true
    },
    {
        question: 'Water boils at 90°C.',
        answer: false
    },
    {
        question: 'Octopuses have three hearts.',
        answer: true
    }
  ];
  
  function runQuiz() {
    var correctAnswers = 0; 

    for (var i = 0; i < questionsArr.length; i++) {
      var userAnswer = confirm(questionsArr[i].question);
      
      if (userAnswer === questionsArr[i].answer) {
        correctAnswers++;
      }
    }
 
    var percentage = Math.round((correctAnswers / questionsArr.length) * 100);
    
    alert('You scored: ' + percentage + '%');
  }