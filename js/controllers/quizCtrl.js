app.controller("quizCtrl", function ($scope, questions, $quizAPI) {

  $scope.start = function() {
		$scope.current_question = 0;
    $scope.thanks = false;
		$scope.quizOver = false;
		$scope.inProgress = true;
    $scope.score = 0;
    $scope.errors = 0;
    $scope.questions = questions.data;
		$scope.getQuestion();
	};

	$scope.getQuestion = function() {

    if($scope.current_question < $scope.questions.length) {
      var q = $scope.questions[ $scope.current_question ];
      $scope.canRespond = false;
      $scope.question = q.question;
      $scope.options = q.options;
      $scope.answer = q.answer;
      $scope.answerMode = true;
		} else {
			$scope.quizOver = true;
		}
	};

	$scope.checkAnswer = function(index) {

    $scope.questions[$scope.current_question].selected = index;

    angular.element('#response-modal').modal('show');
		if($scope.questions[$scope.current_question].selected == $scope.answer) {
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

    var qresponse = {
    	"quiz": "Guerra",
    	"aluno": $scope.username,
    	"acertos": $scope.score,
    	"erros": $scope.errors
    };
    $quizAPI.addQresponses(qresponse).then(function successCallback(response) {
      console.log("salvo com sucesso!");
    }, function errorCallback(response) {
      console.log("Erro ao salvar...");
    });
	}

  // começando o quiz
	$scope.start();

});
