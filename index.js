/*
  This function takes in two parameters: a number, and a string.
  The number represents the amount of hours/minutes/seconds.
  The string represents the unit, and is one of
    * "hour"
    * "minute"
    * "second"

  It returns a whole number value from 0-255 representing the
  relative CSS RGB value of that time period.
*/


//  It's pre-written for you. Best to not muck around with it.

var convertTimeframe = function(amount, unit) {

  switch (unit) {
    case "hour":
    case "hours":
      return Math.round((amount / 23) * 255)
    case "minute":
    case "minutes":
    case "second":
    case "seconds":
      return Math.round((amount / 59) * 255)
    default:
      return 0;
  }
}

// START

var clock = moment().format('hh:mm:ss')

var timeText = $(".time").text(clock)


var r = convertTimeframe(moment().format('hh'), "hour")
var g = convertTimeframe(moment().format('mm'), "minute")
var b = convertTimeframe(moment().format('ss'), "second")

    $(".clock-container").css("background", "rgb(" + r + "," + g + "," + b +")")



// DOC START

$(document).on("ready", function() {

// Digital Clock in hh:mm:ss format
var reloadClock = function() {
  $('.time').html(moment().format('hh:mm:ss'));

  r = convertTimeframe(moment().format('hh'), "hour")
  g = convertTimeframe(moment().format('mm'), "minute")
  b = convertTimeframe(moment().format('ss'), "second")
    
  $(".clock-container").css("background", "rgb(" + r + "," + g + "," + b +")")
  
}

setInterval(reloadClock, 1000)

/*$(".time").on("click", function() {
    .format("r + ":" + g ":" b")
})*/


})






