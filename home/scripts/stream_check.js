// Get current date
var date = new Date();

// Sunday Service times
var sundayDay = 0 // Sunday
var sundayStartS1 = [8, 59];
var sundayEndS1 = [10, 10];
var sundayStartS2 = [10, 59];
var sundayEndS2 = [12, 10];

// Tool Tip code
var date = new Date();
var toolTipStart = [12, 00];
var toolTipEnd = [12, 30];
toolTipCheck(date, toolTipStart, toolTipEnd);

// Run checker
liveTrigger();

// A function that holds all check functions
function liveTrigger() {
    // Sunday Services
    checkLive(date, sundayStartS1, sundayEndS1, sundayDay);
    checkLive(date, sundayStartS2, sundayEndS2, sundayDay);
}

/** Check Live Function
 * 
 * @param {Date} currentDate 
 * @param {Array} startTime 
 * @param {Array} endTime 
 * @param {int} day Optional
 */
function checkLive(currentDate, startTime, endTime, day) {
    // Should go live
    var goLive = false;
    var shouldCheckDay = false;
    var cStartTime, cEndTime, cCurrentTime;

    // Convert current date
    var currentHour = currentDate.getUTCHours();
    var currentDay = currentDate.getUTCDay();
    var currentMin = currentDate.getUTCMinutes();

    // Convert hour of start and end to UTC
    var startHourTimeUTC = startTime[0] + 4;
    var endHourTimeUTC = endTime[0] + 4;

    // Check if day should be calculated
    if (day != null) {
        shouldCheckDay = true;
    }

    // Convert timing into minutes
    cStartTime = (startHourTimeUTC * 60) + startTime[1];
    cEndTime = (endHourTimeUTC * 60) + endTime[1];
    cCurrentTime = (currentHour * 60) + currentMin;

    // Check if should go live
    if (shouldCheckDay) {
        if (currentDay == day) {
            if (cCurrentTime >= cStartTime) {
                if (cCurrentTime <= cEndTime) {
                    goLive = true;
                }
            }
        }
    } else {
        if (cCurrentTime >= cStartTime) {
            if (cCurrentTime <= cEndTime) {
                goLive = true;
            }
        }
    }

    if (goLive) {
        window.location.replace('/live/');
    }
}

function toolTipCheck(currentDate, startTime, endTime, day) {

    // TODO: Add the prayer TV logic here

    // Should go live
    var goLive = false;
    var shouldCheckDay = false;
    var cStartTime, cEndTime, cCurrentTime;

    // Convert current date
    var currentHour = currentDate.getUTCHours();
    var currentDay = currentDate.getUTCDay();
    var currentMin = currentDate.getUTCMinutes();

    // Convert hour of start and end to UTC
    var startHourTimeUTC = startTime[0] + 4;
    var endHourTimeUTC = endTime[0] + 4;

    // Check if day should be calculated
    if (day != null) {
        shouldCheckDay = true;
    }

    // Convert timing into minutes
    cStartTime = (startHourTimeUTC * 60) + startTime[1];
    cEndTime = (endHourTimeUTC * 60) + endTime[1];
    cCurrentTime = (currentHour * 60) + currentMin;

    // Check if should go live
    if (shouldCheckDay) {
        if (currentDay == day) {
            if (cCurrentTime >= cStartTime) {
                if (cCurrentTime <= cEndTime) {
                    goLive = true;
                }
            }
        }
    } else {
        if (cCurrentTime >= cStartTime) {
            if (cCurrentTime <= cEndTime) {
                goLive = true;
            }
        }
    }

    if (goLive) {
        var toolTipElement = document.querySelector('#banner-buttons #tool-tip');
        toolTipElement.classList.add('tool-tip-in');

        // Reroute live button to prayer tv
        var liveButton = document.getElementById("live-button");
        liveButton.setAttribute('href', '/live/prayertv/');
    }
}