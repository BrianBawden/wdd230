document.querySelector("#copyYear").innerHTML = getYear();

document.querySelector("#modDate").innerHTML = getMY();


function getYear(){

    return new Date().getFullYear(); 
}

function getMY(){
   
    let lastModif = new Date(document.lastModified);
    let mMonth = lastModif.toLocaleString("default", {month: "long"});
    let mYear = lastModif.getFullYear();
    let date = mMonth + " " + mYear;

    return date;
}