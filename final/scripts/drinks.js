// ********* get fruit.json from stuff **********
const fruitJson = "../stuff/fruit.json";
const selectFruit1 = document.querySelector("#fruit1");
const selectFruit2 = document.querySelector("#fruit2");
const selectFruit3 = document.querySelector("#fruit3");
// info to access database to calculate nutrition.
let ArrayFruit = [];
let carb = [];
let protein = [];
let fat = [];
let sugar = [];
let cal = [];

// get the fruit info from json file.
async function getFruit() {
  const response = await fetch(fruitJson);
  const fruitData = await response.json();

  fruitData.forEach((fruit) => {
    // Create a new option element for each select element
    const option1 = document.createElement("option");
    const option2 = document.createElement("option");
    const option3 = document.createElement("option");
    ArrayFruit.push(fruit);

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

// adding info to html for order
function showOrder(event) {
  event.preventDefault();
  const yourOrder = document.querySelector("#yourOrder");
  // Get order from form
  const fname = document.querySelector("input[name='fName']").value;
  const email = document.querySelector("input[name='email']").value;
  const phone = document.querySelector("input[name='phone']").value;
  const fruit1 = document.querySelector("select[name='fruit1']").value;
  const fruit2 = document.querySelector("select[name='fruit2']").value;
  const fruit3 = document.querySelector("select[name='fruit3']").value;
  const comment = document.querySelector("textarea[name='comment']").value;
  const date = document.querySelector("input[name='getDate']").value;

  // create and append child to show order
  const orderDate = document.createElement("p");
  const orderFName = document.createElement("p");
  const orderEmail = document.createElement("p");
  const orderPhone = document.createElement("p");
  const orderFruit1 = document.createElement("p");
  const orderFruit2 = document.createElement("p");
  const orderFruit3 = document.createElement("p");
  const orderComment = document.createElement("p");
  const orderNutrition = document.createElement("p");

  // get values for nutrients.
  appendNutrition(ArrayFruit, fruit1);
  appendNutrition(ArrayFruit, fruit2);
  appendNutrition(ArrayFruit, fruit3);

  let carbTotal = addNutrition(carb);
  let proteinTotal = addNutrition(protein);
  let fatTotal = addNutrition(fat);
  let sugarTotal = addNutrition(sugar);
  let calTotal = addNutrition(cal);

  // set the values for order
  orderDate.textContent = `Date: ${date}`;
  orderFName.textContent = `First Name: ${fname}`;
  orderEmail.textContent = `Email: ${email}`;
  orderPhone.textContent = `Phone: ${phone}`;
  orderFruit1.textContent = `First Fruit: ${fruit1}`;
  orderFruit2.textContent = `Second Fruit: ${fruit2}`;
  orderFruit3.textContent = `Third Fruit: ${fruit3}`;
  orderComment.textContent = `Comments: ${comment}`;
  orderNutrition.textContent = `carbs: ${carbTotal.toFixed(
    2
  )}, protein: ${proteinTotal.toFixed(2)}, fat: ${fatTotal.toFixed(
    2
  )}, sugar: ${sugarTotal.toFixed(2)}, calories: ${calTotal.toFixed(2)}`;

  // appending orders to html
  yourOrder.appendChild(orderDate);
  yourOrder.appendChild(orderFName);
  yourOrder.appendChild(orderEmail);
  yourOrder.appendChild(orderPhone);
  yourOrder.appendChild(orderFruit1);
  yourOrder.appendChild(orderFruit2);
  yourOrder.appendChild(orderFruit3);
  yourOrder.appendChild(orderComment);
  yourOrder.appendChild(orderNutrition);
}

// add the nutrition data to the nutrient arrays.
function appendNutrition(array, fruitName) {
  array.forEach((fruit) => {
    if (fruit.name === fruitName) {
      carb.push(fruit.nutritions.carbohydrates);
      protein.push(fruit.nutritions.protein);
      fat.push(fruit.nutritions.fat);
      sugar.push(fruit.nutritions.sugar);
      cal.push(fruit.nutritions.calories);
    }
  });
}

// return the total from the nutrition arrays.
function addNutrition(array) {
  let total = 0;
  array.forEach((x) => {
    total += x;
  });
  return total;
}

getFruit();
document.querySelector("#drinkOrder").addEventListener("submit", showOrder);
