"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 9
   Tutorial Case

   Countdown Clock
   Author: Joseph Reccardo
   Date:   10/12/2023

*/

/*Execute (call) the function to run and display the countdown clock */
runClock();
setInterval("runClock()", 1000);

/*Function to create and run the countdown clock */
function runClock() {

   /* Store the current Date and Time */
   let currentDay = new Date();
   let dateStr = currentDay.toLocaleDateString();
   let timeStr = currentDay.toLocaleTimeString();

   /*Calculate the days until January 1st */
   let newYear = new Date("January 1, 2018");
   let nextYear = currentDay.getFullYear() + 1;
   newYear.setFullYear(nextYear);
   let daysLeft = (newYear - currentDay)/(1000*60*60*24);

   /*Display current Date, and Time */
   document.getElementById("dateNow").innerHTML = dateStr + "<br/>" + timeStr;

   /* Display the time left until new years eve */
   document.getElementById("days").textContent = Math.floor(daysLeft);
   /*Calculate the hours left in the day */
   let hrsLeft = (daysLeft - Math.floor(daysLeft)) * 24;
   document.getElementById("hrs").textContent = Math.floor(hrsLeft);
   /*Calculate the minutes and seconds left in the current hour */
   let minsLeft = (hrsLeft-Math.floor(hrsLeft)) * 60;
   let secsLeft = (minsLeft -Math.floor(minsLeft)) * 60;
   document.getElementById("mins").textContent = Math.floor(minsLeft);
   document.getElementById("secs").textContent = Math.floor(secsLeft);
}