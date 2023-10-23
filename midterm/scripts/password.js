import account from "./account.js";

const input = document.querySelector("input.password");
const numpad = document.querySelector("#numpad");
const returnCard = document.querySelector("#return");
let password;
let attempts;

function inputNum(btn) {
    input.value += " ";
    password += btn.innerText;
}

function deleteInput() {
    if (input.value.length > 0) {
        input.value = input.value.slice(0, -1);
        password = password.slice(0, -1);
    }
}

function clearInput() {
    input.value = "";
    password = "";
}

function enter() {
    if (password === account.password) {
        window.location.href = "main.html";
    } else {
        if (password === "") {
            alert("Please enter your PIN.");
            return;
        }
        if (attempts == 1) {
            alert("Incorrect PIN. You have no more attempts left. Please try again later.");
            window.location.href = "../index.html";
        }
        else {
            alert(`Incorrect PIN. You have ${--attempts} left.`);
            clearInput();
        }
    }
}

function initBtn() {
    const btn = document.createElement("button");
    btn.classList.add("border");
    btn.classList.add("large");
    btn.setAttribute("grid-row", "auto");
    btn.setAttribute("grid-column", "auto");
    btn.style.fontWeight = "bold";
    return btn;
}

function init() {
    attempts = 5;
    input.value = password = "";
    input.setAttribute("disabled", "disabled");
    returnCard.onclick = () => {
        window.location.href = "../index.html";
    };
    input.style.backgroundColor = "white";
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            const btn = initBtn();
            btn.onclick = () => {
                inputNum(btn);
            }
            btn.innerText = (i * 3 + j + 1).toString();
            numpad.appendChild(btn);
        }
    }

    const btnEnter = initBtn();
    btnEnter.onclick = () => {
        enter();
    }
    btnEnter.innerText = "Enter";
    btnEnter.style.color = "green";
    numpad.appendChild(btnEnter);

    const btn0 = initBtn();
    btn0.onclick = () => {
        inputNum(btn0);
    }
    btn0.innerText = "0";
    numpad.appendChild(btn0);

    const btnDel = initBtn();
    btnDel.onclick = () => {
        deleteInput();
    }
    btnDel.innerText = "Del";
    btnDel.style.color = "red";
    numpad.appendChild(btnDel);
}

init();
