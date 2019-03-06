/**
 * IMPORTANT!!!! YOU MUST IMPORT THIS SCRIPT ON EVERY PAGE!
 */


// Mechanical variables
var isScrolling = false;

// Sets the transition height for the header when scrolling.
// Units are in px.
var scrollTransitionHeight = 200;

// Enable light mode
var lightMode = true;

var mobileNavVissable = false;


function headerVideo() {
    var header = document.querySelector("header");
    header.classList.add('header-transparent');
    enableLightText();
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
            enableNormalText();

            isScrolling = true;
        }
    } else {
        if (isScrolling) {
            header.classList.toggle("header-blur");
            header.classList.toggle("header-transparent");
            enableLightText();

            isScrolling = false;
        }
    }
}


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


function enableLightText() {
    // Declare Variables
    var navTextElements = document.querySelectorAll("nav a");
    var headerLogo = document.querySelector("#header-icon img");
    var mobileNavButton = document.querySelectorAll('#hamburger-button span')
    var mobileNavBackdrop = document.getElementById('mobile-nav');

    // Sets the text color of the nav bar
    for (var i = 0; i < navTextElements.length; i++) {
        navTextElements[i].style.color = 'var(--theme-primary-color)';
    }

    // Changes the color of the mobile nav button
    mobileNavButton.forEach(function(element) {
        element.style.background = "var(--theme-primary-color)";
    });

    mobileNavBackdrop.style.background = 'rgba(0, 0, 0, 0.7)';

    // Change Logo to white
    headerLogo.src = "/ref/icons/cag-logo-white.png";
}


function enableNormalText() {
    // Declare Variables
    var navTextElements = document.querySelectorAll("nav a");
    var headerLogo = document.querySelector("#header-icon img");
    var mobileNavButton = document.querySelectorAll('#hamburger-button span')
    var mobileNavBackdrop = document.getElementById('mobile-nav');


    // Sets the text color of the nav bar
    for (var i = 0; i < navTextElements.length; i++) {
        navTextElements[i].style.color = 'var(--theme-nav-text)';
    }

    mobileNavButton.forEach(function(element) {
        element.style.background = 'var(--theme-nav-text)';
    });

    mobileNavBackdrop.style.background = 'var(--theme-header-color-light)';

    // Change Logo to white
    headerLogo.src = "/ref/icons/cag-logo-left.png";
}


// Enables navigation toggle on mobile
function toggleMobileNav() {
    var mobileNav = document.getElementById('mobile-nav');

    if (!mobileNavVissable) {
        mobileNav.style.display = 'inline';
        mobileNavVissable = true;
    } else {
        mobileNav.style.display = 'none';
        mobileNavVissable = false;
    }
}