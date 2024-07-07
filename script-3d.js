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


document.getElementById('generateIdeaButton').addEventListener('click', function() {
    const randomIndex = Math.floor(Math.random() * ideas.length);
    const idea = ideas[randomIndex];
    document.getElementById('idea').innerText = idea;
});
