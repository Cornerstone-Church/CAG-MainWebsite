var shouldRun = true;
var currentSlide = 2; // Starts on 2 because 1 is shown by default when page loads
var slideDelay = 5000; // In miliseconds

var slideOne = document.getElementById("slider-slide1");
var slideTwo = document.getElementById("slider-slide2");
var slideThree = document.getElementById("slider-slide3");

function startSlideShow() {
    slideOne.style.opacity = 1;
    window.setInterval(changeSlide, slideDelay);
}

function changeSlide() {
    if (shouldRun) {

        if (currentSlide == 1) {
            slideOne.style.opacity = 1;
            slideTwo.style.opacity = 0;
            slideThree.style.opacity = 0;
            currentSlide += 1;
            return;
        }

        if (currentSlide == 2) {
            slideTwo.style.opacity = 1;
            slideOne.style.opacity = 0;
            slideThree.style.opacity = 0;
            currentSlide += 1;
            return;
        }

        if (currentSlide == 3) {
            slideThree.style.opacity = 1;
            slideOne.style.opacity = 0;
            slideTwo.style.opacity = 0;
            currentSlide = 1;
            return;
        }
    }
}