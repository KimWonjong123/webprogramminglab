// Account class to handle all account related functions
// use localStorage to store account information
class Account {
    accNumber = "1234567890123456";
    password = "1234";
    balance = 2000.0;
    history = [];

    constructor() {
        // check if account information exists in localStorage and load it
        if (localStorage.getItem('history') && localStorage.getItem('balance') && localStorage.getItem('password')) {
            this.history = JSON.parse(localStorage.getItem('history'))
            this.balance = JSON.parse(localStorage.getItem('balance'))
            this.password = JSON.parse(localStorage.getItem('password'))
        } else { // if not, create a new account
            this.history.push(new History(Date.now(), this.balance, 0, 0));
            localStorage.setItem('history', JSON.stringify(this.history));
            localStorage.setItem('balance', JSON.stringify(this.balance));
            localStorage.setItem('password', JSON.stringify(this.password));
            this.sync();
        }
    }

    // sync account information to localStorage
    sync() {
        localStorage.setItem('history', JSON.stringify(this.history));
        localStorage.setItem('balance', JSON.stringify(this.balance));
        localStorage.setItem('password', JSON.stringify(this.password));
    }

    changePasssword(newPassword) {
        this.password = newPassword;
        this.sync();
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

// History class to store transaction information of an account
class History {
    constructor(date, balance, fundsout, fundsin) {
        this.date = date;
        this.fundsin = fundsin;
        this.fundsout = fundsout;
        this.balance = balance;
    }
}

// create a single instance of Account class for this application
const account = new Account();

// export the instance of Account class
export default account;