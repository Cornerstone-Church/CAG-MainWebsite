checkDate();
checkPrayer();

console.log('Stream_Check: Active')

function checkDate() {
    var currentDate = new Date();
    var currentHour = currentDate.getUTCHours();
    var currentDay = currentDate.getUTCDay();

    var startTime = 13; // 13 (9:00am EST)
    var endTime = 16; // 16 (12:00pm EST)
    var streamDay = 0 // 0 (Sunday)

    if (currentDay == streamDay) {
        if (currentHour >= startTime && currentHour < endTime) {
            window.location.replace("/live/");
        }
    }
    setTimeout(checkDate, 10000);
}

function checkPrayer() {
    var currentDate = new Date();
    var currentHour = currentDate.getUTCHours();
    var currentDay = currentDate.getUTCDay();
    var currentMin = currentDate.getUTCMinutes();

    var startHourTime = 16; // 16 (12:00pm EST)
    var startMinTime = 00; // 00
    var endHourTime = 16; // 17 (12:30pm EST)
    var endMinTime = 30; // 30
    // 0 (Sunday)

    if (currentHour >= startHourTime && currentHour <= endHourTime) {
        if (currentMin >= startMinTime && currentMin < endMinTime) {
            window.location.replace("/live/");
        }
    }

    setTimeout(checkPrayer, 10000);
}