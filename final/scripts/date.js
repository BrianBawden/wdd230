const now = new Date();
const joinBtn = document.querySelector("#joinBtn");
const fullDate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
  now
);

document.querySelector("#copyYear").innerHTML = getYear();

document.querySelector("#modDate").innerHTML = getMod();

document.querySelector(".curr-date").innerHTML = fullDate;

function getYear() {
  return new Date().getFullYear();
}

function getMod() {
  return new Date(document.lastModified);
}

if (now.getDay() === 1 || now.getDay() === 2) {
  document.querySelector(".banner").style.display = "unset";
}
try{
  joinBtn.addEventListener("click", getDate)
} catch(error){}

function getDate(){
  console.log(now);
  document.querySelector("#getDate").value = now;

}