(function () {
    'use strict';
    angular.module('Assignment', [])

        .controller('checkOffList', function ($scope) {
            $scope.itens = [
                {
                    name: "chocolate",
                    qnt: 1 
                },
                {
                    name: "oz of beef",
                    qnt: 5
                },
                {
                    name: "bags of rice",
                    qnt: 2
                },
                {
                    name: "carton of milk",
                    qnt: 1
                },
                {
                    name: "tomatoes",
                    qnt: 10
                }
            ];

            $scope.bought = [];

            $scope.buyItem = function (item) {
                $scope.bought.push($scope.itens.splice(item.$index, 1)[0]);
            }
        });

})();