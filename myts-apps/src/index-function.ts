//function:

function sayHello() {
    console.log('Hello');
}
sayHello();
////////////////
//params and args
function calculate(a: number, b: number) {
    let c = a + b;
    console.log(c);
}
calculate(10, 10);
//calculate("Subramanian","Murugan");
//default args
function multiply(a: number = 1, b: number = 1) {
    let c = a * b;
    console.log(c);
}
multiply(10, 10);
//what if i dont pass values
multiply();
//typescript default values:optional parameters;you can ignore params
function printName(name: string, message?: string) {
    console.log(`${name} ${message}`)
}
printName('Subramaian', 'hello');
printName('Subramaian');
//you can have either default args or optional params not both on same variable.

///////////////////////////////////////////////////////////////////////////////

//return values and types

function getStock(): number {
    return 100;
}
console.log(getStock())


function getName(): string {
    return "Hello";
}
console.log(getStock())
l̥
function getSomeValue(): any {
    return "Hello";
}
//no returne
function doSomething():void{
    console.log('void demo')
    //return; //void
}
doSomething();
















