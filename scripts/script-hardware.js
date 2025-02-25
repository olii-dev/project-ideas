const ideas = [
    "Build a smart mirror with weather and news updates!",
    "Create a home automation system with voice control!",
    "Design a wearable fitness tracker!",
    "Build a portable phone charger with solar panels!",
    "Create a smart doorbell with video capabilities!",
    "Design a robotic arm controlled by a smartphone!",
    "Build a smart irrigation system for gardens!",
    "Create a drone for aerial photography!",
    "Design a custom mechanical keyboard!",
    "Build a home security system with sensors!",
    "Create a smart thermostat with remote control!",
    "Design a 3D printer from scratch!",
    "Build an automated pet feeder!",
    "Create a voice-controlled personal assistant!",
    "Design a smart lighting system with mood settings!",
    "Build a weather station with sensors!",
    "Create a smart alarm clock with weather updates!",
    "Design a Bluetooth-enabled speaker system!",
    "Build a portable air quality monitor!",
    "Create a smart home energy management system!"
];

const hours = [
    "Approx. 10 hours = 10 🎟️",
    "Approx. 8 hours = 8 🎟️",
    "Approx. 6 hours = 6 🎟️",
    "Approx. 4 hours = 4 🎟️",
    "Approx. 8 hours = 8 🎟️",
    "Approx. 12 hours = 12 🎟️",
    "Approx. 6 hours = 6 🎟️",
    "Approx. 10 hours = 10 🎟️",
    "Approx. 6 hours = 6 🎟️",
    "Approx. 8 hours = 8 🎟️",
    "Approx. 6 hours = 6 🎟️",
    "Approx. 15 hours = 15 🎟️",
    "Approx. 8 hours = 8 🎟️",
    "Approx. 10 hours = 10 🎟️",
    "Approx. 6 hours = 6 🎟️",
    "Approx. 8 hours = 8 🎟️",
    "Approx. 4 hours = 4 🎟️",
    "Approx. 6 hours = 6 🎟️",
    "Approx. 4 hours = 4 🎟️",
    "Approx. 10 hours = 10 🎟️",
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
