// Imports from HTML doc
const events = document.querySelector("#slider");

var firestore = firebase.firestore();
var storage = firebase.storage();

var currentSlide = 0; // Start on slide 1
var slideDelay = 4000; // In milliseconds 5000

// Will find slides and put here after startSlideShow() is called for hidden slides.
var bannerSlides = [];
var statusBar = document.getElementById('slide-progress');


function startSlideShow() {
    // Start animation listener
    statusBar.addEventListener("animationend", animationListener, false);

    // Set slide one to visiable
    bannerSlides[0].style.opacity = '1';

    // Only run timmer if there is 2 or more slides
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
    statusBar.style.animationPlayState = "paused";
}

function resumeSlideShow() {
    statusBar.style.animationPlayState = "running";
}


// Reference where the data is stored in the database
const eventsFirestore = firestore.collection("events");

const eventsStorage = storage.ref().child('events');

function getCurrentEvents() {
    // Clear events from #slider element
    events.innerHTML = '<div id="slide-progress"></div>\n'

    eventsFirestore.onSnapshot(function (querySnapshot) {
        // function to run for each event
        querySnapshot.forEach(function (doc) {
            // Grab document data
            const fetchedData = doc.data();

            // Fetch the background and foreground for the event
            eventsStorage.child(`${fetchedData.title.replace(/ /g, '')}-bg`).getDownloadURL().then(function (background) {
                eventsStorage.child(`${fetchedData.title.replace(/ /g, '')}-fg`).getDownloadURL().then(function (foreground) {

                    // Generate html
                    var slide = events.innerHTML += `
                        <div class="slider-slide">
                            <a${(fetchedData.link.length > 0) ? ` href="${fetchedData.link}"` : ''}>
                                <img class="slide-background" src="${background}">
                                <img class="slide-foreground" src="${foreground}" alt="${fetchedData.title}">
                            </a>
                        </div>
                    `

                    if (fetchedData.date.length > 0) {
                        slide = `
                            <div class="expires">
                                <div class="expire-date">${fetchedData.date}</div>
                                ${slide}
                            </div>
                        `
                    }

                    events.innerHTML += slide;

                    // Capture remaining element slides
                    bannerSlides = document.querySelectorAll(".slider-slide");
                });
            });

        });
    });
}