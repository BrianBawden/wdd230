

// A function to add a new scripture from the text input to ad-chapter list.
function addScripture(){

    const scriptList = document.querySelector("#chapter-list");
    const newLi = document.createElement("li");
    const delBtn = document.createElement("button")
    const nextScript = document.querySelector("#add-chapter").value;
    
    newLi.textContent = nextScript;
    delBtn.textContent = "Delete";

    scriptList.appendChild(newLi);
    newLi.appendChild(delBtn);

    document.querySelector("#add-chapter").value = '';
    // document.querySelector("#chapter-list").innerHTML = nextScript;
}

function deleteChapter(){
    
}