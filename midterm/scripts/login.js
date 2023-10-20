const accInput = document.querySelector("input.account");
const numpad = document.querySelector("#numpad");
let password;

function inputNum(btn) {
    accInput.value += " ";
    password += btn.textContent;
}

function deleteInput() {
    if (accInput.value.length > 0) {
        accInput.value = accInput.value.slice(0, -1);
        password = password.slice(0, -1);
    }
}

function clearInput() {
    accInput.value = "";
    password = "";
}

function enter() {
    console.log("password: " + password);
    if (password == "1234567890123456") {
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
    accInput.value = "";
    password = "";
    accInput.setAttribute("disabled", "disabled");
    accInput.style.backgroundColor = "white";
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
