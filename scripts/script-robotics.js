const ideas = [
    "Build a line-following robot!",
    "Create a robot that can solve a Rubik's cube!",
    "Develop a voice-controlled robot assistant!",
    "Design a robot that can draw or paint!",
    "Build a robotic arm for precise movements!",
    "Create a robot that can navigate a maze autonomously!",
    "Develop a robot that can play a musical instrument!",
    "Design a robot for sorting recyclable materials!",
    "Build a drone that can be controlled via a smartphone app!",
    "Create a robot that can mimic human facial expressions!",
    "Develop a robotic pet that responds to touch and sound!",
    "Design a robot that can assist with household chores!",
    "Build a robot that can participate in a soccer game!",
    "Create a robot that can climb stairs or obstacles!",
    "Develop a robot that can monitor and report environmental conditions!",
    "Design a robot that can assist in search and rescue missions!",
    "Build a robot that can dance to music!",
    "Create a robot that can interact with social media platforms!",
    "Develop a robot that can water and tend to plants!",
    "Design a robot that can assist with cooking or food preparation!"
];

const hours = [
    "Approx. 7 hours = 7 🎟️",
    "Approx. 15 hours = 15 🎟️",
    "Approx. 10 hours = 10 🎟️",
    "Approx. 8 hours = 8 🎟️",
    "Approx. 12 hours = 12 🎟️",
    "Approx. 6 hours = 6 🎟️",
    "Approx. 18 hours = 18 🎟️",
    "Approx. 5 hours = 5 🎟️",
    "Approx. 9 hours = 9 🎟️",
    "Approx. 11 hours = 11 🎟️",
    "Approx. 14 hours = 14 🎟️",
    "Approx. 13 hours = 13 🎟️",
    "Approx. 16 hours = 16 🎟️",
    "Approx. 4 hours = 4 🎟️",
    "Approx. 10 hours = 10 🎟️",
    "Approx. 15 hours = 15 🎟️",
    "Approx. 8 hours = 8 🎟️",
    "Approx. 9 hours = 9 🎟️",
    "Approx. 7 hours = 7 🎟️",
    "Approx. 6 hours = 6 🎟️",
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
    confetti();
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
