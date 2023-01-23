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
  var anchorlinks = document.querySelectorAll('a[href^="#"]');

  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    var _loop = function _loop() {
      var item = _step.value;
      // relitere 
      item.addEventListener('click', function (e) {
        var hashval = item.getAttribute('href');
        var target = document.querySelector(hashval);
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
        history.pushState(null, null, hashval);
        e.preventDefault();
      });
    };

    for (var _iterator = anchorlinks[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      _loop();
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }
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

function toggle(id) {
  var chev = document.getElementById(id + "_chev");
  var content = document.getElementById(id + "_content");
  if (content.style.display === "none") {
    chev.className = "arr-up";
    content.style.display = "block";
  } else {
    content.style.display = "none";
    chev.className = "arr-down";
  }
}