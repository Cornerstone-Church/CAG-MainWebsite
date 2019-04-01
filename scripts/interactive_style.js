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

    // Captures scrolling position
    // var scrollPosition = parallaxContainer.scrollTop;
    var scrollPosition = window.scrollY;

    // If the scroll position is greater than the set height
    if (scrollPosition >= scrollTransitionHeight) {
        // Make sure we only execute once when scrolling
        if (!isScrolling) {
            header.classList.add("header-blur");
            header.classList.remove("header-transparent");
            enableNormalText();

            isScrolling = true;
        }
    } else {
        if (isScrolling) {
            header.classList.remove("header-blur");
            header.classList.add("header-transparent");
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

    // Make text light
    enableLightText();

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
    var mobileButton = document.querySelectorAll('#hamburger-button span');

    if (!mobileNavVissable) {
        // mobileNav.style.display = 'inline';
        mobileNav.style.animationName = 'MobileNavMenu-In';

        // Modify the menu button
        mobileButton[0].style.opacity = '0';
        mobileButton[1].style.transform = 'rotate(45deg)';
        mobileButton[2].style.transform = 'rotate(-45deg)';
        mobileButton[3].style.opacity = '0';


        mobileNavVissable = true;
    } else {
        // mobileNav.style.display = 'none';
        mobileNav.style.animationName = 'MobileNavMenu-Out';

        // Modify the menu button
        mobileButton[0].style.opacity = '1';
        mobileButton[1].style.transform = 'rotate(0deg)';
        mobileButton[2].style.transform = 'rotate(0deg)';
        mobileButton[3].style.opacity = '1';
        
        mobileNavVissable = false;
    }
}