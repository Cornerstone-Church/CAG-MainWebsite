// Has run the animation variables
var seriesElementHasRun = false;

// Get Elements
var seriesElement = document.getElementById("series-section");
var seriesLogo = document.getElementById("series-logo");
var seriesText = document.getElementById("series-text");
var debugElement = document.getElementById("dev");


// The container that scrolls
var parallaxContainer = document.querySelector(".parallax_container");

// Checks every scroll to see if an animation should be applied.
function animationChecker() {
    // Gets the current top value of the container and adds it to the height
    // of the window to get the bottom pixel
    var bottomWindow = parallaxContainer.scrollTop + window.innerHeight;

    debugElement.innerHTML = bottomWindow;
    // Series Logo
    if (!seriesElementHasRun) {
        if (bottomWindow > (seriesElement.offsetTop + 300)) {
            // debugElement.innerHTML = (seriesLogo.offsetTop);
            seriesElementHasRun = true;
            seriesLogo.classList.add("series-logo--animation");
            seriesText.classList.add("series-text--animation");
        }
    }
}