// ********* get fruit.json from stuff **********
const fruitJson = '../stuff/fruit.json';

async function getFruit(){
    const response = await fetch(fruitJson);
    const fruitData = await response.json();
    console.log(fruitData);
}

const selectFruit = document.querySelector("#fruits");

let test = "test";
let test1 = "test1";
let test2 = "test2";

selectFruit.innerHTML = `<option value="test">${test}</option>`;
selectFruit.innerHTML = `<option value="test">${test1}</option>`;
selectFruit.innerHTML = `<option value="test">${test2}</option>`;


getFruit();