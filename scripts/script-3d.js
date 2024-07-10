const ideas = [
    "Design a futuristic drone!",
    "Create a customizable modular furniture system!",
    "Design a concept car for urban commuting!",
    "Create a wearable tech accessory integrating 3D printing!",
    "Design a smart home device with innovative features!",
    "Create a sustainable architecture model for urban living!",
    "Design a futuristic kitchen appliance!",
    "Create a 3D-printed prosthetic limb with advanced functionalities!",
    "Design a foldable bicycle for easy urban transport!",
    "Create a robotic pet with interactive features!",
    "Design a concept for a space habitat!",
    "Create a 3D-printed fashion accessory or garment!",
    "Design a compact and efficient solar panel array!",
    "Create a medical device for remote healthcare!",
    "Design a 3D-printed sculpture for public art!",
    "Create a concept for a sustainable energy generator!",
    "Design a smart gardening device for urban spaces!",
    "Create a 3D-printed musical instrument!",
    "Design a virtual reality headset!",
    "Design a floating modular structure for disaster relief!"
];

const hours = [
    "Approx. 8 hours = 8 🎟️",
    "Approx. 6 hours = 6 🎟️",
    "Approx. 12 hours = 12 🎟️",
    "Approx. 4 hours = 4 🎟️",
    "Approx. 10 hours = 10 🎟️",
    "Approx. 15 hours = 15 🎟️",
    "Approx. 8 hours = 8 🎟️",
    "Approx. 12 hours = 12 🎟️",
    "Approx. 6 hours = 6 🎟️",
    "Approx. 10 hours = 10 🎟️",
    "Approx. 20 hours = 20 🎟️",
    "Approx. 4 hours = 4 🎟️",
    "Approx. 12 hours = 12 🎟️",
    "Approx. 10 hours = 10 🎟️",
    "Approx. 6 hours = 6 🎟️",
    "Approx. 15 hours = 15 🎟️",
    "Approx. 8 hours = 8 🎟️",
    "Approx. 4 hours = 4 🎟️",
    "Approx. 10 hours = 10 🎟️",
    "Approx. 15 hours = 15 🎟️",
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
