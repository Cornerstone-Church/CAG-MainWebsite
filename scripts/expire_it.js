/* 
    ##############
    # HOW TO USE #
    ##############

    Classes:
    'expires' (Required) - Put on parent element that will hide if expired.
    'expire-date' (Required) - On each element that will expire. Element will expire on the entered date. FORMAT: <YEAR>-<MONTH>-<DAY> 2019-04-12
    'expire-empty' (Optional) - An element that will notify user that everything is expired. Will be displayed inline.

    1. Add function expireIt() to body onload.
    2. Add the 'expires' class on each item that can expire.
    3. Add the 'expire-date' class inside each element in the correct format.

    Example:
    <div class="expires">
        <div class="expire-date">2019-02-11</div>
        Content goes here...
    </div>

    BANNER USE:
    In order to use on banners:
    1. Make sure expireIt() is loaded before startSlideShow() in onload body section.
    2. Wrap entire slide in a hold div:
    <div class="expires">
        <div class="expire-date"></div>
        <div id="slide1">
            Slide Content ...
        </div>
    </div>
 */

// Capture all expireElements that can expire
var expireElements = document.querySelectorAll(".expires");
var expireDates = document.querySelectorAll(".expire-date");
var expireEmpty = document.querySelector("#expire-empty")


/* Checks to see if any element on the page expired. Must be loaded on page load. */
function expireIt() {
    var TAG = "expireIt(): "
    var currentTime = new Date().getTime();
    var currentIndex = 0;
    var expiredItems = 0;

    expireDates.forEach((element) => {
        // Format for the Date class
        var dateCaptured = new Date(element.innerHTML).getTime();
        // Add number of milliseconds in a day to show element on expiration date
        // dateCaptured += 86400000;

        if ((dateCaptured) < currentTime) {
            // Element expired
            expiredItems++;
            expireElements[currentIndex].remove(expireElements[currentIndex]);
        }
        currentIndex++;
    });

    // Check if all items are expired
    if (expireEmpty != null) {
        if (expiredItems == expireElements.length) {
            expireEmpty.style.display = 'inline';
        }
    }
}