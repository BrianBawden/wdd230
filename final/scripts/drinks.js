// ********* get fruit.json from stuff **********
const fruitJson = '../stuff/fruit.json';
const selectFruit1 = document.querySelector("#fruit1");
const selectFruit2 = document.querySelector("#fruit2");
const selectFruit3 = document.querySelector("#fruit3");
let ArrayFruit = [];


async function getFruit(){
    const response = await fetch(fruitJson);
    const fruitData = await response.json();

    fruitData.forEach(fruit => {
        // Create a new option element for each select element
        let option1 = document.createElement('option');
        let option2 = document.createElement('option');
        let option3 = document.createElement('option');
      
        // Set the value and text of the option element
        option1.value = fruit.name;
        option1.text = fruit.name;
        option2.value = fruit.name;
        option2.text = fruit.name;
        option3.value = fruit.name;
        option3.text = fruit.name;
      
        // Append the option elements to the respective select elements
        selectFruit1.appendChild(option1);
        selectFruit2.appendChild(option2);
        selectFruit3.appendChild(option3);
      });
      
}


getFruit();

// console.log(ArrayFruit);

// ArrayFruit.forEach(fruit => {
//     console.log("test");
//     // console.log(fruit.name);
// })