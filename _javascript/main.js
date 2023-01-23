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
  let anchorlinks = document.querySelectorAll('a[href^="#"]')
 
for (let item of anchorlinks) { // relitere 
    item.addEventListener('click', (e)=> {
        let hashval = item.getAttribute('href')
        let target = document.querySelector(hashval)
        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
        history.pushState(null, null, hashval)
        e.preventDefault()
    })
}
});

function setupClock(endtime) {
  updatetime(endtime);
  const timeinterval = setInterval(() => {
    updatetime(endtime);

  }, 1000);
}

function updatetime(endtime) {
  const t = getTimeRemaining(endtime);
  document.getElementById("days").innerText = t.days;
  document.getElementById("hours").innerText = t.hours;
  document.getElementById("mins").innerText = t.minutes;
  document.getElementById("secs").innerText = t.seconds;
}

function toggle(id) {
  let chev = document.getElementById(id+"_chev");
  let content = document.getElementById(id + "_content");
  if (content.style.display === "none") {
    chev.className = "arr-up"
    content.style.display = "block";
  } else {
    content.style.display = "none";
    chev.className = "arr-down"

  }
}
