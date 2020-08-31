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
    var eventPromises = [];

    // add promises to array
    querySnapshot.forEach(doc => {
        let data = doc.data();
        eventPromises.push(new Promise(function (resolve) {
            Promise.all([
                eventsStorage.child(`${data.name.replace(/ /g, '')}_bg`).getDownloadURL(),
                eventsStorage.child(`${data.name.replace(/ /g, '')}_fg`).getDownloadURL()
            ]).then(function (images) {
                // Send the event data and images back with a promise.
                resolve({
                    ...data,
                    bg: images[0],
                    fg: images[1]
                });
            });
        }));
    });

    Promise.all(eventPromises).then(function (eventData) {
        // Get current date
        var currentDate = new Date().getTime();
        // Clear events from #slider element
        events.innerHTML = '<div id="slide-progress"></div>\n';

        // add html for each event found
        eventData.forEach(function (data) {
            // Get expiration date
            var expirationDate;
            expirationDate = new Date(data.date).getTime();
            // Generate html if not expired
            if (!(typeof expirationDate === 'number' && expirationDate < currentDate)) {
                // Add current slide to html
                events.innerHTML += `
                    <div class="slider-slide">
                        <a${(typeof data.link === 'string' && data.link.length > 0) ? ` href="${data.link}"` : ''}>
                            <img class="slide-background" src="${data.bg}">
                            <img class="slide-foreground" src="${data.fg}" alt="${data.name}">
                        </a>
                    </div>
                `;
            }
        });

        startSlideShow();
    });
});