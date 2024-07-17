const ideas = [
    "Create a desktop to-do list app with notifications!",
    "Develop a desktop weather application!",
    "Build a music player with playlist management!",
    "Create a desktop app for tracking expenses and budget!",
    "Develop a simple text editor with auto-save features!",
    "Build a desktop RSS feed reader!",
    "Create a personal diary app with password protection!",
    "Develop a desktop app for managing tasks and projects!",
    "Build a calorie tracker with food database!",
    "Create a desktop clock with customizable alarms!",
    "Develop a desktop note-taking application with categories!",
    "Build a file organizer to manage and sort files!",
    "Create a habit tracker with daily reminders!",
    "Develop a meditation app with guided sessions!",
    "Build a desktop game using JavaScript or Python!",
    "Create a desktop calculator with advanced functions!",
    "Develop a language learning app with flashcards!",
    "Build a recipe manager with ingredient list!",
    "Create a virtual pet desktop application!",
    "Develop a stock market tracker with real-time updates!"
];

const hours = [
    "Approx. 8 hours = 8 🎟️",
    "Approx. 5 hours = 5 🎟️",
    "Approx. 10 hours = 10 🎟️",
    "Approx. 7 hours = 7 🎟️",
    "Approx. 6 hours = 6 🎟️",
    "Approx. 9 hours = 9 🎟️",
    "Approx. 4 hours = 4 🎟️",
    "Approx. 12 hours = 12 🎟️",
    "Approx. 8 hours = 8 🎟️",
    "Approx. 3 hours = 3 🎟️",
    "Approx. 7 hours = 7 🎟️",
    "Approx. 11 hours = 11 🎟️",
    "Approx. 5 hours = 5 🎟️",
    "Approx. 6 hours = 6 🎟️",
    "Approx. 15 hours = 15 🎟️",
    "Approx. 4 hours = 4 🎟️",
    "Approx. 7 hours = 7 🎟️",
    "Approx. 8 hours = 8 🎟️",
    "Approx. 6 hours = 6 🎟️",
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
