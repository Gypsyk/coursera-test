(function () {
'use strict';

angular.module('LunchCheck', [])
  .controller('LunchCheckController', LC_Controller);

LC_Controller.$inject = ['$scope'];
function LC_Controller($scope) {
  
  $scope.checkFood = function () {

    var food_count = 0;
    var empty_message = 'Please enter data first';
    var comma_message = 'Incorrect data';
    var success_message = 'Enjoy!';
    var tooMuch_message = 'Too much!';

    $scope.message = null;
    $scope.chk_class = null;

    //Check if null
    if($scope.food_list == null) {
      $scope.message = empty_message;
      $scope.chk_class = 'alert alert-danger';
      return false;
    } else if(typeof($scope.food_list) === "undefined" || $scope.food_list.trim() == '') { //check if empty
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

    //Create food array
    var food_list = $scope.food_list.split(',');

    //NOT COUNTING EMPTY ELEMENT
    food_list.forEach(function(item, i, arr) {
    	if(item.trim() != '') 
				food_count++;    		
		});

    if(food_count <= 3) {
      $scope.message = success_message;
      $scope.chk_class = 'alert alert-success';
    }

    if(food_count > 3) {
      $scope.message = tooMuch_message;
      $scope.chk_class = 'alert alert-success';
    }
    
  };
}
})();
