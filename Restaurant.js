class Ingredient {
  constructor(name, cost) {
    this.name = name;
    this.cost = cost;
  }
}

var cheese = new Ingredient('Cheese', 5);
var pepperoni = new Ingredient('Pepperoni', 10);
var dough = new Ingredient('Dough', 2);
var lettuce = new Ingredient('Lettuce', 3);
var tomato = new Ingredient('Tomato', 4);



class Dish {
	constructor(ingredients, price, name) {
		
		this.ingredients = ingredients;
		this.price = price;
		this.name = name; 
		
	}
	cost() {
		var totalcost = 10;
		for(var item of this.ingredients){
			totalcost += item.cost;
		}			
	}
		
	profit() {	
		return this.price - this.cost();
	}
}



class Client {
	constructor(name, id) {
		this.name = name;
		this.id = id; 
	}
}

var pluto = {
			name: 'Pluto',
			id: 1
		    };

var goofy = {
			name: 'Goofy',
			id: 2
			};
		
		
class Restaurant {
	constructor() {	
		this.allOrders = {};
	}
		
	order(dish, client){
		
		if (this.allOrders[client.id]) {
			this.allOrders[client.id].push(dish);
		} else {
			this.allOrders[client.id] = [dish];    // dish into array- for client    
		}
	}
		
	printOrders() {
			for (var key in this.allOrders){                     //keys in allOrders
				for(var i = 0; i < this.allOrders[key].length; i++) {   //ingredients 
					console.log("Order #" + i + JSON.stringify(this.allOrders[key][i]));
				}
			}
		}
		
	printCheck(client){
		    var finalCost = 0;  
			if (this.allOrders[client.id]) {
				for (var key in this.allOrders){                     //keys in allOrders
				  for(var i = 0; i < this.allOrders[key].length; i++) {
					finalCost += this.allOrders[key][i].cost(); 
				  }
				}
				 this.printOrders(client);
				 console.log('Total: ' + this.totalPrice(client));
			} 
		}
		
		totalPrice(client) {
			    return this.allOrders[client.id].reduce(function(acc, dish) { 
			    	return dish.price + acc;
			    }, 0);
		}
}


var pizza = new Dish([cheese, pepperoni, dough], 35, 'Pizza');
var salad = new Dish([lettuce, cheese, tomato], 30, 'Salad');


var restaurant = new Restaurant();

restaurant.order(pizza, goofy);
restaurant.printCheck(goofy);

restaurant.order(salad, pluto);
restaurant.order(pizza, pluto);

restaurant.printCheck(pluto);

restaurant.printOrders();
