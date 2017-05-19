app.factory("quizAPI", function ($http, config) {
	var _getQuestions = function () {
		return $http.get(config.backend + "/quiz.json");
	};

	return {
		getQuestions: _getQuestions,
	};
});
