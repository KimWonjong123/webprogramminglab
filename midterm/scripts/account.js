class Account {
    accNumber = "1234567890123456";
    password = "1234";
    balance = 2000.0;
    history = [];

    constructor() {
        if (localStorage.getItem('history') && localStorage.getItem('balance')) {
            this.history = JSON.parse(localStorage.getItem('history'))
            this.balance = JSON.parse(localStorage.getItem('balance'))
        } else {
            this.history.push(new History(Date.now(), this.balance, 0, 0));
            localStorage.setItem('history', JSON.stringify(this.history));
            localStorage.setItem('balance', JSON.stringify(this.balance));
            this.sync();
        }
    }

    sync() {
        localStorage.setItem('history', JSON.stringify(this.history));
        localStorage.setItem('balance', JSON.stringify(this.balance));
    }

    withdraw(amount) {
        if (this.balance >= amount) {
            this.balance -= amount;
            const history = new History(Date.now(), this.balance, amount, 0);
            this.history.push(history);
            this.sync();
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
        this.sync();

    }

    transfer(amount) {
        if (this.balance >= amount) {
            this.balance -= amount;
            const history = new History(Date.now(), this.balance, amount, 0);
            this.history.push(history);
            this.sync();
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