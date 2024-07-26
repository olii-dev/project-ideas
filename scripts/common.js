
function getQueryVariable(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split("=");
        if (pair[0] == variable) {
            return pair[1];
        }
    }
    alert(`Query parameter ${variable} not found`);
}

var category = getQueryVariable("cat");

// basically wait for the submodule to load before doing any of this
(async () => {
    let title = null;
    let adjective = null;
    let ideas = null;
    try {
        let mod = await import(`./data/${category}.js`);
        title = mod.title;
        adjective = mod.adjective;
        ideas = mod.ideas;
    } catch (error) {
        alert(`Data loading failed:

${error}

This probably means that the URL parameter 'cat' was set improperly.`);
    }

    function setTitle() {
        document.getElementById("title").innerHTML += ` - ${title}`;
        document.getElementById("adjective").innerHTML += `${adjective}`;
    }

    window.onload = setTitle();

    let isTyping = false;
    let typingTimeout;

    function typeWriter(text, elementId, callback) {
        let i = 0;

        // We check if the string ends with the ticket emoji.
        // Even though JS' charAt works with accented characters, such as 'é',
        // this emoji (U+1F39F U+FE0F) is encoded with 3 UTF-16 characters:
        // first a high/low surrogate pair for the first codepoint, then a
        // third UTF-16 character for the second codepoint.
        // We therefore append these 3 characters all at once to prevent weird artifacts.

        let endsTicket = text.endsWith("🎟️");

        function typing() {
            if (endsTicket) {
                if (i < text.length - 2) {
                    // skip delay on spaces by including them in the next letter
                    let c = "";
                    do {
                        if (i == text.length - 3) {
                            document.getElementById(elementId).innerHTML += "🎟️";
                        } else {
                            c = text.charAt(i);
                            document.getElementById(elementId).innerHTML += c;
                        }
                        i++;
                    } while (c == " " && i < text.length - 2);
                    typingTimeout = setTimeout(typing, 50);
                } else {
                    isTyping = false;
                    if (callback) callback();
                }
            } else {
                if (i < text.length) {
                    let c = "";
                    do {
                        c = text.charAt(i);
                        document.getElementById(elementId).innerHTML += c;
                        i++;
                    } while (c == " " && i < text.length - 2);
                    typingTimeout = setTimeout(typing, 50);
                } else {
                    isTyping = false;
                    if (callback) callback();
                }
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
            const hourValue = idea[1];
            return hourValue >= minHours && hourValue <= maxHours;
        });

        if (filteredIdeas.length === 0) {
            document.getElementById('idea').innerHTML = "No ideas found for the specified hours range.";
            document.getElementById('hours').innerHTML = "";
            isTyping = false;
            return;
        }

        const randomIndex = Math.floor(Math.random() * filteredIdeas.length);
        const idea = filteredIdeas[randomIndex][0];
        const hour = filteredIdeas[randomIndex][1];

        document.getElementById('idea').innerHTML = "";
        document.getElementById('hours').innerHTML = "";

        typeWriter(idea, 'idea', function() {
            typeWriter(`Approx. ${hour} hours = ${hour} 🎟️`, 'hours');
        });
    }
    document.getElementById("runBtn").onclick = generateIdea;
})();


