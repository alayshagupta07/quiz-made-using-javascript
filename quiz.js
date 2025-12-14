// Quiz questions array
const quizQuestions = [
    { question: "What is the capital of France?", answer: "paris" },
    { question: "Which planet is known as the Red Planet?", answer: "mars" },
    { question: "What is 5 + 7?", answer: "12" },
    { question: "Who is President of Russia?", answer: "vladimir putin" },
    { question: "Which language is used for web development?", answer: "javascript" }
];

function runQuiz() {
    let score = 0;

    for (let i = 0; i < quizQuestions.length; i++) {
        const userAnswer = prompt(quizQuestions[i].question);

        if (userAnswer && userAnswer.toLowerCase().trim() === quizQuestions[i].answer) {
            score++;
            alert("Correct!");
        } else {
            alert("Wrong! The correct answer is: " + quizQuestions[i].answer);
        }
    }

    alert("Quiz Over! Your final score is " + score + " out of " + quizQuestions.length);
}

// Start quiz
runQuiz();
