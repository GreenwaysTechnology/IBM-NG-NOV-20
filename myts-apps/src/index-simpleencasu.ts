//encasulation; private,public,protected
//default is public 

//public 
class Employee {
    //here all members are public ; public keyword is not neccessary
    id: number;
    public name: string;
    constructor(id: number = 1, name: string = 'Subramanian') {
        this.id = id;
        this.name = name;
    }
    public calculateSalary(): number {
        return 1000;
    }
}
let emp = new Employee();
//access object memebers
console.log(`${emp.id} ${emp.name} ${emp.calculateSalary()}`)

class User {
    //here all members are public ; public keyword is not neccessary
    private id: number;
    private name: string;
    constructor(id: number = 1, name: string = 'Subramanian') {
        this.id = id;
        this.name = name;
    }
    public getInfo() {
        return `${this.id} ${this.name}`
    }

}

let user = new User();
//access object memebers
console.log(`${user.getInfo()}`)