var shouldRun = true;
var currentSlide = 0; // Start on slide 1
var slideDelay = 4000; // In miliseconds 5000

var timerId, pauseTime;

var bannerSlides = document.querySelectorAll(".slider-slide");
var statusBar = document.getElementById('slide-progress');

function startSlideShow() {
    // Set slide one to visiable
    bannerSlides[0].style.opacity = '1';
    // Set the duration of the status bar
    statusBar.style.animationDuration = (slideDelay / 1000) + "s";
    // Start Status Bar
    statusBar.classList.add('startStatusBarAnimation');

    // Start Show
    // window.setInterval(changeSlide, slideDelay);
    startTimer(changeSlide, slideDelay);

}

function changeSlide() {
    if (shouldRun) {
        if ((bannerSlides.length - 1) > currentSlide) {
            // Hide current slide
            bannerSlides[currentSlide].style.opacity = '0';
            // Increase current slide one slide
            currentSlide++;
            // Display new slide
            bannerSlides[currentSlide].style.opacity = '1';
        } else {
            // Hide all slides
            bannerSlides.forEach(function(slide) {
                slide.style.opacity = '0';
            });
            // Show first slide
            bannerSlides[0].style.opacity = '1';
            // Reset counter
            currentSlide = 0;
        }
    }
}

function pauseSlideShow() {
    shouldRun = false;
    statusBar.classList.remove('startStatusBarAnimation');
    window.clearInterval(timerId);
}

function resumeSlideShow() {
    shouldRun = true;
    statusBar.classList.add('startStatusBarAnimation');
    startTimer(changeSlide, slideDelay);
}

function startTimer(callback, delay) {
    timerId = window.setInterval(callback, delay);
}