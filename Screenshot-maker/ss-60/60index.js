function addTime() {
    var time1 = document.getElementById("textInput1").value;
    var time2 = document.getElementById("textInput3").value;

    // Convert time 1 to 24-hour format
    var time1Array = time1.split(' ');
    var time1Hour = parseInt(time1Array[0].split(':')[0]);
    var time1Minute = parseInt(time1Array[0].split(':')[1]);
    if (time1Array[1] === "PM" && time1Hour !== 12) {
        time1Hour += 12;
    } else if (time1Array[1] === "AM" && time1Hour === 12) {
        time1Hour = 0;
    }

    // Convert time 2 to 24-hour format
    var time2Array = time2.split(':');
    var time2Hour = 0;
    var time2Minute = parseInt(time2Array[0]);
    var time2Second = parseInt(time2Array[1]);

    // Add times
    var totalSeconds = (time1Hour * 3600 + time1Minute * 60) + (time2Minute * 60 + time2Second);
    var totalMinutes = Math.floor(totalSeconds / 60) % 60;
    var totalHours = Math.floor(totalSeconds / 3600) % 24;
    var amPm = totalHours >= 12 ? 'PM' : 'AM';
    if (totalHours >= 13) {
        totalHours -= 12;
    } else if (totalHours === 0) {
        totalHours = 12;
    }

    // Convert result to hh:mm AM/PM format
    var result = totalHours.toString().padStart(2, '0') + ':' + totalMinutes.toString().padStart(2, '0') + ' ' + amPm;

    document.getElementById("result").innerHTML = result;
}
