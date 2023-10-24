import account from './account.js';

const amount = document.querySelector('#amount');
let value;

function withdraw() {
    // validate if withdraw is possible
    if (account.balance >= value) {
        account.withdraw(parseFloat(value));
        window.location.href = `./withdraw-success.html`;
    }
    else {
        alert("Insufficient funds");
    }
}


function init() {
    // fetch data from url and display withdraw information on page
    const urlParams = new URLSearchParams(window.location.search);
    value = urlParams.get('amount');
    amount.innerText = `$${value}?`;

    // initialize buttons
    const btnYes = document.querySelector('#yes');
    btnYes.onclick = () => {
        withdraw();
    }
    const btnNo = document.querySelector('#no');
    btnNo.onclick = () => {
        window.location.href = `./withdraw.html`;
    }
}

init();