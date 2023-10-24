import account from "./account.js";

const input = document.querySelector("input.password");
const numpad = document.querySelector("#numpad");
const returnCard = document.querySelector("#return");
let password;
let attempts;

// input number to input field
function inputNum(btn) {
    input.value += " ";
    password += btn.innerText;
}

// delete last character from input field
function deleteInput() {
    if (input.value.length > 0) {
        input.value = input.value.slice(0, -1);
        password = password.slice(0, -1);
    }
}

// clear input field
function clearInput() {
    input.value = "";
    password = "";
}

function enter() {
    // check if input is empty
    if (password === account.password) {
        window.location.href = "main.html";
    } else {
        // check if input is a valid number
        if (password === "") {
            alert("Please enter your PIN.");
            return;
        }

        // if attempts is 0, redirect to index.html
        if (attempts == 1) {
            alert("Incorrect PIN. You have no more attempts left. Please try again later.");
            window.location.href = "../index.html";
        } else { // else, alert user and decrement attempts
            alert(`Incorrect PIN. You have ${--attempts} left.`);
            clearInput();
        }
    }
}

// initialize button for numpad
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
    // initialize numpad, input field, and buttons
    attempts = 5;
    input.value = password = "";
    input.setAttribute("disabled", "disabled");
    returnCard.onclick = () => {
        window.location.href = "../index.html";
    };
    input.style.backgroundColor = "white";

    // 1-9 buttons
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

    // Enter button
    const btnEnter = initBtn();
    btnEnter.onclick = () => {
        enter();
    }
    btnEnter.innerText = "Enter";
    btnEnter.style.color = "green";
    numpad.appendChild(btnEnter);

    // 0 button
    const btn0 = initBtn();
    btn0.onclick = () => {
        inputNum(btn0);
    }
    btn0.innerText = "0";
    numpad.appendChild(btn0);

    // Del button
    const btnDel = initBtn();
    btnDel.onclick = () => {
        deleteInput();
    }
    btnDel.innerText = "Del";
    btnDel.style.color = "red";
    numpad.appendChild(btnDel);
}

init();
