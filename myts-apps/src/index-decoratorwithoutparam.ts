//Types of class decorators
//1.decorator without parameter
//2.decorator with params


//decorator function
//decorator function must take arg; 
//arg-target; target on which the decorator is attached
function Course(target: any) {
    //decorator logic; boiler plate code to be accessed target
    Object.defineProperty(target.prototype, "subject", {
        value: 'Type script'
    });
}

@Course
class Student {
    constructor(public name: string = '') { }
}
let student = new Student('Subramanian') as any;
console.log(`Student ${student.name} ${student.subject}`);