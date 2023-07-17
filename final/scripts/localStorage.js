
const counter = document.querySelector("#drinkNum");
let count = localStorage.getItem("count");

try{
    if(count === null){
        count = localStorage.setItem('count', 0);
    }
} catch(error){
    console.log("localStorage error: " + error);
}

counter.textContent = count;

counter.textContent = count;