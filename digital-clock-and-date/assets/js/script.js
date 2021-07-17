// get selector
let hr       = document.querySelector("#hour");
let mn        = document.querySelector("#min");
let seconds    = document.querySelector("#sec");
let med        = document.querySelector("#med");
let month_name = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

var show_Day = document.querySelectorAll(".day__wrapper span")
let full_Date = document.querySelector('#full__date');

function currentTime(){
  // date instantiate
  let date = new Date();
  let hour = date.getHours();
  let min  = date.getMinutes();
  let sec  = date.getSeconds();
  let year = date.getFullYear();
  let day  = date.getDay();
  let month= date.getMonth();

  //check whether the hours grether then 12 
  if(hour > 12) {
    hr.innerHTML = `0${hour - 12}:`;
  }else {
    hr.innerHTML = `${hour}`;
  }

  //check whether the minutes less then 10
  if(min < 10) {
    mn.innerHTML = `0${min}`;
  }else {
    mn.innerHTML = `${min}`;
  }

  //check whether the sec less then 10
  if(sec < 10) {
    seconds.innerHTML  = `0${sec}`;
  }else {
    seconds.innerHTML  = `${sec}`;
  }

  let mid_day = "AM";
  mid_day = hour < 12 ? "AM" : "PM";
  med.innerHTML = `${mid_day}`;
  full_Date.innerHTML = `${month_name[month]}  ${day+1}  ${year}`;
  show_Day[day].style.opacity = '1';

  
}
currentTime();

setInterval(currentTime, 1000);
