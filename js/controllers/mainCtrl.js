app.controller("mainCtrl", function ($scope,$localStorage) {

  // Valores salvos no navegador
  $scope.bodyClass = $localStorage.bodyClass || "no-contrast";

  // Alterna contraste
  $scope.toggleContrast = function(){
    if($scope.bodyClass == "no-contrast"){
      $localStorage.bodyClass = "contrast"
      $scope.bodyClass = "contrast"
    }else{
      $localStorage.bodyClass = "no-contrast"
      $scope.bodyClass = "no-contrast"
    }
  }
});
