document.querySelector("#copyYear").innerHTML = getYear();

document.querySelector("#modDate").innerHTML = getMod();

function getYear() {
  return new Date().getFullYear();
}

function getMod() {
    return new Date(document.lastModified);

}
