//object creations; using class
//object = state + behaviour ; instance members
// class Employee {
//     //instance variables
//     id: number = 1;
//     name: string = "subramanian";
//     //instance methods
//     calculateSalary(basicSalary: number = 100): number {
//         return 1000 * basicSalary;
//     }
// }
//state initalizations;
//hardcoded
//after object creation
//constructor overloading.
class Employee {
    //hardcoded values
    //id: number = 1;
    // name: string = "subramanian";
    id: number;
    name: string;
    department: string;
    constructor(id: number = 1, name: string = 'Subramanian', department?: string) {
        this.id = id;
        this.name = name;
        this.department = department;
    }
    //instance methods
    calculateSalary(basicSalary: number = 100): number {
        return 1000 * basicSalary;
    }
}

const createObject = () => {
    //let is keyword;emp is just reference variable;new is keyword; 
    //Employee() is constructor call
    let emp = new Employee();
    //access object memebers
    console.log(`${emp.id} ${emp.name} ${emp.department} ${emp.calculateSalary()}`)
    //after object creation
    emp.id = 19;
    emp.name = 'ram'
    console.log(`${emp.id} ${emp.name} ${emp.department} ${emp.calculateSalary()}`)

    emp =new Employee(23,'karthik','software');
    console.log(`${emp.id} ${emp.name} ${emp.department} ${emp.calculateSalary()}`)

}
createObject();