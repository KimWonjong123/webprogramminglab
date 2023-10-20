const input = document.querySelector("input.account");
const numpad = document.querySelector("#numpad");
let account;

function inputNum(btn) {
    input.value += " ";
    account += btn.textContent;
}

function deleteInput() {
    if (input.value.length > 0) {
        input.value = input.value.slice(0, -1);
        account = account.slice(0, -1);
    }
}

function clearInput() {
    input.value = "";
    account = "";
}

function enter() {
    console.log("password: " + account);
    if (account === "") {
        alert("Please enter your account number.");
        return;
    }
    if (account === "1234567890123456") {
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
    account = "";
    input.setAttribute("disabled", "disabled");
    input.style.backgroundColor = "white";
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            const btn = initBtn();
            btn.setAttribute("onclick", "inputNum(this)");
            btn.textContent = (i * 3 + j + 1).toString();
            numpad.appendChild(btn);
        }
    }

    const btnEnter = initBtn();
    btnEnter.setAttribute("onclick", "enter()");
    btnEnter.textContent = "Enter";
    btnEnter.style.color = "green";
    numpad.appendChild(btnEnter);

    const btn0 = initBtn();
    btn0.setAttribute("onclick", "inputNum(this)");
    btn0.textContent = "0";
    numpad.appendChild(btn0);

    const btnDel = initBtn();
    btnDel.setAttribute("onclick", "deleteInput()");
    btnDel.textContent = "Del";
    btnDel.style.color = "red";
    numpad.appendChild(btnDel);
}

init();
