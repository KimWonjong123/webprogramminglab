function init() {
    // initialize buttons
    let btn = document.querySelector('#home');
    btn.onclick = () => {
        window.location.href = `./main.html`;
    }

    btn = document.querySelector('#again');
    btn.onclick = () => {
        window.location.href = `./withdraw.html`;
    }

    btn = document.querySelector('#return-card');
    btn.onclick = () => {
        window.location.href = `../index.html`;
    }
}

init();