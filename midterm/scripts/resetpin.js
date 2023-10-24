import account from "./account.js";

const input = document.querySelector("input.reset");
const numpad = document.querySelector("#numpad");
const back = document.querySelector("#back");
const content = document.querySelector(".content");
let bCheckedCurrentPassword = false;
let bConfirmedNewPassword = false;
let password;
let passwordTemp;

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
    if (!bCheckedCurrentPassword) {
        // check if input is empty
        if (password === account.password) {
            // if input is correct, prompt user to enter new password
            clearInput();
            bCheckedCurrentPassword = true;
            content.innerText = "Please enter your new PIN.";
        } else {
            if (password === "") {
                alert("Please enter your PIN.");
                return;
            }
            alert(`Incorrect PIN.`);
            clearInput();
        }
    } else if (!bConfirmedNewPassword) {
        // check if input is empty
        if (password === "") {
            alert("Please enter your new PIN.");
            return;
        }

        // if input is not empty, prompt user to confirm new password
        content.innerText = "Please confirm your new PIN.";
        bConfirmedNewPassword = true;
        passwordTemp = password;
        clearInput();
    } else {
        // check if input is empty
        if (password === "") {
            alert("Please confirm your new PIN.");
            return;
        }

        // if input is not empty, check if new password matches
        if (password === passwordTemp) {
            // if new password matches, change password and redirect to main.html
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
    // initialize button for numpad
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
    input.value = password = "";
    input.setAttribute("disabled", "disabled");
    back.onclick = () => {
        window.location.href = "./main.html";
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
