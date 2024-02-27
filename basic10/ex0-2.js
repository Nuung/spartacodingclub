class BankAccount {
    constructor(owner, balance) {
        this.owner = owner;
        this._balance = balance; // "private property", 
    }

    deposit(amount) {
        this._balance += amount;
        console.log(`Deposit ${amount}, new balance: ${this._balance}`);
    }

    withdraw(amount) {
        if (amount <= this._balance) {
            this._balance -= amount;
            console.log(`Withdraw ${amount}, new balance: ${this._balance}`);
        } else {
            console.log("Insufficient funds");
        }
    }

    get balance() {
        return this._balance;
    }
}

// account 변수 BankAccount 라는 class로 부터 만들어진 instance
const account = new BankAccount("John Doe", 1000);
account.deposit(500); // Deposit 500, new balance: 1500
account.withdraw(200); // Withdraw 200, new balance: 1300
console.log(account.balance); // 1300
account.balance = 10000;
console.log(account.balance);