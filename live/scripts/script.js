var offlineError = document.getElementById('offline-error');

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

offlineMode();

// Sunday Services
countdownTimer(sundayStartS1, sundayDay);
countdownTimer(sundayStartS2, sundayDay);
countdownTimer(sundayStartS3, sundayDay);

// Prayer Services
countdownTimer(noonPrayerStart);
countdownTimer(tuesPrayerStart, tuesDay);

if (offlineError != null) {
    offlineMode();
}

function offlineMode() {
    var player = document.getElementById('live-iframe');
    var offlineMesge = document.getElementById('stream-offline');
    player.style.display = 'none';
    offlineMesge.style.display = 'inline';
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
            countdownElement.style.display = 'inline';
        }

        if (startCountdown) {

            // Convert the remaining seconds into mins
            var remainingMin = Math.trunc(remainingTime / 60);

            // Get the remaining seconds
            var remainingSec = 60 - secUTC;

            if (remainingMin != 0) {
                // TODO: Make seconds always show 2 digits
                clockElement.innerHTML = remainingMin + ':' + remainingSec;
            } else {
                clockElement.innerHTML = remainingSec;
            }

            // If countdown is finished
            if (currentTimeInSec >= endTimeInSec) {
                clockElement.innerHTML = "Stream starting soon...";

                // TODO: Refresh Page HERE
                setTimeout(() => {
                    location.reload();
                }, 10000)
                
                // Remove countdown after 2 mins
                if (currentTimeInSec >= (endTimeInSec + streamStartingTime)) {
                    countdownElement.style.display = 'none';
                    // Stop countdown
                    clearInterval(counter);
                }
            }
        }

    }, 1000);
}
