// get selector
let hour = document.querySelector("#hour");
let minutes = document.querySelector("#minute");
let second = document.querySelector("#second");
let half = document.querySelector("#half");
let span = document.querySelectorAll("span");

// let count = 0;
setInterval(function () {
  let date = new Date();

  // check whether the hours is less then 10
  if (date.getHours() > 12) {
    // set hours
    span[0].textContent = `0${date.getHours() - 12}`;
  } else {
    span[0].textContent = date.getHours();
  }

  // check whether the minutes is less then 10
  if (date.getMinutes() < 10) {
    //set minuies
    span[1].textContent = `0${date.getMinutes()}`;
  } else {
    //set minuies
    span[1].textContent = date.getMinutes();
  }

  // check whether the seconds is less then 10
  if (date.getSeconds() < 10) {
    //set seconds
    span[2].textContent = `0${date.getSeconds()}`;
  } else {
    //set seconds
    span[2].textContent = date.getSeconds();
  }

  // set Am, PM
  span[3].textContent = date.getHours < 12 ? "AM" : "PM";

  // set rotate
  let hour_rotate = (360 / 12) * date.getHours();
  hour.style.transform = `rotate(${hour_rotate}deg)`;

  let minutes_rotate = (360 / 60) * date.getMinutes();
  minutes.style.transform = `rotate(${minutes_rotate}deg)`;

  let seconds_rotate = (360 / 60) * date.getSeconds();
  second.style.transform = `rotate(${seconds_rotate}deg)`;
}, 1000);
