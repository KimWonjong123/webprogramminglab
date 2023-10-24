import account from "./account.js";

const input = document.querySelector("input#amount");
let inputVal;

// input number to input field
function addAmount(amount) {
    if (inputVal >= 0 && inputVal + amount >= 0) {
        inputVal += amount;
        input.value = inputVal;
    }
}

// clear input field
function enter() {
    if (inputVal > 0) {
        window.location.href = `./withdraw-confirm.html?amount=${inputVal}`;
    }
}

// quick link to withdraw-confirm.html
function quickLink(btn) {
    window.location.href = `./withdraw-confirm.html?amount=${btn.innerText}`;
}

// change image on mouseover and mouseout to indicate clickability
function mouseover(input) {
    let src = input.src;
    src = src.replace(".png", "hover.png");
    input.src = src;
}
function mouseout(input) {
    let src = input.src;
    src = src.replace("hover", "");
    input.src = src;
}


function init() {
    inputVal = 0;
    input.value = inputVal;
    const containers = document.querySelectorAll("div.container");

    // Add buttons for $20, $40, $60, $80
    let container = containers[0];
    for (let i = 0; i < 4; i++) {
        const btn = document.createElement("button");
        btn.classList.add("amount");
        btn.classList.add("quicklink");
        btn.innerText = (i + 1) * 20;
        btn.onclick = () => {
            quickLink(btn);
        }
        container.appendChild(btn);
    }

    // Add buttons for $100, $200, $300, $400, Back
    container = containers[2];
    for (let i = 0; i < 3; i++) {
        const btn = document.createElement("button");
        btn.classList.add("amount");
        btn.classList.add("quicklink");
        btn.innerText = (i + 1) * 100;
        btn.onclick = () => {
            quickLink(btn);
        }
        container.appendChild(btn);
    }
    const btnBack = document.createElement("button");
    btnBack.classList.add("back");
    btnBack.classList.add("quicklink");
    btnBack.innerText = "Back";
    btnBack.onclick = () => {
        window.location.href = "./main.html";
    }
    container.appendChild(btnBack);


    // Add buttons for +100, +20, -20, -100
    container = container[1];
    const inputs = document.querySelectorAll("input.arrow");
    for (let input of inputs) {
        // parse amount from id
        let value = parseFloat(input.id.replace(/[^0-9]/g, ""));
        const sign = input.id.replace(/[0-9]/g, "");
        value = value * (sign === "up" ? 1 : -1);

        // add event listeners
        input.onmouseover = () => {
            mouseover(input);
        }
        input.onmouseout = () => {
            mouseout(input);
        }
        input.onclick = () => {
            addAmount(value);
        }
    }


    // Add Enter button
    const btnEnter = document.createElement("button");
    btnEnter.classList.add("enter");
    btnEnter.classList.add("quicklink");
    btnEnter.innerText = "Enter";
    btnEnter.onclick = () => {
        enter();
    }
    document.querySelector(".wrapper").insertAdjacentElement("afterend", btnEnter);
}

init();