(function () {
'use strict';


angular.module('ShoppingListCheckOff',[])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);


ToBuyController.$inject = ['ShoppingListCheckOffService']; 
function ToBuyController(ShoppingListCheckOffService){
	
	var toBuy = this;

	toBuy.list = ShoppingListCheckOffService.getBuyList();

	toBuy.buy = function(index) {
		try {
		ShoppingListCheckOffService.buyItem(index);}
		catch (error1) {toBuy.empty = error1.message}
	};

}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];

function AlreadyBoughtController(ShoppingListCheckOffService){
	var bought = this;

	bought.item = ShoppingListCheckOffService.getBougthList()

		}



function ShoppingListCheckOffService() {
	var service = this;

	 	var to_buy_items = [
			{name: "Galletas",
			quantity: "2"},
			{name: "Jugos",
			quantity: "10"},
			{name: "Helados",
			quantity: "5"},
			{name: "Tomates",
			quantity: "4"},
			{name: "Tallarines",
			quantity: "1"},
			{name: "Pescado",
			quantity: "1"}
			];

		var bought_items = []
		
		var buy_count = []

	service.getBuyList = function () {
		return to_buy_items
	};

	service.buyItem = function (itemIndex) {

	if (to_buy_items.length == 1){

		bought_items.push({
			      name: to_buy_items[itemIndex].name,
			      quantity: to_buy_items[itemIndex].quantity
			    });

		to_buy_items.splice(itemIndex, 1);


		throw new Error("Everything bought!");}
		
		else {
		bought_items.push({
			      name: to_buy_items[itemIndex].name,
			      quantity: to_buy_items[itemIndex].quantity
			    });

		to_buy_items.splice(itemIndex, 1);

		}
			
	 };

	service.getBougthList = function(){
		return bought_items
	};


}

})();
