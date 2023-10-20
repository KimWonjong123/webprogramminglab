import account from "./account.js";

const input = document.querySelector("input.account");
const numpad = document.querySelector("#numpad");
let accNum;

function inputNum(btn) {
    input.value += " ";
    accNum += btn.innerText;
}

function deleteInput() {
    if (input.value.length > 0) {
        input.value = input.value.slice(0, -1);
        accNum = accNum.slice(0, -1);
    }
}

function clearInput() {
    input.value = "";
    accNum = "";
}

function enter() {
    if (accNum === "") {
        alert("Please enter your account number.");
        return;
    }
    if (accNum === account.accNum()) {
        window.location.href = "pages/password.html";
    } else {
        alert("That account number does not exist!");
        clearInput();
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
    input.value = "";
    accNum = "";
    input.setAttribute("disabled", "disabled");
    input.style.backgroundColor = "white";
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

    const btnEnter = initBtn();
    btnEnter.onclick = () => {
        enter();
    };
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
