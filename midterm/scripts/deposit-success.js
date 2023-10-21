function init() {
    const btnHome = document.querySelector("button#home");
    btnHome.onclick = () => {
        window.location.href = "./main.html";
    }

    const btnAgain = document.querySelector("button#again");
    btnAgain.onclick = () => {
        window.location.href = "./deposit.html";
    }

    const btnReturn = document.querySelector("button#return-card");
    btnReturn.onclick = () => {
        window.location.href = "..//index.html";
    }
}

init();