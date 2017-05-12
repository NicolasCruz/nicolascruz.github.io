app.controller("quizCtrl",
  function($scope) {
    $scope.quiz = {
      question: 'Onde fica Ponta Porã?',
      answers: [{
          answer: 'MS',
          option: 1,
          correct: 'Y'
        },
        {
          answer: 'SP',
          option: 2,
          correct: 'N'
        },
        {
          answer: 'BA',
          option: 3,
          correct: 'N'
        }
      ]
    }
  });
