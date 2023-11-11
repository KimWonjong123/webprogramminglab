const resultText = document.getElementById("result");
const againButton = document.getElementById("again");
const point = sessionStorage.getItem("point");

resultText.innerText = `Total Score: ${point || 0}`;

againButton.addEventListener("click", () => {
    window.location.href = "quiz.html";
});