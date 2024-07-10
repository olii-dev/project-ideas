const ideas = [
    "Develop a recommendation system for movies!",
    "Create a chatbot using natural language processing!",
    "Build a sentiment analysis tool for social media!",
    "Design an image classification system!",
    "Create a voice recognition system!",
    "Develop a predictive maintenance system for machinery!",
    "Build a fraud detection system for online transactions!",
    "Create a personalized learning system using AI!",
    "Design a medical diagnosis tool using machine learning!",
    "Build a stock price prediction model!",
    "Create a smart home assistant using AI!",
    "Develop a handwriting recognition system!",
    "Build a facial recognition system!",
    "Create an AI-based game player!",
    "Develop a spam email detection system!",
    "Create a personalized news feed using machine learning!",
    "Design an autonomous driving system!",
    "Build a machine learning model for weather prediction!",
    "Create an AI system for art generation!",
    "Develop a system for analyzing customer feedback!"
];

const hours = [
    "Approx. 5 hours = 5 🎟️",
    "Approx. 8 hours = 8 🎟️",
    "Approx. 10 hours = 10 🎟️",
    "Approx. 12 hours = 12 🎟️",
    "Approx. 14 hours = 14 🎟️",
    "Approx. 16 hours = 16 🎟️",
    "Approx. 18 hours = 18 🎟️",
    "Approx. 20 hours = 20 🎟️",
    "Approx. 22 hours = 22 🎟️",
    "Approx. 24 hours = 24 🎟️",
    "Approx. 26 hours = 26 🎟️",
    "Approx. 28 hours = 28 🎟️",
    "Approx. 30 hours = 30 🎟️",
    "Approx. 32 hours = 32 🎟️",
    "Approx. 34 hours = 34 🎟️",
    "Approx. 36 hours = 36 🎟️",
    "Approx. 38 hours = 38 🎟️",
    "Approx. 40 hours = 40 🎟️",
    "Approx. 42 hours = 42 🎟️",
    "Approx. 44 hours = 44 🎟️"
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

    const minHours = parseInt(document.getElementById('minHours').value);
    const maxHours = parseInt(document.getElementById('maxHours').value);

    const filteredIdeas = ideas.filter((idea, index) => {
        const hourValue = parseInt(hours[index].match(/\d+/)[0]);
        return hourValue >= minHours && hourValue <= maxHours;
    });

    if (filteredIdeas.length === 0) {
        document.getElementById('idea').innerHTML = "No ideas found for the specified hours range.";
        document.getElementById('hours').innerHTML = "";
        isTyping = false;
        return;
    }

    const randomIndex = Math.floor(Math.random() * filteredIdeas.length);
    const idea = filteredIdeas[randomIndex];
    const hour = hours[ideas.indexOf(idea)];

    document.getElementById('idea').innerHTML = "";
    document.getElementById('hours').innerHTML = "";

    typeWriter(idea, 'idea', function() {
        typeWriter(` ${hour}`, 'hours');
    });
}
