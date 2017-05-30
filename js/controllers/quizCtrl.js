app.controller("quizCtrl", function ($scope, questions) {

  //console.log(questions.data);

  $scope.start = function() {
		$scope.current_question = 1;
    $scope.thanks = false;
		$scope.quizOver = false;
		$scope.inProgress = true;
    $scope.score = 0;
    $scope.errors = 0;
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
      $scope.errors++;
			$scope.correctAns = false;
		}
		$scope.answerMode = false;
	};

  $scope.tryAgain = function() {
    angular.element('#response-modal').modal('hide');
    $scope.current_question++;
		$scope.getQuestion();
	}

  $scope.nextQuestion = function() {
    angular.element('#response-modal').modal('hide');
		$scope.current_question++;
		$scope.getQuestion();
	}

  $scope.sendResult = function() {
    console.log("enviando resultado...");
    $scope.thanks = true;
	}

  // começando o quiz
	$scope.start();

});
