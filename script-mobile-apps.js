const ideas = [
    "Develop a fitness tracking app!",
    "Create a mobile game!",
    "Build a personal finance management app!",
    "Design a meditation and mindfulness app!",
    "Create a recipe app with a meal planner!",
    "Develop a language learning app!",
    "Build a weather forecasting app!",
    "Design a travel planning app!",
    "Create a habit tracker app!",
    "Develop a social media app!",
    "Build a productivity app with task management!",
    "Create a music streaming app!",
    "Design a photo editing app!",
    "Develop a virtual pet app!",
    "Create a dating app!",
    "Build a virtual reality app!",
    "Design an augmented reality shopping app!",
    "Create a mobile health app!",
    "Develop a news aggregator app!",
    "Build a digital diary app!"
];

const hours = [
    "Approx. 5 hours = 5 🎟️",
    "Approx. 10 hours = 10 🎟️",
    "Approx. 7 hours = 7 🎟️",
    "Approx. 3 hours = 3 🎟️",
    "Approx. 8 hours = 8 🎟️",
    "Approx. 6 hours = 6 🎟️",
    "Approx. 2 hours = 2 🎟️",
    "Approx. 9 hours = 9 🎟️",
    "Approx. 4 hours = 4 🎟️",
    "Approx. 12 hours = 12 🎟️",
    "Approx. 5 hours = 5 🎟️",
    "Approx. 6 hours = 6 🎟️",
    "Approx. 7 hours = 7 🎟️",
    "Approx. 3 hours = 3 🎟️",
    "Approx. 4 hours = 4 🎟️",
    "Approx. 10 hours = 10 🎟️",
    "Approx. 8 hours = 8 🎟️",
    "Approx. 7 hours = 7 🎟️",
    "Approx. 2 hours = 2 🎟️",
    "Approx. 9 hours = 9 🎟️"
];

let isTyping = false;
let typingTimeout;

function typeWriter(text, elementId, callback) {
    let i = 0;

    function typing() {
        if (i < text.length) {
            document.getElementById(elementId).innerHTML += text.charAt(i);
            i++;
            typingTimeout = setTimeout(typing, 50);
        } else {
            isTyping = false;
            if (callback) callback();
        }
    }

    document.getElementById(elementId).innerHTML = "";
    clearTimeout(typingTimeout);
    typing();
}

function generateIdea() {
    if (isTyping) return;
    isTyping = true;

    const randomIndex = Math.floor(Math.random() * ideas.length);
    const idea = ideas[randomIndex];
    const hour = hours[randomIndex];

    document.getElementById('idea').innerHTML = "";
    document.getElementById('hours').innerHTML = "";

    typeWriter(idea, 'idea', function() {
        typeWriter(` ${hour}`, 'hours');
    });
}