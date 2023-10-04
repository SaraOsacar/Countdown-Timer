'use strict';

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const weekdays = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

const giveaway = document.querySelector('.giveaway');
const deadline = document.querySelector('.deadline');
const items = document.querySelectorAll('.deadline-format h4');
console.log(items);


let futureDate = new Date(2025, 1, 26, 13, 30, 0);

const year = futureDate.getFullYear();
const monthName = months[futureDate.getMonth()];
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();
const date = futureDate.getDate();
const weekday = weekdays[futureDate.getDay()];

giveaway.textContent = `Tickets sales end on ${weekday}, ${date} ${monthName} ${year} ${hours}:${minutes}pm`;

const futureTime = futureDate.getTime();

function getRemainingTime() {
  const today = new Date().getTime();
  const t = futureTime - today;

  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMinute = 60 * 1000;

  // Cálculo de todos los valores
  let days = Math.floor(t / oneDay);
  let hours = Math.floor((t % oneDay) / oneHour);
  let minutes = Math.floor((t % oneHour) / oneMinute);
  let seconds = Math.floor((t % oneMinute) / 1000);

  const values = [days, hours, minutes, seconds];

  function format(item) {
    if (item < 10) {
      return (item = `0${item}`);
    }
    return item;
  }

  items.forEach(function (item, index) {
    item.innerHTML = format(values[index]);
  });
  if (t < 0) {
    clearInterval(countdown);
    deadline.innerHTML = `<h4 class="expired">Sorry, this sale has expired</h4>`;
  }

}

let countdown = setInterval(getRemainingTime, 1000);
getRemainingTime();

setInterval(getRemainingTime, 1000);


document.getElementById('watchVideoButton').addEventListener('click',function () {
    
    window.location.href =
      'https://open.spotify.com/album/2av2ZSHlvD7rvLSsMvtYCG?si=JrfPU77JS6KFZTE8VQrv2w'; 
  });
