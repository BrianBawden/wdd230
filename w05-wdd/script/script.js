

// A function to add a new scripture from the text input to ad-chapter list.
function addScripture(){

    const scriptList = document.querySelector("#chapter-list");
    const newLi = document.createElement("li");
    const delBtn = document.createElement("button")
    const nextScript = document.querySelector("#add-chapter").value;
    
    newLi.textContent = nextScript;
    delBtn.textContent = "X";

    newLi.setAttribute("class", newLi.textContent);
   

    if(nextScript != ""){
    scriptList.appendChild(newLi);
    newLi.appendChild(delBtn);

    delBtn.addEventListener("click", () => {
        scriptList.removeChild(newLi);
    });
    document.querySelector("#add-chapter").value = '';
}
}
