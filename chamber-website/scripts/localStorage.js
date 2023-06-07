// Three days ago: 1685892771985

//******************* */
let getNow = new Date();
let lastVisit = localStorage.getItem("visitDate");
// let oldDate;
const millPerDay = 1000 * 60 * 60 * 24;
if(lastVisit !== null){
    lastVisit = localStorage.getItem("visitDate");
}
if (lastVisit === null){
    lastVisit = getNow;
}

const newDate = getNow.getTime();
const millDiff = newDate - lastVisit;

const numDays = millDiff / millPerDay;

document.querySelector("#day").textContent = numDays.toFixed(0);
lastVisit = localStorage.setItem("visitDate", getNow.getTime());
