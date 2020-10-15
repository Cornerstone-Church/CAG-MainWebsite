const distance = window.scrollY;
var sectionOne = document.getElementById('section-one');
var sectionTwo = document.getElementById('section-two');
var sectionThree = document.getElementById('section-three');
var sectionFour = document.getElementById('section-four');
var sectionFive = document.getElementById('section-five');
var footer = document.getElementById('footer');

var locationY;


window.addEventListener("load", scrollLoop, false); 

function setTransform(yPos, element) {
    element.style.transform = `translateY(${yPos}px)`;
}

function setOpacity(sOp, eOp, steps, element) {

}

function scrollLoop() {
    locationY = window.scrollY;

    setTransform(locationY * .9, sectionOne);
    setTransform(locationY * -.1, sectionThree);

    requestAnimationFrame(scrollLoop);
}