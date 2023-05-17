const now = new Date();

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

if (now.getDay() === 1 || now.getDay() === 2){
  console.log(now.getDay());
  document.querySelector(".banner").style.display= "unset";
}
