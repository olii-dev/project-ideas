const ideas = [
    "Create a simple platformer game!",
    "Develop a top-down shooter game!",
    "Build a maze exploration game!",
    "Design a turn-based strategy game!",
    "Create a puzzle-solving game!",
    "Develop a retro-style racing game!",
    "Build an adventure game with multiple levels!",
    "Design a space invader-style game!",
    "Create a side-scrolling action game!",
    "Develop a simple RPG with quests!",
    "Build a breakout-style game!",
    "Design a memory matching game!",
    "Create a tower defense game!",
    "Develop a fishing simulation game!",
    "Build a farming simulation game!",
    "Design a card game with 8-bit art!",
    "Create a retro-style sports game!",
    "Develop a rhythm-based music game!",
    "Build a simple fighting game!",
    "Design a cat-and-mouse chase game!"
];

const hours = [
    "Approx. 1 hour = 1 🎟️",
    "Approx. 3 hours = 3 🎟️",
    "Approx. 2 hours = 2 🎟️",
    "Approx. 4 hours = 4 🎟️",
    "Approx. 1 hour = 1 🎟️",
    "Approx. 6 hours = 6 🎟️",
    "Approx. 5 hours = 5 🎟️",
    "Approx. 3 hours = 3 🎟️",
    "Approx. 4 hours = 4 🎟️",
    "Approx. 8 hours = 8 🎟️",
    "Approx. 2 hours = 2 🎟️",
    "Approx. 3 hours = 3 🎟️",
    "Approx. 7 hours = 7 🎟️",
    "Approx. 4 hours = 4 🎟️",
    "Approx. 5 hours = 5 🎟️",
    "Approx. 4 hours = 4 🎟️",
    "Approx. 6 hours = 6 🎟️",
    "Approx. 4 hours = 4 🎟️",
    "Approx. 3 hours = 3 🎟️",
    "Approx. 4 hours = 4 🎟️"
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