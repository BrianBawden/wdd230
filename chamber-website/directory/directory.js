const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector(".cards");

// ************* get json **********************
async function getBiz(){
    const response = await fetch(biz);
    const data = await response.json();
    displayBiz(data.bizz);
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


// *************** call function to start program *******************
getBiz();
