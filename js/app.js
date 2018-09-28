var app = angular.module("cuia", ['ngStorage','ui.router']);

app.constant("config", {
	backend: "https://nicolascruz.github.io/backend",
	api: "http://api.acessoeducacao.dev"
});

app.run(function($rootScope){
  $rootScope.$on('$stateChangeSuccess',function(){
      $("html, body").animate({ scrollTop: 0 }, 200);
  })
});
