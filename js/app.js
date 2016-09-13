(function () {
'use strict';

angular.module('LunchCheck', [])
  .controller('LunchCheckController', LC_Controller);

function LC_Controller($scope) {
  
  $scope.checkFood = function () {

    var food_count = 0;
    var empty_message = 'Please enter data first';
    var comma_message = 'Incorrect data';

    $scope.message = null;
    $scope.chk_class = null;

    //Check if empty
    if (typeof($scope.food_list) === "undefined" || $scope.food_list.trim() == '') {
      $scope.food_list = null;
    	$scope.message = empty_message;
      $scope.chk_class = 'alert alert-danger';
    	return false;
    }

    //Check commas only
    var commaRe = /^,*$/;
    var result = commaRe.exec($scope.food_list);

    if(result != null) {
      $scope.food_list = null;
      $scope.message = comma_message;
      $scope.chk_class = 'alert alert-warning';
      return false; 
    }

    var food_list = $scope.food_list.split(',');
    console.log('sdas');
    
    food_list.forEach(function(item, i, arr) {
    	if(item.trim() != '') 
				food_count++;    		
		});

    
  };
}
})();
