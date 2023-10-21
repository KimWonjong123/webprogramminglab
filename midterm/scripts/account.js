class Account {
    accNumber = "1234567890123456";
    password = "1234";
    balance = 2000.0;
    history = [];

    constructor() {
        this.history.push(new History(Date.now(), this.balance, 0, 0));
    }

    withdraw(amount) {
        if (this.balance >= amount) {
            this.balance -= amount;
            const history = new History(Date.now(), this.balance, amount, 0);
            this.history.push(history);
            return true;
        } else {
            return false;
        }
    }

    deposit(amount) {
        console.log(amount);
        console.log(this.balance);
        this.balance += amount;
        console.log(this.balance)
        const history = new History(Date.now(), this.balance, 0, amount);
        this.history.push(history);
    }

    transfer(amount) {
        if (this.balance >= amount) {
            this.balance -= amount;
            const history = new History(Date.now(), this.balance, amount, 0);
            this.history.push(history);
            return true;
        } else {
            return false;
        }
    }
}

class History {
    constructor(date, balance, fundsout, fundsin) {
        this.date = date;
        this.fundsin = fundsin;
        this.fundsout = fundsout;
        this.balance = balance;
    }
}

const account = new Account();

export default account;