// Mechanical variables
var isScrolling = false;

// Sets the transition height for the header when scrolling.
// Units are in px.
var scrollTransitionHeight = 200;

// Enable light mode
var lightMode = false;

// Light mode styles
var lightModePrimaryColor = "#dadada";
var lightModeSecondaryColor = "#888";
var lightModeTextColor = "#111";
var lightModNavTextColor = "";

// Dark mode styles
var darkModePrimaryColor = "rgba(10, 10, 10, 1.0)";
var darkModeSecondaryColor = "#aaa";
var darkModeTextColor = "#eee";
var darkModeNavTextColor = "";


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

function enableLightMode() {
    var entirePage = document.querySelector("body");

    entirePage.style.setProperty('--theme-primary-color', lightModePrimaryColor);
    entirePage.style.setProperty('--theme-secondary-color', lightModeSecondaryColor);
    entirePage.style.setProperty('--theme-text-color', lightModeTextColor);

    lightMode = true;
}


function enableDarkMode() {
    var entirePage = document.querySelector("body");

    entirePage.style.setProperty('--theme-primary-color', darkModePrimaryColor);
    entirePage.style.setProperty('--theme-secondary-color', darkModeSecondaryColor);
    entirePage.style.setProperty('--theme-text-color', darkModeTextColor);

    lightMode = false;
}