(function () {
    'use strict';
    angular.module('Assignment', [])
        .controller('ToBuyController', ToBuyController)
        .controller('AlreadyBoughtController', AlreadyBoughtController)
        .service('ShoppingListCheckOffService', ShoppingListCheckOffService);


        ToBuyController.$inject = ['ShoppingListCheckOffService'];
        function ToBuyController(ShoppingListCheckOffService){
            var buy = this;

            buy.itens = [
                {
                    name: "bar of chocolate",
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

            buy.remove = function(item){
                ShoppingListCheckOffService.buyItem(item);
                buy.itens.splice(item.$index,1);
            }
        }

        AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
        function AlreadyBoughtController(ShoppingListCheckOffService){
            var alreadybought = this;
            
            alreadybought.bought = ShoppingListCheckOffService.getItens();
        }

        function ShoppingListCheckOffService(){
            var service = this;

            var itemTransfer = [];

            service.buyItem = function (item) {
                itemTransfer.push(item);
            }

            service.getItens = function(){
                return itemTransfer;
            }
        }
})();