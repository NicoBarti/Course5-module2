(function () {
'use strict';


// .controller('AlreadyBoughtController', AlreadyBoughtController)
angular.module('ShoppingListCheckOff',[])
.controller('ToBuyController', ToBuyController)
.provider('ShoppingListCheckOffService', ShoppingListCheckOffProvider)
.config(Config);

Config.$inject = ['ShoppingListCheckOffProvider'];
function Config(ShoppingListCheckOffProvider) {
    ShoppingListCheckOffProvider.defaults.list = 5
  //   [
		// {name: "Galletas",
		// quantity: "2"},
		// {name: "Jugos",
		// quantity: "10"},
		// {name: "Helados",
		// quantity: "5"},
		// {name: "Tomates",
		// quantity: "4"},
		// {name: "Tallarines",
		// quantity: "1"},
		// {name: "Pescado",
		// quantity: "1"}
		// ];
};


ToBuyController.$inject = ['ShoppingListCheckOffService']; 
function ToBuyController(ShoppingListCheckOffService){
	
	var toBuy = this;

	toBuy.list = ShoppingListCheckOffService.getBuyList();

	// ToBuyList.buy = function (itemIndex) {
	// 	ShoppingListCheckOffService.buyItem(itemIndex);
	// };
};



// AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];

// function AlreadyBoughtController(ShoppingListCheckOffService){
// 	var BoughtList = this;

// 	BoughtList.items = ShoppingListCheckOffService.getBougthList();

// }


function ShoppingListCheckOffService(initialList) {
	var service = this;
	// var to_buy_items = [];
	// var bought_items = [];

	var to_buy_items = [];

	to_buy_items = initialList;

	service.getBuyList = function () {
		return to_buy_items;
	};

	// service.buyItem = function (itemIndex) {
	// 	if (itemIndex > -1) {
	// 		bought_items = bought_items.push(to_buy_items[itemIndex])
	// 	    to_buy_items.splice(itemIndex, 1);
	// 		}		 
			
	// 	return to_buy_items
	// };

	// service.getBougthList = function(){
	// 	return bought_items
	// };

}

function ShoppingListCheckOffProvider(){
	
	var provider = this;

	provider.defaults = {
		list: 10
	};
		
console.log(provider.initialList);

	provider.$get = function(){ 
		var shoppingList = new ShoppingListCheckOffService(provider.defaults.list);
		return shoppingList;
		
	}; 

}

})();
