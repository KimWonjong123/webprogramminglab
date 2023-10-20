class Account {
    #accNumber = "1234567890123456";
    #password = "1234";
    #balance = 2000;
    #history = [];

    accNum() {
        return this.#accNumber;
    }

    password() {
        return this.#password;
    }

    balance() {
        return this.#balance;
    }

    history() {
        return this.#history;
    }

    withdraw(balance) {
        if (this.balance >= balance) {
            this.balance -= balance;
            const history = new History(balance = this.balance, fundsout = balance);
            this.history.push(history);
            return true;
        } else {
            return false;
        }
    }

    deposit(amount) {
        this.balance += amount;
        const history = new History(balance = this.balance, fundsin = amount);
        this.history.push(history);
    }

    transfer(balance) {
        if (this.balance >= balance) {
            this.balance -= balance;
            const history = new History(balance = this.balance, fundsout = balance);
            this.history.push(history);
            return true;
        } else {
            return false;
        }
    }
}

class History {
    constructor(balance, date = Date.now(), fundsout = 0, fundsin = 0) {
        this.date = date;
        this.fundsin = fundsin;
        this.fundsout = fundsout;
        this.balance = balance;
    }
}

const account = new Account();

export default account;