import account from "./account.js";

const input = document.querySelector("input.account"); // input field
const numpad = document.querySelector("#numpad"); // numpad
let accNum;

// input number to input field
function inputNum(btn) {
    input.value += " ";
    accNum += btn.innerText;
}

// delete last character from input field
function deleteInput() {
    if (input.value.length > 0) {
        input.value = input.value.slice(0, -1);
        accNum = accNum.slice(0, -1);
    }
}

// clear input field
function clearInput() {
    input.value = "";
    accNum = "";
}

// enter account number
function enter() {
    // check if input is empty
    if (accNum === "") {
        alert("Please enter your account number.");
        return;
    }

    // check if input is a valid number
    if (accNum === account.accNumber) {
        window.location.href = "pages/password.html";
    } else {
        alert("That account number does not exist!");
        clearInput();
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
    input.value = "";
    accNum = "";
    input.setAttribute("disabled", "disabled");
    input.style.backgroundColor = "white";

    // 1-9 buttons
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            const btn = initBtn();
            btn.onclick = () => {
                inputNum(btn);
            };
            btn.innerText = (i * 3 + j + 1).toString();
            numpad.appendChild(btn);
        }
    }

    // Enter button
    const btnEnter = initBtn();
    btnEnter.onclick = () => {
        enter();
    };
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
