let getNow = new Date();
const millPerDay = 1000 * 60 * 60 * 24;


localStorage.setItem("visitDate", getNow.getTime());

const lastVisit = localStorage.getItem("visitDate");

const newDate = getNow.getTime();
const oldDate = lastVisit;
const millDiff = newDate - oldDate;

const numDays = millDiff / millPerDay;

document.querySelector("#day").textContent = numDays;