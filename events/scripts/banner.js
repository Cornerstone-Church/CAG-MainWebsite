var currentSlide = 0; // Start on slide 1
var slideDelay = 4000; // In milliseconds 5000

// Will find slides and put here after startSlideShow() is called for hidden slides.
var bannerSlides = [];
var statusBar = document.getElementById('slide-progress');


function startSlideShow() {
    // Capture remaining element slides
    bannerSlides = document.querySelectorAll(".slider-slide");
    
    // Start animation listener
    statusBar.addEventListener("animationend", animationListener, false);
    
    // Set slide one to visible
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
    statusBar.style.animationPlayState = "paused";
}

function resumeSlideShow() {
    statusBar.style.animationPlayState = "running";
}