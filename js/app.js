var app = angular.module("cuia", ['ngStorage','ui.router']);

app.run(function($rootScope){
  $rootScope.$on('$stateChangeSuccess',function(){
      $("html, body").animate({ scrollTop: 0 }, 200);
  })
});
