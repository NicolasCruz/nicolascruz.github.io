app.controller("quizCtrl",
  function quizCtrl($scope) {
    $scope.quiz = {
      question: 'Onde está localizada Ponta Porã?',
      options: ["MS", "SP", "BA", "RJ"],
      answer: 0
    };

    $scope.checkAnswer = function() {
      if (!$('input[name=answer]:checked').length) return;

      var ans = $('input[name=answer]:checked').val();

      if (ans == $scope.quiz.options[$scope.quiz.answer]) {
        $scope.correctAns = true;
      } else {
        $scope.correctAns = false;
      }
    };
  });
