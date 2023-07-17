const now = new Date();
const fullDate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
  now
);

document.querySelector("#copyYear").innerHTML = getYear();

document.querySelector("#modDate").innerHTML = getMod();


function getYear() {
  return new Date().getFullYear();
}

function getMod() {
  return new Date(document.lastModified);
}

function getDate() {
  document.querySelector("#getDate").value = fullDate;
}

try{
  document.querySelector("#drinkOrder").addEventListener("submit", getDate);
} catch (error) {}