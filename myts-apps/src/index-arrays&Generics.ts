//arrays
///1.normal syntax
//2.generics syntax

//normal
//array of numbers
let list: number[] = [1, 2, 3, 5];
let names: string[] = ["subramanian", "arun", "karthik"];
//array of customers / array or products
class Product {
    id: number;
    name: string;
    qty?: number;
    price?: number;
    inStock?: boolean;
}
let products: Product[] = [
    { id: 1, name: 'a', qty: 10, price: 100, inStock: true },
    { id: 1, name: 'a', qty: 10, price: 100, inStock: true },
    { id: 1, name: 'a', qty: 10, price: 100, inStock: true }
]
//syntax generics; Array<T>
let stocks: Array<number> = [1, 2, 3, 5];

let products1: Array<Product> = [
    { id: 1, name: 'a', qty: 10, price: 100, inStock: true },
    { id: 1, name: 'a', qty: 10, price: 100, inStock: true },
    { id: 1, name: 'a', qty: 10, price: 100, inStock: true }
]