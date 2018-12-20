function setVideoBannerSize() {
    var windowHeight = window.innerHeight;
    var windowWidth = window.innerWidth;
    var videoBanner = document.getElementById("video_banner");

    var calculation = windowWidth / windowHeight;

    // 1.777 is the amount of the width / height for 16:9 aspect
    if (calculation.toFixed(3) <= 1.777) {
        videoBanner.style.height = "100vh";
        videoBanner.style.width = "auto";
    } else {
        videoBanner.style.height = "auto";
        videoBanner.style.width = "100vw";
    }
}