// Import elements
var videoWrapper = document.getElementById("video-wrapper");
var videoOne = document.getElementById("video1");
var videoTwo = document.getElementById("video2");
var videoThree = document.getElementById("video3");
var videoFour = document.getElementById("video4");
// Thumbnails
var thumbOne = document.getElementById("thumb1");
var thumbTwo = document.getElementById("thumb2");
var thumbThree = document.getElementById("thumb3");
var thumbFour = document.getElementById("thumb4");

function showVideoOne() {
    // Thumbnail Toggle
    thumbOne.classList.add("selected");
    thumbTwo.classList.remove("selected");
    thumbThree.classList.remove("selected");
    thumbFour.classList.remove("selected");
    // Load Content
    videoOne.style.display = "inline";
    videoTwo.style.display = "none";
    videoThree.style.display = "none";
    videoFour.style.display = "none";
}

function showVideoTwo() {
    // Thumbnail Toggle
    thumbOne.classList.remove("selected");
    thumbTwo.classList.add("selected");
    thumbThree.classList.remove("selected");
    thumbFour.classList.remove("selected");

    // Load Element
    videoOne.style.display = "none";
    videoTwo.style.display = "inline";
    videoThree.style.display = "none";
    videoFour.style.display = "none";
}

function showVideoThree() {
    // Thumbnail Toggle
    thumbOne.classList.remove("selected");
    thumbTwo.classList.remove("selected");
    thumbThree.classList.add("selected");
    thumbFour.classList.remove("selected");

    // Load Element
    videoOne.style.display = "none";
    videoTwo.style.display = "none";
    videoThree.style.display = "inline";
    videoFour.style.display = "none";
}

function showVideoFour() {
    // Thumbnail Toggle
    thumbOne.classList.remove("selected");
    thumbTwo.classList.remove("selected");
    thumbThree.classList.remove("selected");
    thumbFour.classList.add("selected");

    // Load Element
    videoOne.style.display = "none";
    videoTwo.style.display = "none";
    videoThree.style.display = "none";
    videoFour.style.display = "inline";
}