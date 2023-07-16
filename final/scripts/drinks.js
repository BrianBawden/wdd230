console.log("test1");
// ********* get fruit.json from stuff **********
const fruitJson = '../stuff/fruit.json';
const selectFruit1 = document.querySelector("#fruit1");
const selectFruit2 = document.querySelector("#fruit2");
const selectFruit3 = document.querySelector("#fruit3");


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


function showOrder(event){

    event.preventDefault();
   const fname = document.querySelector("input[name='fName']").value;
   const email = document.querySelector("input[name='email']").value;
   const phone = document.querySelector("input[name='phone']").value;
   const fruit1 = document.querySelector("select[name='fruit1']").value;
   const fruit2 = document.querySelector("select[name='fruit2']").value;
   const fruit3 = document.querySelector("select[name='fruit3']").value;
   const comment = document.querySelector("textarea[name='comment']").value;
   const date = document.querySelector("input[name='getDate']").value;




}

getFruit();
document.querySelector("#drinkOrder").addEventListener("submit", showOrder);