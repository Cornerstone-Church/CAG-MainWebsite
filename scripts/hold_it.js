/* 
    ##############
    # HOW TO USE #
    ##############

    Classes:
    'hold' (Required) - Put on parent element that will hide until date is reached.
    'hold-date' (Required) - Element will display on the given date. FORMAT: <YEAR>-<MONTH>-<DAY> 2019-04-12

    1. Add function holdIt() to body onload.
    2. Add the 'hold' class on each item will be held.
    3. Add the 'hold-date' class inside each element in the correct format.

    Example:
    <div class="hold">
        <div class="hold-date">2019-02-11</div>
        Content goes here...
    </div>

    BANNER USE:
    In order to use on banners:
    1. Make sure holdIt() is loaded before startSlideShow() in onload body section.
    2. Wrap entire slide in a hold div:
    <div class="hold">
        <div class="hold-date"></div>
        <div id="slide1">
            Slide Content ...
        </div>
    </div>
 */

//  Capture all holdElements that are held
var holdElements = document.querySelectorAll(".hold");
var holdDate = document.querySelectorAll(".hold-date");

// Checks if there are any holdElements to hold from rendering
function holdIt() {
    var TAG = "holdIt(): "
    var currentTime = new Date().getTime();
    var currentIndex = 0;

    holdDate.forEach((element) => {
        // Capture date from element
        var dateCaptured = new Date(element.innerHTML).getTime();

        // See what holdElements can be shown
        if (dateCaptured < currentTime) {
            holdElements[currentIndex].classList.remove("hold");
        }

        // Increase the index
        currentIndex++;
    });

    // Will remove any element that still has the hold class
    holdElements = document.querySelectorAll(".hold");
    holdElements.forEach((element) => {
        element.remove(element);
    });
}