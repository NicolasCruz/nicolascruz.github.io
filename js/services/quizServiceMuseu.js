app.factory('$quizAPIMuseu', function ($http, config) {
	var _getQuestions = function () {
		return $http.get(config.backend + "/quizMuseu.json");
	};

	var _addQresponses = function (qresponse) {
		return $http.post(config.api + "/qresponses/add.json", qresponse);
	};

	return {
		getQuestions: _getQuestions,
		addQresponses: _addQresponses,
	};
});
