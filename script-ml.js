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

document.getElementById('generateIdeaButton').addEventListener('click', function() {
    const randomIndex = Math.floor(Math.random() * ideas.length);
    const idea = ideas[randomIndex];
    document.getElementById('idea').innerText = idea;
});
