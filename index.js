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

var clock = moment().format('HH:mm:ss')

var timeText = $(".time").text(clock)


var r = convertTimeframe(moment().format('HH'), "hour")
var g = convertTimeframe(moment().format('mm'), "minute")
var b = convertTimeframe(moment().format('ss'), "second")

$(".clock-container").css("background", "radial-gradient(at 50% 400px, rgb(200, 200, 200), rgb(" + r + "," + g + "," + b +")")

var RGBToHex = function(r, g, b){

        var bin = r << 16 | g << 8 | b;
        
        return (function(h){

            return new Array(7-h.length).join("0")+h
          })

            (bin.toString(16).toUpperCase())
        }



// DOC START

$(document).on("ready", function() {

  // Digital Clock in hh:mm:ss format
  var reloadClock = function() {
    $('.time').html(moment().format('HH:mm:ss'));

    r = convertTimeframe(moment().format('HH'), "hour")
    g = convertTimeframe(moment().format('mm'), "minute")
    b = convertTimeframe(moment().format('ss'), "second")
      
    $(".clock-container").css("background", "radial-gradient(at 50% 400px, rgb(200, 200, 200), rgb(" + r + "," + g + "," + b +")")

    //click and change to hex color

    $('.hex, .time').on("click", function() {
      
      $('.time').toggleClass('hidden')
      $('.hex').toggleClass('hidden')
    
      })

    $('.hex').text("#" + RGBToHex(r).substring(0,2) + ":" + RGBToHex(g).substring(0,2) + ":" + RGBToHex(b).substring(0,2))

    // Change cities

    moment.tz.add('Europe/London')
    
    var timestamp = Date.now()
    var london = moment.tz(timestamp, "Europe/London")
    var londonTime = london.format('HH:mm:ss')
      
    $('.city').on('click', function() {
      // Hid Washington DC and show London
      $('.city').toggleClass('hidden')
      // When London shows, change time
      $('.time').text(londonTime)

    })

}

  setInterval(reloadClock, 1000)
})






