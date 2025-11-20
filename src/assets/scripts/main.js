// Javascript goes here
console.log('up to zero!');

// Job cards
let acc = document.querySelectorAll(".list-title");


for (let i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    let panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

// Date/Time formatting helper
function DateTimePrettyPrint () {
  document.querySelectorAll('.news-api-pubtime').forEach( dtime =>{
    // Feed in date-time returned, parse it to local time, then re-write
    // PS I hate this. New object every iteration? Blegh. I'll find a better way to do this.
    let dTime = new Date(dtime.innerHTML);
    // Get numeric Month. Need to pretty print it.
    let dTimeMonth = dTime.getMonth();
    let dTimeHour = dTime.getHours().toString();
    let dTimeMinutes = dTime.getMinutes().toString();
    let dTimeDate = dTime.getDate().toString();
    let dTimeMonthFmt, dTimeHourFmt, dTimeMinutesFmt = "";
    let dTimeMeridian = "AM";
    switch (dTimeMonth) {
      case 0:
        dTimeMonthFmt = "Jan";
        break;
      case 1:
        dTimeMonthFmt = "Feb";
        break;
      case 2:
        dTimeMonthFmt = "Mar";
        break;
      case 3:
        dTimeMonthFmt = "Apr";
        break;
      case 4:
        dTimeMonthFmt = "May";
        break;
      case 5:
        dTimeMonthFmt = "Jun";
        break;
      case 6:
        dTimeMonthFmt = "Jul";
        break;
      case 7:
        dTimeMonthFmt = "Aug";
        break;
      case 8:
        dTimeMonthFmt = "Sep";
        break;
      case 9:
        dTimeMonthFmt = "Oct";
        break;
      case 10:
        dTimeMonthFmt = "Nov";
        break;
      case 11:
        dTimeMonthFmt = "Dec";
        break;
    }
    dTimeHourFmt = dTimeHour.padStart(2, "0");
    dTimeMinutesFmt = dTimeMinutes.padStart(2, "0");
    if (dTimeHour > 12) {
      dTimeHourFmt -= 12;
      dTimeHourFmt.toString().padStart(2, "0");
      dTimeMeridian = "PM";
    }
    if (dTimeHour == 0) {
      dTimeHourFmt = "12";
    }
    
    dtime.innerHTML = `
    ${dTimeMonthFmt} ${dTimeDate} 
    ${dTimeHourFmt}:${dTimeMinutesFmt} ${dTimeMeridian}
    `;
  });
}
// When we have a datetime, we want to display it in local time.
window.addEventListener("load", DateTimePrettyPrint);