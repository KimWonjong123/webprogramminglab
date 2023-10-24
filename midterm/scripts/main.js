const wrapper = document.querySelector('.wrapper'); // wrapper for content of main.html
const contents = new Map(); // use Map to store content of each button

function init() {
    // initialize map
    contents.set('Account Information', 'info.html');
    contents.set('Withdraw Funds', 'withdraw.html');
    contents.set('Deposit Funds', 'deposit.html');
    contents.set('Transfer', 'transfer.html');
    contents.set('Reset PIN', 'resetpin.html');

    // create buttons for each content
    for (let [key, val] of contents.entries()) {
        const btn = document.createElement('button');
        btn.classList.add('border');
        btn.classList.add('main');
        btn.textContent = key;
        btn.setAttribute('onclick', `window.location.href='${val}'`);
        wrapper.appendChild(btn);
    }

    // create return button
    const btn = document.createElement('button');
    btn.id = 'return';
    btn.textContent = 'Return Card';
    btn.onclick = () => {
        window.location.href = '../index.html';
    }
    wrapper.appendChild(btn);
}

init();
