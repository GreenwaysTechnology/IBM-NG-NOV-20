//Data types

//string
let firstName: string = "Subramanian";
console.log(`Name ${firstName}`);
//trigger compiler errors
//firstName =100;
let age: number = 18;
let isActive: boolean = true;

//here no explict type ; price:number
let price = 100;
console.log(price)
//price ="hello"; //which causes type error
price = 900;
//////////////////////////////////////////////////////////////////////////////
//c can hold only numbers in future
let c = 10;
//i want like javascript ; any type of value
let d: any = 80;
console.log(d);
d = "hello";
console.log(d);

//undefined
let myvar;
console.log(myvar);
myvar = 90;
console.log(myvar);
myvar = "hello";
console.log(myvar);


let myvar2: undefined = undefined;
//myvar2 ="test";

let myvar3: null = null;
//myvar3 ="test";



