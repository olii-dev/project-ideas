const ideas = [
    "Create a short animated film!",
    "Develop a character animation for a game!",
    "Design an animated explainer video!",
    "Create a looping animation for a website background!",
    "Animate a scene from a story or book!",
    "Design a 2D animated sprite for a game!",
    "Create a 3D animation using Blender!",
    "Develop a stop-motion animation project!",
    "Animate a complex physics simulation!",
    "Create an animated logo for a brand!",
    "Design an animated infographic!",
    "Create a motion graphics project using After Effects!",
    "Animate a walk cycle for a character!",
    "Develop an animation for a music video!",
    "Create a time-lapse animation!",
    "Design a seamless animated background!",
    "Create an animated intro for a YouTube channel!",
    "Animate a facial expression change for a character!",
    "Create an interactive animation using JavaScript!",
    "Develop a hand-drawn animation using traditional techniques!"
];

const hours = [
    "Approx. 8 hours = 8 🎟️",
    "Approx. 6 hours = 6 🎟️",
    "Approx. 10 hours = 10 🎟️",
    "Approx. 4 hours = 4 🎟️",
    "Approx. 12 hours = 12 🎟️",
    "Approx. 6 hours = 6 🎟️",
    "Approx. 15 hours = 15 🎟️",
    "Approx. 10 hours = 10 🎟️",
    "Approx. 8 hours = 8 🎟️",
    "Approx. 5 hours = 5 🎟️",
    "Approx. 7 hours = 7 🎟️",
    "Approx. 6 hours = 6 🎟️",
    "Approx. 8 hours = 8 🎟️",
    "Approx. 12 hours = 12 🎟️",
    "Approx. 6 hours = 6 🎟️",
    "Approx. 10 hours = 10 🎟️",
    "Approx. 8 hours = 8 🎟️",
    "Approx. 5 hours = 5 🎟️",
    "Approx. 7 hours = 7 🎟️",
    "Approx. 10 hours = 10 🎟️"
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
