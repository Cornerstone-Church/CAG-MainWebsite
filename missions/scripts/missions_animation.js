var debug = document.getElementById('debug');
var sectionOne = document.getElementById('section1');
var sectionTwo = document.getElementById('section2');
var sectionThree = document.getElementById('section3');

function scrolling() {
    var windowBottom = window.scrollY + (window.innerHeight / 2);
    if (sectionOne.offsetTop <= windowBottom) {
        sectionOne.classList.add('text-animation');
        sectionOne.classList.add('background-animation');
    }

    if (sectionTwo.offsetTop <= windowBottom) {
        sectionTwo.classList.add('text-animation');
        sectionTwo.classList.add('background-animation');
    }

    if (sectionThree.offsetTop <= windowBottom) {
        sectionThree.classList.add('text-animation');
        sectionThree.classList.add('background-animation');
    }

    debug.innerHTML = windowBottom;
}