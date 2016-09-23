(
function()
{
    'use strict';

    angular.module('LunchCheck', [])
    .controller('LunchCheckController', LunchCheckController);

    LunchCheckController.$inject = ['$scope'];

    function LunchCheckController($scope)
    {

        $scope.CheckIfTooMuch = function ()
        {
          var lunchItems=$scope.lunchItems;
          console.log(lunchItems);
          if(lunchItems==null)
          lunchItems="";

            var arrayOfItems=lunchItems.split(',');
            var numberOfItems=0;
            angular.forEach(arrayOfItems,function(value,key){
              if(value.trim()!="")
                numberOfItems++;
            })
            if(numberOfItems==0)
              {
                $scope.message="Please enter data first";
                $scope.lunchStyle={"color":"red"};
              $scope.InputStyle={"border" :"1px solid red"};
              }
            else if(numberOfItems>0 && numberOfItems<4)
              {
                $scope.message="Enjoy!";
                $scope.lunchStyle={"color":"red"};
                $scope.InputStyle={"border" :"1px solid green"};
              }
            else
              {
                $scope.message="Too much!";
              $scope.lunchStyle={"color":"red"};
              $scope.InputStyle={"border" :"1px solid green"};
              }
        }
    }
}
)();
