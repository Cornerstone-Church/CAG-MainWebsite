// Mechanical variables
var isScrolling = false;

// Sets the transition height for the header when scrolling.
// Units are in px.
var scrollTransitionHeight = 200;

// Enable light mode
var lightMode = true;




function headerVideo() {
    var header = document.querySelector("header");
    header.classList.add('header-transparent');
}


function headerScroll() {
    // Import elements
    var header = document.querySelector("header");
    var parallaxContainer = document.querySelector(".parallax_container");
    var debugBar = document.querySelector(".debug_float");

    // Captures scrolling position
    var scrollPosition = parallaxContainer.scrollTop;

    // If the scroll position is greater than the set height
    if (scrollPosition >= scrollTransitionHeight) {
        // Make sure we only execute once when scrolling
        if (!isScrolling) {
            header.classList.toggle("header-blur");
            header.classList.toggle("header-transparent");

            // Check to see if light mode should be applied
            if (lightMode) {
                header.classList.toggle("header-light");
            } else {
                header.classList.toggle("header-dark");
            }

            isScrolling = true;
        }
    } else {
        if (isScrolling) {
            header.classList.toggle("header-blur");
            header.classList.toggle("header-transparent");

            // Check to see if light mode should be applied
            if (lightMode) {
                header.classList.toggle("header-light");
            } else {
                header.classList.toggle("header-dark");
            }

            isScrolling = false;
        }
    }
}

// TODO: Implement nav color change
function enableDarkMode() {
    // Declare Variables
    var header = document.querySelector("header");
    var navTextElements = document.querySelectorAll("nav a");
    var headerLogo = document.querySelector("#header-icon img");

    // Header elements
    header.style.background = 'var(--theme-header-color-dark)';
    // Sets the text color of the nav bar
    for (var i = 0; i < navTextElements.length; i++) {
        navTextElements[i].style.color = 'var(--theme-primary-color)';
    }
    // Change Logo to white
    headerLogo.src = "/ref/icons/cag-logo-white.png";

    lightMode = false;
}