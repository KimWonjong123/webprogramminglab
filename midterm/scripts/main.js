const wrapper = document.querySelector('#main-wrapper');
const contents = new Map();

function init() {
    contents.set('Account Information', 'info.html');
    contents.set('Withdraw Funds', 'withdraw.html');
    contents.set('Deposit Funds', 'deposit.html');
    contents.set('Transfer', 'transfer.html');
    for (let [key, val] of contents.entries()) {
        const btn = document.createElement('button');
        btn.classList.add('border');
        btn.classList.add('main');
        btn.textContent = key;
        btn.setAttribute('onclick', `window.location.href='${val}'`);
        wrapper.appendChild(btn);
    }
    const btn = document.createElement('button');
    btn.id = 'return';
    btn.textContent = 'Return Card';
    wrapper.appendChild(btn);
}

init();
