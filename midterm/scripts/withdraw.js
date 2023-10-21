const input = document.querySelector("input#amount");
let inputVal;

function addAmount(amount) {
    if (inputVal >= 0) {
        inputVal += amount;
        input.innerText = inputVal;
    }
}

function clearAmount() {
    inputVal = 0;
    input.innerText = inputVal;
}

function enter() {
}

function quickLink(btn) {
    inputVal = btn.innerText;
    input.innerText = inputVal;
}

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
    input.innerText = inputVal;
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


    container = container[1];
    const inputs = document.querySelectorAll("input.arrow");
    console.log(inputs);
    for (let input of inputs) {
        console.log(input)
        input.onmouseover = () => {
            mouseover(input);
        }
        input.onmouseout = () => {
            mouseout(input);
        }
    }
}

init();