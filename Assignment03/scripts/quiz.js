const pointText = document.getElementById("score-point");
const questionNumber = document.getElementById("progress-question");
const questionText = document.getElementById("question");
const choicesContainer = document.getElementById("choices");
const progressBar = document.getElementById("progress-bar");

let point = 0;
let qNumber = 0;
let currentQuestion;
const quiz = [
    {
        question: "Which one is NOT a legal variable name?",
        answers: ["_myvar", "Myvar", "my_var", "my-var"],
        correct: "_myvar",
    },
    {
        question: 'What is a correct syntax to output "Hello World" in Python?',
        answers: [
            'print("Hello World")',
            'p("Hello World")',
            'echo("Hello World")',
            'echo "Hello World"',
        ],
        correct: 'print("Hello World")',
    },
    {
        question: "How do you insert COMMENTS in Python code?",
        answers: [
            "#This is a comment",
            "//This is a comment",
            "/*This is a comment*/",
            "/*This is a comment*/",
        ],
        correct: "#This is a comment",
    },
    {
        question:
            "What is the correct syntax to output the type of a variable or object in Python?",
        answers: [
            "print(typeOf(x))",
            "print(type(x))",
            "print(typeof x)",
            "print(typeof(x))",
        ],
        correct: "print(type(x))",
    },
    {
        question: "What is the correct file extension for Python files?",
        answers: [".py", ".pyth", ".pt", ".pyt"],
        correct: ".py",
    },
];

function verifyAnswer(selectedAnswer) {
    if (selectedAnswer.innerText === currentQuestion.correct) {
        return true;
    } else {
        return false;
    }
}

function loadQuestion() {
    if (qNumber >= 4) {
        window.location.href = "result.html";
    } else {
        qNumber++;
        progressBar.value = qNumber;
        questionNumber.innerText = `Question ${qNumber}/4`;
        const index = Math.floor(Math.random() * quiz.length);
        currentQuestion = quiz.splice(index, 1)[0];
        questionText.innerText = currentQuestion.question;

        choicesContainer.innerHTML = "";

        // generate choices
        for (let i = 0; i < 4; ++i) {
            const choiceContainer = document.createElement("div");
            choiceContainer.classList.add("choiceContainer");
            const indxBtn = document.createElement("button");
            indxBtn.innerText = String.fromCharCode(65 + i);
            indxBtn.classList.add("choiceIndex");
            const choiceBtn = document.createElement("button");
            choiceBtn.innerText = currentQuestion.answers[i];
            choiceBtn.classList.add("choiceText");
            choiceBtn.addEventListener("click", () => {
                let selectedAnswer = choiceBtn;
                if (verifyAnswer(selectedAnswer) === true) {
                    selectedAnswer.style.backgroundColor = "blue";
                    point++;
                    pointText.innerText = point;
                } else {
                    selectedAnswer.style.backgroundColor = "red";
                }
                setTimeout(() => {
                    loadQuestion();
                }, 1000);
            });
            choiceContainer.appendChild(indxBtn);
            choiceContainer.appendChild(choiceBtn);
            choicesContainer.appendChild(choiceContainer);
        }
    }
}

function init() {
    pointText.innerText = point;

    loadQuestion();
}

init();
