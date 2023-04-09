
    function addTimeAndDuration() {
      var time1 = document.getElementById("textInput1").value; // First time in AM/PM format
      var time2 = document.getElementById("textInput3").value; // Second time in hh:mm:ss format
      
      // Parse the first time into hours, minutes, and AM/PM indicator
      var time1Arr = time1.match(/(\d+):(\d+)\s*(AM|PM)/i);
      var hours1 = parseInt(time1Arr[1]);
      var minutes1 = parseInt(time1Arr[2]);
      var ampm1 = time1Arr[3];

      if (ampm1.toUpperCase() === 'PM' && hours1 !== 12) {
        hours1 += 12;
      } else if (ampm1.toUpperCase() === 'AM' && hours1 === 12) {
        hours1 = 0;
      }
      
      // Parse the second time into hours, minutes, and seconds
      var [hours2, minutes2, seconds2] = time2.split(':').map(Number);
      
      // Calculate the total number of seconds
      var totalSeconds = (hours1 + hours2) * 3600 + (minutes1 + minutes2) * 60 + seconds2;
      
      // Convert the total number of seconds back to AM/PM format
      var ampm = totalSeconds >= 43200 ? 'PM' : 'AM';
      if (totalSeconds < 0) {
        totalSeconds += 86400;
      }
      var hours = Math.floor(totalSeconds / 3600) % 12 || 12;
      var minutes = Math.floor((totalSeconds % 3600) / 60);
      
      // Format the output string with leading zeros as necessary
      var output = pad(hours) + ':' + pad(minutes) + ' ' + ampm;

      // Display the result
      document.getElementById("result").innerHTML = output;
    }

    function pad(n) {
      return n < 10 ? '0' + n : n;
    }
