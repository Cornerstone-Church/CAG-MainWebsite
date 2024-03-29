// Has run the animation variables
var seriesElementHasRun = false;

// Get Elements
// Series
var seriesElement = document.getElementById("series-section");
var seriesLogo = document.getElementById("series-logo");
var seriesText = document.getElementById("series-text");
var seriesVideo = document.getElementById("series-video");
// Debug
var debugElement = document.getElementById("dev");

// The container that scrolls
var parallaxContainer = document.querySelector(".parallax_container");

// Has alert variable
var hasAlert = false;

funFact();
checkAlert();
expireIt();
holdIt();

// Checks every scroll to see if an animation should be applied.
function animationChecker() {
    // Gets the current top value of the container and adds it to the height
    // of the window to get the bottom pixel
    var bottomWindow = window.scrollY + window.innerHeight;

    // Series Logo
    if (!seriesElementHasRun) {
        if (bottomWindow > (seriesElement.offsetTop + 300)) {
            seriesElementHasRun = true;
            seriesLogo.classList.add("series-logo--animation");
            seriesText.classList.add("series-text--animation");
        }
    }
}

function funFact() {
    firebase.firestore().collection('website-fun-facts').doc('facts').get().then(doc => {
        var facts = doc.data().facts;
        var index = Math.floor(Math.random() * facts.length);
        var element = document.getElementById('fun-fact');

        element.innerHTML = facts[index];
    });
}

function checkAlert() {
    firebase.firestore().collection('alerts').doc('alert').get().then((doc) => {
        var title = doc.data().title;
        var action = doc.data().action;
        var expireDate = doc.data().expireDate;
        var currentDate = new Date().getTime() / 1000;
        var currentDate = Math.round(currentDate);

        // Determine if alert exists
        if (title != "") {
            // If we have not reached the expiration date then run alert
            if (expireDate.seconds > currentDate) {
                // Alert Code
                var alertWrapper = document.getElementById('alert');
                var alertText = document.querySelector('#alert a');

                alertText.innerHTML = title;
                alertText.setAttribute('href', action);

                alertWrapper.style.display = 'inline';

                hasAlert = true;
            }
        }
    });
}