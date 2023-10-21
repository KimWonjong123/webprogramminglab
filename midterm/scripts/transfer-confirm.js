import account from './account.js';

const amount = document.querySelector('#amount');
const from = document.querySelector('#from');
const to = document.querySelector('#to');

function validate(urlParams) {
    if (from.innerText === to.innerText) {
        alert("Cannot transfer to the same account.");
        return false;
    }
    if (urlParams.get('amount') > account.balance) {
        alert("Insufficient funds");
        return false;
    }
    return true;
}


function init() {
    const urlParams = new URLSearchParams(window.location.search);
    amount.innerText = `$${urlParams.get('amount')}`;
    from.innerText = `From ${urlParams.get('from')}`;
    to.innerText = `From ${urlParams.get('to')}`;
    const btnYes = document.querySelector('#yes');
    btnYes.onclick = () => {
        if (validate(urlParams)) {
            window.location.href = "./transfer-success.html";
        }
    }
    const btnNo = document.querySelector('#no');
    btnNo.onclick = () => {
        window.location.href = `./transfer.html`;
    }
}

init();