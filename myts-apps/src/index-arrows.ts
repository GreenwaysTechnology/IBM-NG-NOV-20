//es 6 function;
//function declaration syntax;

function sayHello() {
    console.log('hello')
}
sayHello();

//function as literal : es 5 syntax
const hai = function () {
    console.log('hai');
};
hai();
//function as literal : es6 syntax ; arrow functions

let calculate = () => {
    let c = 10 + 10;
    console.log(c);
};
calculate();
//with parametes and return values
let add = (a: number = 1, b: number = 1): number => {
    let c = a + b;
    return c;
}
console.log(add());
//if function has one line of body. you can remove {}
let printValue = () => console.log('printing')
printValue();
//only return statmenet ; we can remove {} and return statement
let multiply = (a: number = 1, b: number = 2): number => a * b;
console.log(multiply());