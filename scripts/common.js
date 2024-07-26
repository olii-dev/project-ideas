
function getQueryVariable(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split("=");
        if (pair[0] == variable) {
            return pair[1];
        }
    }
    alert('Query parameter ' + variable + ' not found');
}

var category = getQueryVariable("cat");

console.log(category);

const submodule = import(`./data/${category}.js`).await;
const title = submodule.title;
const titleShort = submodule.titleShort;
const ideas = submodule.ideas;

function setTitle() {
    document.getElementById("title").innerHTML += ` - ${title}`;
    document.getElementById("titleShort").innerHTML += `${titleShort}`;
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
            if (i < text.length - 3) {
                document.getElementById(elementId).innerHTML += text.charAt(i);
                i++;
                typingTimeout = setTimeout(typing, 50);
            } else if (i == text.length - 3) {
                document.getElementById(elementId).innerHTML += "🎟️";
                i++;
                typingTimeout = setTimeout(typing, 50);
            } else {
                isTyping = false;
                if (callback) callback();
            }
        } else {
            if (i < text.length) {
                document.getElementById(elementId).innerHTML += text.charAt(i);
                i++;
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
