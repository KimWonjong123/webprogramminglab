import account from './account.js';

// table to display transaction history
const table = document.querySelector('table');

function init() {
    const history = account.history;

    // display transaction history for each row
    for (let h of history) {
        const row = document.createElement('tr');
        const date = document.createElement('td');
        const balance = document.createElement('td');
        const fundsout = document.createElement('td');
        const fundsin = document.createElement('td');
        date.textContent = new Date(h.date);
        balance.textContent = h.balance;
        fundsout.textContent = h.fundsout;
        fundsin.textContent = h.fundsin;
        row.appendChild(date);
        row.appendChild(fundsout);
        row.appendChild(fundsin);
        row.appendChild(balance);
        table.appendChild(row);
    }

    // initialize back button
    const back = document.querySelector('button#back');
    back.addEventListener('click', () => {
        window.location.href = 'main.html';
    });
}

init();