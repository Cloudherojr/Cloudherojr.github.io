const questions = [
    { question: "What is JavaScript?", answer: "A programming language for web development" },
    { question: "List some of the variables used in JavaScript?", answer: "let, var, const" },
    { question: "What is the correct syntax to declare a function in JavaScript?", answer: "function myFunction() {}" },
    { question: "Which JavaScript operator is used for addition?", answer: "+" },
    { question: "What will type of 'hello' return?", answer: "string" },
    { question: "What method removes the last item from an array?", answer: "pop()" },
    { question: "What keyword is used to define a constant variable in JavaScript?", answer: "const" },
    { question: "What is the purpose of if statements in JavaScript?", answer: "To execute code based on conditions" },
    { question: "Which loop type will always execute at least once?", answer: "while loop" },
    { question: "What does return do in a function?", answer: "Stops the function execution and outputs a value" },
    { question: "What is event bubbling in JavaScript?", answer: "How events propagate from child to parent elements" },
    { question: "Which JavaScript method fetches data from an API?", answer: "fetch()" },
    { question: "Which format is commonly used for exchanging data between client and server?", answer: "JSON" },
    { question: "What does document.querySelector('#id') do?", answer: "Selects an element by its ID" },
    { question: "Which of the following is NOT a JavaScript framework/library?", answer: "Flask" },
    { question: "What does React use to update the UI efficiently?", answer: "Virtual DOM" },
    { question: "Which attribute will improve accessibility for screen readers?", answer: "aria-label" },
    { question: "What is the role of state in React?", answer: "Stores component-specific data" },
    { question: "Which JavaScript event happens when a user clicks an element?", answer: "click" },
    { question: "What web tool can help you debug JavaScript errors?", answer: "Console in DevTools" }
];

const container = document.createElement("div");
container.className = "quiz-container";
document.body.appendChild(container);

document.addEventListener("DOMContentLoaded", () => {
    questions.forEach(({ question, answer }) => {
        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `<div class='card-inner'><div class='card-front'>${question}</div><div class='card-back'>${answer}</div></div>`;
        card.addEventListener("click", () => {
            card.classList.toggle("flipped");
        });
        container.appendChild(card);
    });
});

const style = document.createElement("style");
style.innerHTML = `
    .quiz-container {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
        gap: 15px;
        padding: 20px;
    }
    .card {
        width: 200px;
        height: 120px;
        perspective: 1000px;
        cursor: pointer;
    }
    .card-inner {
        width: 100%;
        height: 100%;
        position: relative;
        transform-style: preserve-3d;
        transition: transform 0.6s;
    }
    .card.flipped .card-inner {
        transform: rotateY(180deg);
    }
    .card-front, .card-back {
        position: absolute;
        width: 100%;
        height: 100%;
        backface-visibility: hidden;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 10px;
        border: 1px solid #ddd;
        border-radius: 10px;
        text-align: center;
        font-size: 18px;
        background:rgb(169, 170, 172);
    }
    .card-back {
        background:rgb(29, 45, 216);
        color: white;
        transform: rotateY(180deg);
    }
`;
document.head.appendChild(style);