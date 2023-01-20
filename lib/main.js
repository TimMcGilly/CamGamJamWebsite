'use strict';

var deadline = 'February 10 2023 18:00:00 GMT+0000';

//https://stackoverflow.com/questions/62511356/how-to-calculate-the-time-left-in-days-hours-minutes-and-seconds-left-to-reac
function getTimeRemaining(endtime) {
  var total = Date.parse(endtime) - Date.parse(new Date());
  var seconds = Math.floor(total / 1000 % 60);
  var minutes = Math.floor(total / 1000 / 60 % 60);
  var hours = Math.floor(total / (1000 * 60 * 60) % 24);
  var days = Math.floor(total / (1000 * 60 * 60 * 24));

  return {
    total: total,
    days: days,
    hours: hours,
    minutes: minutes,
    seconds: seconds
  };
}

document.addEventListener('DOMContentLoaded', function () {
  setupClock(deadline);
});

function setupClock(endtime) {
  var timeinterval = setInterval(function () {
    var t = getTimeRemaining(endtime);
    document.getElementById("days").innerText = t.days;
    document.getElementById("hours").innerText = t.hours;
    document.getElementById("mins").innerText = t.minutes;
    document.getElementById("secs").innerText = t.seconds;
  }, 1000);
}