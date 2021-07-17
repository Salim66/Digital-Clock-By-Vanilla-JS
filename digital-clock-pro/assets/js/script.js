// get selector
const numb = document.querySelectorAll(".numb");
const dot = document.querySelector(".dot");
const left_hor = document.querySelector(".circle .left_hor .progress");
const right_hor = document.querySelector(".circle .right_hor .progress");
const left_min = document.querySelector(".circle .left_min .progress");
const right_min = document.querySelector(".circle .right_min .progress");
const left_sec = document.querySelector(".circle .left_sec .progress");
const right_sec = document.querySelector(".circle .right_sec .progress");

//set interval
setInterval(() => {
  // instance of date class
  let dt = new Date();

  // check whether the hours greater then 12
  if (dt.getHours() > 12) {
    // set hours
    numb[0].textContent = `0${dt.getHours() - 12}`;
  } else {
    // set hours
    numb[0].textContent = dt.getHours();
  }

  // check whether the minutes less then 10
  if (dt.getMinutes() < 10) {
    // set minutes
    numb[1].textContent = `0${dt.getMinutes()}`;
  } else {
    // set minutes
    numb[1].textContent = dt.getMinutes();
  }

  // check whether the second less then 10
  if (dt.getSeconds() < 10) {
    // set seconds
    numb[2].textContent = `0${dt.getSeconds()}`;
  } else {
    // set seconds
    numb[2].textContent = dt.getSeconds();
  }

  // // check whether the hours less then 12 set am or hours grater then 12 or equal then set pm
  numb[3].textContent = dt.getHours() < 12 ? "AM" : "PM";

  // hour progress bar
  let counter_hor = dt.getHours();
  if (counter_hor == 12) {
    clearInterval();
  } else {
    counter_hor += 1;
    numb.textContent = counter_hor;

    let second_rotate = (360 / 12) * counter_hor;
    dot.style.animation = `${second_rotate} 100ms linear both`;

    let left_deg = (180 / 12) * counter_hor;
    left_hor.style.transform = `rotate(${left_deg}deg)`;

    let right_deg = (180 / 12) * dt.counter_hor;
    right_hor.style.transform = `rotate(${right_deg}deg)`;
  }

  // minutes progress bar
  let counter_min = dt.getMinutes();
  if (counter_min == 60) {
    clearInterval();
  } else {
    counter_min += 1;
    numb.textContent = counter_min;

    let second_rotate = (360 / 60) * counter_min;
    dot.style.animation = `${second_rotate} 100ms linear both`;

    let left_deg = (180 / 60) * counter_min;
    left_min.style.transform = `rotate(${left_deg}deg)`;
    let right_deg = (180 / 60) * counter_min;
    right_min.style.transform = `rotate(${right_deg}deg)`;
  }

  // second progress bar
  let counter_sec = dt.getSeconds();
  if (counter_sec == 60) {
    clearInterval();
  } else {
    counter_sec += 1;
    numb.textContent = counter_sec;

    let second_rotate = (360 / 60) * dt.getSeconds;
    dot.style.animation = `${second_rotate} 100ms linear both`;

    let left_deg = (180 / 60) * dt.getSeconds();
    left_sec.style.transform = `rotate(${left_deg}deg)`;
    let right_deg = (180 / 60) * dt.getSeconds();
    right_sec.style.transform = `rotate(${right_deg}deg)`;
  }
}, 1000);
