import account from './account.js';

const amount = document.querySelector('#amount');
let value;

function withdraw() {
    if (account.balance >= value) {
        account.withdraw(parseInt(value));
        window.location.href = `./withdraw-success.html`;
    }
    else {
        alert("Insufficient funds");
    }
}


function init() {
    const urlParams = new URLSearchParams(window.location.search);
    value = urlParams.get('amount');
    amount.innerText = `$${value}?`;
    const btnYes = document.querySelector('#yes');
    btnYes.onclick = () => {
        withdraw();
    }
    const btnNo = document.querySelector('#no');
}

init();