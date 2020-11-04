//Literal Objects
//used to represent domain models / mvc - model object

//class as type; in general classes are used to create objects;
//in ts; class can be used to act as type and create object

class User {
    id: number;
    name: string;
    email?: string;
    userName?: string;
    password?: string;
}
//Object types are not only for types but member existence verification
let user: User = {
    id: 1,
    name: 'Subramanian',
    email: 'admin@abc.com',
    userName: 'foo',
    password: 'bar'
};
console.log(user)

//i have req; i need only 3 properties
let newUser: User = {
    id: 1,
    name: 'Subramanian',
    email: 'admin@abc.com'
};

//interface as type: Generic type for many Objects
interface AccountType {
    id: number;
    name: string;
    balance?: number;
}
let sb: AccountType = {
    id: 1,
    name: 'Test',
    balance: 20
}

let loanaccount: AccountType = {
    id: 1,
    name: 'Test',
    balance: 20
}
//type
type CustomerType = {
    id: number,
    name: string;
    city?: string;
};
let cust: CustomerType = {
    id: 1,
    name: "Customer",
    city: 'Coimbatore'
}
////////////////////////////////////////////////////////////////////////////////
interface OrderType {
    id?: number;
    value?: number;
}

class Order {
    constructor(public id?: number, public value?: number) {

    }
}
//let myorder:OrderType = new Order();
let myorder = new Order() as OrderType;
let myorder1 = new Order() as any;
