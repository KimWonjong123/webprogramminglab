import account from './account.js';

const amount = document.querySelector('#amount');
const from = document.querySelector('#from');
const to = document.querySelector('#to');

// validate if transfer is possible
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
    // fetch data from url and display transfer information on page
    const urlParams = new URLSearchParams(window.location.search);
    amount.innerText = `$${urlParams.get('amount')}`;
    from.innerText = `From ${urlParams.get('from')}`;
    to.innerText = `To ${urlParams.get('to')}`;
    const btnYes = document.querySelector('#yes');
    btnYes.onclick = () => {
        if (validate(urlParams)) {
            account.transfer(parseFloat(urlParams.get('amount')));
            window.location.href = "./transfer-success.html";
        }
    }
    const btnNo = document.querySelector('#no');
    btnNo.onclick = () => {
        window.location.href = `./transfer.html`;
    }
}

init();