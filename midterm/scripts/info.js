import { account } from './account.js';

const table = document.querySelector('table');

function init() {
    const history = account.history;
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
        row.appendChild(balance);
        row.appendChild(fundsout);
        row.appendChild(fundsin);
        table.appendChild(row);
    }

    const back = document.querySelector('button#back');
    back.addEventListener('click', () => {
        window.location.href = 'main.html';
    });
}

init();