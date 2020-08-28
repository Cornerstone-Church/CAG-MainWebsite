// Imports from HTML doc
const events = document.querySelector("#slider");

var firestore = firebase.firestore();
var storage = firebase.storage();

var currentSlide = 0; // Start on slide 1
var slideDelay = 4000; // In milliseconds 5000

// Will find slides and put here after startSlideShow() is called for hidden slides.
var bannerSlides = [];
var statusBar;


function startSlideShow() {
    // Get status bar
    statusBar = document.getElementById('slide-progress');

    // Capture remaining element slides
    bannerSlides = document.querySelectorAll(".slider-slide");

    // Start animation listener
    statusBar.addEventListener("animationend", animationListener, false);

    // Set slide one to visiable
    bannerSlides[0].style.opacity = '1';
    // Only run timer if there is 2 or more slides
    if (bannerSlides.length >= 2) {
        // Set the duration of the status bar
        statusBar.style.animationDuration = (slideDelay / 1000) + "s";

        statusBar.classList.add("slide-progress-animation");
    }

}

function animationListener(event) {
    if (event.type == "animationend") {
        // Remove the animation
        statusBar.classList.remove("slide-progress-animation");
        // Allows the animation to loop
        void statusBar.offsetWidth;
        // Reset the width
        statusBar.style.width = "0%";
        // Reapply the animation
        statusBar.classList.add("slide-progress-animation");

        // Change the slide
        changeSlide();
    }
}

function changeSlide() {
    if ((bannerSlides.length - 1) > currentSlide) {
        // Hide current slide
        bannerSlides[currentSlide].style.opacity = '0';
        // Increase current slide one slide
        currentSlide++;
        // Display new slide
        bannerSlides[currentSlide].style.opacity = '1';
    } else {
        // Hide all slides
        bannerSlides.forEach(function (slide) {
            slide.style.opacity = '0';
        });
        // Show first slide
        bannerSlides[0].style.opacity = '1';
        // Reset counter
        currentSlide = 0;
    }
}

function pauseSlideShow() {
    if (statusBar instanceof Element) {
        statusBar.style.animationPlayState = "paused";
    }
}

function resumeSlideShow() {
    if (statusBar instanceof Element) {
        statusBar.style.animationPlayState = "running";
    }
}


// Reference where the data is stored in each database
const eventsFirestore = firestore.collection("events");
const eventsStorage = storage.ref().child('events');

eventsFirestore.onSnapshot(function (querySnapshot) {
    // Clear events from #slider element
    events.innerHTML = '<div id="slide-progress"></div>\n'

    // Get current date
    var currentDate = new Date().getTime();

    // add html for each event found
    for (var i = 0, len = querySnapshot.docs.length; i < len; i++) {
        const fetchedData = querySnapshot.docs[i].data();
        // Fetch the background and foreground images for the event
        eventsStorage.child(`${fetchedData.name.replace(/ /g, '')}_bg`).getDownloadURL().then(function (bg) {
            eventsStorage.child(`${fetchedData.name.replace(/ /g, '')}_fg`).getDownloadURL().then(function (fg) {
                // Get expiration date
                var expirationDate;
                expirationDate = new Date(fetchedData.date).getTime();
                // Generate html if not expired
                if (!(typeof expirationDate === 'number' && expirationDate < currentDate)) {
                    let slide = `
                                <div class="slider-slide">
                                    <a${(typeof fetchedData.link === 'string' && fetchedData.link.length > 0) ? ` href="${fetchedData.link}"` : ''}>
                                        <img class="slide-background" src="${bg}">
                                        <img class="slide-foreground" src="${fg}" alt="${fetchedData.name}">
                                    </a>
                                </div>
                            `
                    // Add current slide to html
                    events.innerHTML += slide;
                }

                // Start slide show after last slide is generated
                if (len === document.querySelectorAll(".slider-slide").length) {
                    startSlideShow();
                }
            });
        });
    }
});