
interface Transaction {
    withdraw(): number;
    deposit(amount: number, year: number): number;
}

abstract class Account implements Transaction {
    protected accountNo: string;
    constructor(accountNo: string) {
        this.accountNo = accountNo;
        console.log('Account constructor is called')
    }
    public calculateInterest(): number {
        return 10;
    }
    public withdraw(): number {
        return 100;
    }
    //dont want provide implementation for deposit
    abstract deposit(amount: number, year: number): number;
    //new
}
class SavingsAccount extends Account {
    constructor(accountNo: string = 'A0001') {
        super(accountNo);
        console.log('SavingsAccount constructor is called' + accountNo)
    }
    //overriding;re defining the methods
    public calculateInterest(): number {
        return 100 * super.calculateInterest();
    }
    public deposit(amount: number, year: number): number {
        return amount * 1000;
    }
}

let account = new SavingsAccount('B0007888');
console.log(account.calculateInterest())