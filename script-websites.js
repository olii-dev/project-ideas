const ideas = [
    "You should create a personal blog website!",
    "Maybe create an online portfolio!",
    "Build a weather app or website!",
    "Design an online shop website!",
    "Create a task management tool for arcade!",
    "Make a social media dashboard!",
    "Build a recipe sharing website!",
    "Create a travel booking website!",
    "Develop a news site!",
    "Create a blog website!",
    "Develop a photography website!",
    "Build a poetry website!",
    "Create a movie booking website, with live updates!",
    "Design a website for a news service in HTML and CSS!",
    "Create a podcast directory website!",
    "Build a to-do list website with reminder notifications!",
    "Design a virtual resume or CV generator!",
    "Create a note-taking website with categories and search functionality!",
    "Build a calculator website with advanced features like unit conversion!",
    "Design a countdown timer for events or tasks!",
    "Create a simple chat website with real-time messaging!",
    "Build a quote generator with categories and sharing options!",
    "Design a recipe organizer with meal planning features!",
    "Create a budget tracker with expense categorization!",
    "Build a habit tracker website with streaks and motivational quotes!",
    "Design a book recommendation website with user reviews!",
    "Create a movie review website with star ratings and comments!",
    "Build a random joke generator with categories and share buttons!",
    "Design a portfolio website for a fictional artist or designer!",
];

// Array of approximate hours for each idea (corresponding to the index)
const hours = [
    "Approx. 7 hours = 7 🎟️",
    "Approx. 8 hours = 8 🎟️",
    "Approx. 10 hours = 10 🎟️",
    "Approx. 4 hours = 4 🎟️",
    "Approx. 12 hours = 12 🎟️",
    "Approx. 15 hours = 15 🎟️",
    "Approx. 18 hours = 18 🎟️",
    "Approx. 28 hours = 28 🎟️",
    "Approx. 22 hours = 22 🎟️",
    "Approx. 17 hours = 17 🎟️",
    "Approx. 20 hours = 20 🎟️",
    "Approx. 13 hours = 13 🎟️",
    "Approx. 30 hours = 30 🎟️",
    "Approx. 18 hours = 18 🎟️",
    "Approx. 20 hours = 20 🎟️",
    "Approx. 15 hours = 15 🎟️",
    "Approx. 22 hours = 22 🎟️",
    "Approx. 28 hours = 28 🎟️",
    "Approx. 25 hours = 25 🎟️",
    "Approx. 18 hours = 18 🎟️",
    "Approx. 20 hours = 20 🎟️",
    "Approx. 12 hours = 12 🎟️",
    "Approx. 16 hours = 16 🎟️",
    "Approx. 27 hours = 27 🎟️",
    "Approx. 16 hours = 16 🎟️",
    "Approx. 25 hours = 25 🎟️",
    "Approx. 17 hours = 17 🎟️",
    "Approx. 20 hours = 20 🎟️",
    "Approx. 6 hours = 6 🎟️",
];

function generateIdea() {
    const randomIndex = Math.floor(Math.random() * ideas.length);
    const idea = ideas[randomIndex];
    const hour = hours[randomIndex];
    document.getElementById('idea').innerText = idea;
    document.getElementById('hours').innerText = hour;
}
