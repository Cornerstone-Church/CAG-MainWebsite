var slides = [document.getElementById('slide1'), document.getElementById('slide2'), document.getElementById('slide3')];
var slideContent = [document.getElementById('slide-content-1'), document.getElementById('slide-content-2'), document.getElementById('slide-content-3')];

// Whether slides should run their animation
var slide1animation = true;
var slide2animation = true;
var slide3animation = true;


function onLoad() {
    // Get slides in the right position and set transparancy to 0 except the first slide
    // getSlide(0).style.top = getContainerOffset() + 'px';
    slides.forEach(function (item, index) {
        item.style.top = getContainerOffset() + 'px';
        getSlide(0).style.opacity = '1';
    });
}

function resizingWindow() {
    // If window is resized at the top of the page update the position of the slide elements
    if (getContainerOffset() >= getScrollPos()) {
        var position = getContainerOffset() - getScrollPos() + "px";
        slides.forEach(function (item, index) {
            item.style.top = position;
        });
    }

    // TODO: Fix if resized at the bottom of the slideshow
}

function scrollingSlideShow() {
    // Move slides while scrolling as long as we have not scrolled to the image
    if (getContainerOffset() >= getScrollPos()) {
        var position = getContainerOffset() - getScrollPos() + "px";
        slides.forEach(function (item, index) {
            item.style.top = position;
        });

        // Wrap in if so its not running over and over
        if (!slide1animation || !slide2animation || !slide3animation) {
            slideContent.forEach(function (item, index) {
                item.style.opacity = '0';
                slide1animation = true;
                slide2animation = true;
                slide3animation = true;
            });
        }

    } else if (getScrollPos() <= getContainerOffset() + getWindowHeight()) {
        // Figure out when to fade in each slide
        getSlide(1).style.opacity = '0';
        if (slide1animation) {
            slideContent[0].style.opacity = '1';
            slide1animation = false;
        }
    } else if (getScrollPos() <= getContainerOffset() + (getWindowHeight() * 2)) {
        getSlide(1).style.opacity = '1';
        getSlide(2).style.opacity = '0';
        if (slide2animation) {
            slideContent[1].style.opacity = '1';
            slide2animation = false;
        }
    } else if (getScrollPos() <= getContainerOffset() + (getWindowHeight() * 3)) {
        getSlide(2).style.opacity = '1';
        if (slide3animation) {
            slideContent[2].style.opacity = '1';
            slide3animation = false;
        }
        // removes a srolling up glitch
        slides.forEach(function (item, index) {
            item.style.top = '0px';
        });
    } else {
        slides.forEach(function (item, index) {
            var position = getContainerOffset() + (getWindowHeight() * 3) - getScrollPos() + 'px';
            item.style.top = position;
        });
    }
}

function getSlide(index) {
    return slides[index];
}

function getImageOffset(index) {
    return slides[index].offsetTop;
}

function getContainerOffset() {
    return document.getElementById('slideshowContainer').offsetTop;
}

function getDebug() {
    return document.getElementById('debug');
}

function getScrollPos() {
    return window.scrollY;
}

function getWindowHeight() {
    return window.innerHeight;
}