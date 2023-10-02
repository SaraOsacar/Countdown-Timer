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

const giveaway = document.querySelector(".giveaway");
const deadline = document.querySelector(".deadline");
const items = document.querySelectorAll(".deadline-format h4");
console.log(items);


let futureDate = new Date(2025, 2, 26, 13,30, 0);


const year = futureDate.getFullYear();
/*const month = futureDate.getMounth();*/
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes(); 

let month = futureDate.getMonth();
month = month[month];
const date = futureDate.getDate();

const weekday = weekdays [futureDate.getDay()];
//console.log(weekday);


giveaway.textContent = `Tickets sales end on ${weekday} ${month} ${year} ${hours}: ${minutes}pm`;

const futureTime = futureDate.getTime();
console.log(futureTime);