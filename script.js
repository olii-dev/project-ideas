function generateIdea() {
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
        "Create a fitness tracking app!",
        "Create a blog website!",
        "Develop a photography website!",
        "Build a poetry website!",
        "Create a movie booking website, with live updates!",
        "Design a website for a news service in HTML and CSS!",
    ];

    const randomIndex = Math.floor(Math.random() * ideas.length);
    const idea = ideas[randomIndex];
    document.getElementById('idea').innerText = idea;
}
