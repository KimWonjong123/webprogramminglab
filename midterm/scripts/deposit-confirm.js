import account from "./account.js";

function init() {
    const url = new URL(window.location.href);
    const amount = parseFloat(url.searchParams.get("amount"));
    const amountToText = `$${amount}?`;
    document.querySelector("div#amount").innerText = amountToText;

    const btnYes = document.querySelector("button#yes");
    btnYes.onclick = () => {
        account.deposit(amount);
        window.location.href = "./deposit-success.html";
    }

    const btnNo = document.querySelector("button#no");
    btnNo.onclick = () => {
        window.location.href = "./deposit.html";
    }
}

init();
