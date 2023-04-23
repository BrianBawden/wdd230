document.querySelector("#copyYear").innerHTML = getYear();

document.querySelector("#modDate").innerHTML = getMY();

function getYear() {
  return new Date().getFullYear();
}

function getMY() {
  const lastModif = new Date(document.lastModified);
  const mMonth = lastModif.toLocaleString("default", { month: "long" });
  const mYear = lastModif.getFullYear();
  const date = `${mMonth} ${mYear}`;

  return date;
}
