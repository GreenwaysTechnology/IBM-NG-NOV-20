//Dependance injection.

class Product {
    constructor(public id: number = 1, public name: string = 'default') { }
}
class Order {
    //has-a 
    constructor(public orderId: number = 1, public product?: Product) {
    }
}
class Dog {
    constructor(){}
}

let order = new Order(100,new Product());
console.log(order);

//type collation is not possible; can identfied during compile time; so we can build
//enterprise systems
//let order1 = new Order(100,new Dog());
//console.log(order)