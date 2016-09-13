(function () {
'use strict';

angular.module('LunchCheck', [])
  .controller('LunchCheckController', LC_Controller);

function LC_Controller($scope) {
  
  $scope.checkFood = function () {

  	if($scope.food_list.trim() == '') {
  		console.log('empty');
    	$scope.message = empty_message;
    	return false;
    }

    var food_list = $scope.food_list.split(',');
    var food_count = 0;
    var empty_message = '<div>Data is empty</div>';



    food_list.forEach(function(item, i, arr) {
    	if(item.trim() != '') 
				food_count++;    		
		});

    
  };
}

})();
