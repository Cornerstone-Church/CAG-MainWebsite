var offlineError = document.getElementById('offline-error');
var streamIsLive = false;

// Sunday Service times
var sundayDay = 0 ;// Sunday
var sundayStartS1 = [9, 00];
var sundayStartS2 = [11, 00];
var sundayStartS3 = [18, 00];

// Noon Prayer Times
var noonPrayerStart = [12, 00];

// Tuesday Night Prayer
var tuesDay = 2;
var tuesPrayerStart = [19, 00];

var friDay = 5;
var friStartTime = [19, 00];

// If if the service is offline
if (offlineError != null) {
    // Enable offline mode
    offlineMode();
    
    // Sunday Services
    countdownTimer(sundayStartS1, sundayDay);
    countdownTimer(sundayStartS2, sundayDay);
    countdownTimer(sundayStartS3, sundayDay);
    
    // Prayer Services
    countdownTimer(noonPrayerStart);
    countdownTimer(tuesPrayerStart, tuesDay);

    // Good Friday Service
    countdownTimer(friStartTime, friDay);
}


function offlineMode() {
    var player = document.getElementById('live-iframe');
    var offlineMesge = document.getElementById('stream-offline');
    player.style.display = 'none';
    offlineMesge.style.display = 'block';
}

function countdownTimer(time, day) {
    var counter = setInterval(() => {
        var startCountdown = true;

        var countdownElement = document.getElementById('countdown');
        var clockElement = document.querySelector("#countdown #clock");
        var offlineMessage = document.getElementById('stream-offline');

        var currentDate = new Date();
        var dayUTC = currentDate.getUTCDay();
        var hourUTC = (currentDate.getUTCHours() * 60) * 60;
        var minUTC = currentDate.getUTCMinutes() * 60;
        var secUTC = currentDate.getUTCSeconds();
        var currentTimeInSec = hourUTC + minUTC + secUTC;

        // Time the stream starting message will show in seconds
        var streamStartingTime = 120;

        // Convert to UTC
        var endTime = [(time[0] + 4), time[1]];
        var endTimeHour = (endTime[0] * 60) * 60;
        var endTimeMin = endTime[1] * 60;
        var endTimeInSec = endTimeHour + endTimeMin;

        // Find the remaining time in seconds
        var remainingTime = endTimeInSec - currentTimeInSec;

        if (day != null && day != dayUTC) {
            startCountdown = false;
        } else if (remainingTime > 600 || remainingTime < (streamStartingTime * -1)) {
            startCountdown = false;
        } else {
            startCountdown = true;
            offlineMessage.style.display = 'none';
            countdownElement.style.display = 'block';
        }

        if (startCountdown) {

            // Convert the remaining seconds into mins
            var remainingMin = Math.trunc(remainingTime / 60);

            // Get the remaining seconds
            var remainingSec = 60 - secUTC;

            // Fixes countdown not going to 00
            if(secUTC == 0) {
                remainingSec = 0;
            }

            console.log(secUTC);

            if (remainingMin != 0) {
                clockElement.innerHTML = remainingMin + ':' + ('0' + remainingSec).slice(-2);
            } else {
                clockElement.innerHTML = remainingSec;
            }

            // If countdown is 5 mins or less
            if (currentTimeInSec >= (endTimeInSec - 300)) {
                // Refresh Page
                setTimeout(() => {
                    location.reload();
                }, 30000);

                // If countdown is finished
                if (currentTimeInSec >= endTimeInSec) {
                    clockElement.innerHTML = "Stream starting soon...";
                    
                    // Remove countdown after 2 mins
                    if (currentTimeInSec >= (endTimeInSec + streamStartingTime)) {
                        countdownElement.style.display = 'none';
                        // Stop countdown
                        clearInterval(counter);
                    }
                }
            }
        }

    }, 1000);
}

/** Generates the live chat link on youtube based on the videoID
 * 
 * @param {string} videoId 
 */
function getChatLink(videoId) {
    var chatLink = 'https://www.youtube.com/live_chat?v=';
    var fullLink = chatLink.concat(videoId, '&embed_domain=', window.location.hostname);
    document.getElementById("live-chat").src = fullLink;
}