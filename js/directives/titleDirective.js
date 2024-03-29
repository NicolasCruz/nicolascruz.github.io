app.directive('title', function ($rootScope, $timeout) {
  return {
    link: function () {
      var listener = function (event, toState) {
        $timeout(function () {
          $rootScope.title = (toState.data && toState.data.title)
            ? toState.data.title
            : 'Acesso Educação';
        });
      };
      $rootScope.$on('$stateChangeSuccess', listener);
    }
  };
});
