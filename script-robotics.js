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
    "Approx. 15 hours = 15 🎟️",
    "Approx. 20 hours = 20 🎟️",
    "Approx. 25 hours = 25 🎟️",
    "Approx. 18 hours = 18 🎟️",
    "Approx. 30 hours = 30 🎟️",
    "Approx. 22 hours = 22 🎟️",
    "Approx. 25 hours = 25 🎟️",
    "Approx. 20 hours = 20 🎟️",
    "Approx. 18 hours = 18 🎟️",
    "Approx. 25 hours = 25 🎟️",
    "Approx. 30 hours = 30 🎟️",
    "Approx. 22 hours = 22 🎟️",
    "Approx. 20 hours = 20 🎟️",
    "Approx. 18 hours = 18 🎟️",
    "Approx. 20 hours = 20 🎟️",
    "Approx. 28 hours = 28 🎟️",
    "Approx. 15 hours = 15 🎟️",
    "Approx. 26 hours = 26 🎟️",
    "Approx. 23 hours = 23 🎟️",
    "Approx. 22 hours = 22 🎟️",
];

function generateIdea() {
    const randomIndex = Math.floor(Math.random() * ideas.length);
    const idea = ideas[randomIndex];
    const hour = hours[randomIndex];
    document.getElementById('idea').innerText = idea;
    document.getElementById('hours').innerText = hour;
}
