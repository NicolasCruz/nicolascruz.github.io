app.controller("mainCtrl",function($scope,$localStorage){$scope.bodyClass=$localStorage.bodyClass||"no-contrast";$scope.toggleContrast=function(){if($scope.bodyClass=="no-contrast"){$localStorage.bodyClass="contrast"
$scope.bodyClass="contrast"}else{$localStorage.bodyClass="no-contrast"
$scope.bodyClass="no-contrast"}}});
