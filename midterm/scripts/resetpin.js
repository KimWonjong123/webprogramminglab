import account from "./account.js";

const input = document.querySelector("input.reset");
const numpad = document.querySelector("#numpad");
const back = document.querySelector("#back");
const content = document.querySelector(".content");
let bCheckedCurrentPassword = false;
let bConfirmedNewPassword = false;
let password;
let passwordTemp;

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
    if (!bCheckedCurrentPassword) {
        if (password === account.password) {
            clearInput();
            bCheckedCurrentPassword = true;
            content.innerText = "Please enter your new PIN.";
            // window.location.href = "main.html";
        } else {
            if (password === "") {
                alert("Please enter your PIN.");
                return;
            }
            alert(`Incorrect PIN.`);
            clearInput();
        }
    } else if (!bConfirmedNewPassword) {
        if (password === "") {
            alert("Please enter your new PIN.");
            return;
        }
        content.innerText = "Please confirm your new PIN.";
        bConfirmedNewPassword = true;
        passwordTemp = password;
        clearInput();
    } else {
        if (password === "") {
            alert("Please confirm your new PIN.");
            return;
        }
        if (password === passwordTemp) {
            account.changePasssword(password);
            alert("PIN changed.");
            window.location.href = "./main.html";
        } else {
            alert("PINs do not match.");
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
    input.value = password = "";
    input.setAttribute("disabled", "disabled");
    back.onclick = () => {
        window.location.href = "./main.html";
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
