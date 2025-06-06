const questions = [
    {
        question: "O que é o Experimento Sangue do Diabo?",
        options: ["Experimento científico", "Ficção", "Lenda urbana", "Realidade histórica"],
        answer: 1
    },
    {
        question: "Qual o principal objetivo do experimento?",
        options: ["Criar super humanos", "Misturar DNA", "Aumentar a inteligência", "Aterrorização"],
        answer: 0
    },
    {
        question: "Onde o experimento foi realizado?",
        options: ["Laboratório secreto", "Na floresta", "Em uma cidade abandonada", "Em uma estação espacial"],
        answer: 0
    },
    {
        question: "Qual foi o principal resultado do experimento?",
        options: ["Criar mutantes", "Transformar pessoas em vampiros", "Criar superpoderes", "Alteração genética desconhecida"],
        answer: 3
    },
    {
        question: "Quem foi responsável pela condução do experimento?",
        options: ["Dr. Victor Malvado", "Dr. Fausto", "Dr. Edwin Gray", "Dr. Isaac Sombra"],
        answer: 2
    }
];

let currentQuestion = 0;

function loadQuestion() {
    const questionContainer = document.getElementById("question-container");
    const questionData = questions[currentQuestion];

    questionContainer.innerHTML = `
        <p>${questionData.question}</p>
        <div id="options">
            ${questionData.options.map((option, index) => `
                <button class="option" onclick="checkAnswer(${index})">${option}</button>
            `).join('')}
        </div>
    `;
}

function checkAnswer(selectedOption) {
    const questionData = questions[currentQuestion];
    const nextBtn = document.getElementById("next-btn");

    if (selectedOption === questionData.answer) {
        alert("Resposta correta!");
    } else {
        alert("Resposta incorreta!");
    }

    currentQuestion++;
    if (currentQuestion < questions.length) {
        nextBtn.style.display = "block";
    } else {
        nextBtn.innerText = "Fim do Quiz!";
    }
}

document.getElementById("next-btn").onclick = function() {
    if (currentQuestion < questions.length) {
        loadQuestion();
        document.getElementById("next-btn").style.display = "none";
    }
}

loadQuestion();
