const input = document.querySelector("input.deposit"); // input field
const numpad = document.querySelector("#numpad"); // numpad container div
const back = document.querySelector("#back"); // back button
let inputVal;

// input number to input field
function inputNum(btn) {
    input.value += btn.innerText;
    inputVal += btn.innerText;
    if (btn.innerText === ".") {
        btn.setAttribute("disabled", "disabled");
        btn.style.backgroundColor = "darkgray";
    }
}

// delete last character from input field
function deleteInput(btn) {
    if (input.value.length > 0) {
        if(inputVal.indexOf(".") === inputVal.length - 1) {
            btn.removeAttribute("disabled");
            btn.style.backgroundColor = "";
        }
        input.value = input.value.slice(0, -1);
        inputVal = inputVal.slice(0, -1);
    }
}

function clearInput() {
    input.value = "";
    inputVal = "";
}

function enter() {
    // check if input is empty
    if (inputVal === "") {
        alert("Please enter amount to deposit.");
        return;
    }
    try {
        // check if input is a valid number
        const amount = parseFloat(inputVal);
        
        // create form and submit to deposit-confirm.html
        const form = document.createElement("form");
        form.setAttribute("method", "get");
        form.setAttribute("action", "./deposit-confirm.html");
        
        // create input field and append to form
        const inpt = document.createElement("input");
        inpt.setAttribute("type", "hidden");
        inpt.setAttribute("name", "amount");
        inpt.setAttribute("value", amount);
        form.appendChild(inpt);
        document.body.appendChild(form);
        form.submit();
    } catch (e) {
        alert("Please enter a valid amount.");
        clearInput();
    }
}

// initialize button for numpad
function initBtn() {
    const btn = document.createElement("button");
    btn.classList.add("border");
    btn.classList.add("small");
    btn.setAttribute("grid-row", "auto");
    btn.setAttribute("grid-column", "auto");
    btn.style.fontWeight = "bold";
    return btn;
}

function init() {
    // initialize input field, back button, and numpad
    input.value = "";
    inputVal = "";
    input.setAttribute("disabled", "disabled");
    input.style.backgroundColor = "white";
    back.onclick = () => {
        window.location.href = "./main.html";
    }

    // 1-9 buttons
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            const btn = initBtn();
            btn.onclick = (e) => {
                e.preventDefault();
                inputNum(btn);
            }
            btn.innerText = (i * 3 + j + 1).toString();
            numpad.appendChild(btn);
        }
    }
    
    // 0 button
    const btn0 = initBtn();
    btn0.onclick = (e) => {
        e.preventDefault();
        inputNum(btn0);
    }
    btn0.innerText = "0";
    numpad.appendChild(btn0);

    // . button
    const btnDot = initBtn();
    btnDot.onclick = (e) => {
        e.preventDefault();
        inputNum(btnDot);
    }
    btnDot.innerText = ".";
    numpad.appendChild(btnDot);

    // Del button
    const btnDel = initBtn();
    btnDel.onclick = (e) => {
        e.preventDefault();
        deleteInput(btnDot);
    }
    btnDel.innerText = "Del";
    btnDel.style.color = "red";
    numpad.appendChild(btnDel);

    // Enter button
    const btnEnter = initBtn();
    btnEnter.onclick = (e) => {
        e.preventDefault();
        enter();
    }
    btnEnter.setAttribute("type", "submit");
    btnEnter.innerText = "Enter";
    btnEnter.style.color = "green";
    btnEnter.style.gridColumn = "span 3";
    btnEnter.style.width = "auto";
    numpad.appendChild(btnEnter);
}

init();
