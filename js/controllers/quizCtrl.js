app.controller("quizCtrl", function ($scope, questions) {
  // $scope.quiz = {
  //   question: 'Onde está localizada Ponta Porã?',
  //   options: ["MS", "SP", "BA", "RJ"],
  //   answer: 0
  // };
  //
  // $scope.checkAnswer = function() {
  //   if (!$('input[name=answer]:checked').length) return;
  //
  //   var ans = $('input[name=answer]:checked').val();
  //
  //   if (ans == $scope.quiz.options[$scope.quiz.answer]) {
  //     $scope.correctAns = true;
  //   } else {
  //     $scope.correctAns = false;
  //   }
  // };

  console.log(questions.data);

  $scope.start = function() {
		$scope.current_question = 1;
		$scope.quizOver = false;
		$scope.inProgress = true;
    $scope.score = 0;
    $scope.questions = questions.data;
		$scope.getQuestion();
	};

	$scope.getQuestion = function() {

    if($scope.current_question - 1 < $scope.questions.length) {
      var q = $scope.questions[ $scope.current_question - 1 ];
      $scope.question = q.question;
      $scope.options = q.options;
      $scope.answer = q.answer;
      $scope.answerMode = true;
		} else {
			$scope.quizOver = true;
		}
	};

	$scope.checkAnswer = function() {
		if(!$('input[name=answer]:checked').length) return;

		var ans = $('input[name=answer]:checked').val();

		if(ans == $scope.options[$scope.answer]) {
			$scope.score++;
			$scope.correctAns = true;
		} else {
			$scope.correctAns = false;
		}

		$scope.answerMode = false;
	};

	$scope.nextQuestion = function() {
		$scope.current_question++;
		$scope.getQuestion();
	}

  // começando o quiz
	$scope.start();

});
