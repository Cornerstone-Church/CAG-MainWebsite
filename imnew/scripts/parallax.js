const distance = window.scrollY;
var sectionOne = document.getElementById('section-one');
var sectionTwo = document.getElementById('section-two');
var sectionThree = document.getElementById('section-three');
var sectionFour = document.getElementById('section-four');
var sectionFive = document.getElementById('section-five');
var footer = document.getElementById('footer');


var sectionFiveOffset;

var windowHeight;
var locationY;


window.addEventListener("load", scrollLoop, false); 

function setTransform(yPos, element) {
    element.style.transform = `translateY(${yPos}px)`;
}

function visibility(visibilityMarker, locationY, element) {
    // Makes element visiable
    if (visibilityMarker <= locationY) {
        makeVisible(element);
    } else {
        makeHidden(element);
    }
}

function makeVisible(element) {
    element.style.visibility = 'visible';
}

function makeHidden(element) {
    element.style.visibility = 'hidden';
}


function scrollLoop() {
    windowHeight = window.innerHeight;
    locationY = window.scrollY;
    sectionFiveOffset = windowHeight * 4.35;

    setTransform(locationY * .95, sectionOne);
    setTransform(locationY * -.1, sectionThree);
    setTransform((locationY * 1.05) - sectionFiveOffset, sectionFive);

    visibility(windowHeight * 2, locationY, sectionFive);

    requestAnimationFrame(scrollLoop);
}