const deadline = 'February 10 2023 18:00:00 GMT+0000';

//https://stackoverflow.com/questions/62511356/how-to-calculate-the-time-left-in-days-hours-minutes-and-seconds-left-to-reac
function getTimeRemaining(endtime){
  const total = Date.parse(endtime) - Date.parse(new Date());
  const seconds = Math.floor( (total/1000) % 60 );
  const minutes = Math.floor( (total/1000/60) % 60 );
  const hours = Math.floor( (total/(1000*60*60)) % 24 );
  const days = Math.floor( total/(1000*60*60*24) );

  return {
    total,
    days,
    hours,
    minutes,
    seconds
  };
}

document.addEventListener('DOMContentLoaded', () => {
  setupClock(deadline);
  
});

function setupClock(endtime) {
  const timeinterval = setInterval(() => {
    const t = getTimeRemaining(endtime);
    document.getElementById("days").innerText = t.days;
    document.getElementById("hours").innerText = t.hours;
    document.getElementById("mins").innerText = t.minutes;
    document.getElementById("secs").innerText = t.seconds;

  }, 1000);
}
