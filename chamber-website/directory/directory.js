
const biz = 'directory/data.json';
const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector(".cards");
const arrayGold = [];
let dirLength;
let bizData;

// ************* get json **********************
async function getBiz(){
    const response = await fetch(biz);
    const data = await response.json();
    displayBiz(data.bizz);
    const hiLi = highlightBiz(data.bizz);
    console.log(arrayGold);
}


// ************* create and set cards ****************
const displayBiz = (businesses) => {
    const cards = document.querySelector("div.cards");
    // for each biz create their content.
    businesses.forEach((business) => {
    //  console.log(business.memberLvl);

        let card = document.createElement("section");
        let icon = document.createElement('img');
        let bizName = document.createElement('h3');
        let bizInfo = document.createElement('p');

        card.setAttribute('class', 'dir-section')
        
        icon.setAttribute('class', "dir-icon");
        icon.setAttribute('src', business.icon);
        icon.setAttribute('alt', `Logo for ${business.name}.`);
        icon.setAttribute('loading', 'lazy');

        bizName.textContent = business.name;

        bizInfo.innerHTML = `${business.address} <br> ${business.phone} <br> ${business.website}`;

        card.appendChild(icon);
        card.appendChild(bizName);
        card.appendChild(bizInfo);

        cards.appendChild(card);
    });
}


// **************** buttons to switch from grid to list view ****************
gridbutton.addEventListener("click", () => {
	display.classList.remove("list");
});

listbutton.addEventListener("click", showList); // example using defined function

function showList() {
	display.classList.add("list");
}

// ***************** pick random gold/silver card ***************

function goldRandom(data) {
    dirLength = data.length;
    let dirRandom = Math.floor(Math.random() * (dirLength));
    let member = data[dirRandom].memberLvl;


    if ((member === "gold" || member === "silver") && !arrayGold.includes(data[dirRandom])) {
        let hiObj = data[dirRandom];
        return hiObj;
       }
    else{
        return goldRandom(data);
    };
}

function highlightBiz(data) {
    if (arrayGold.length != 3) {
        let hiObj = goldRandom(data);
        arrayGold.push(hiObj);
        highlightBiz(data);
    } else {
        return arrayGold;
    }
}

// *************** call function to start program *******************
getBiz();
