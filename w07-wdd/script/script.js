const numImg = 6;
const imgs = document.querySelector(".imgs");



for(let i = 0; i < numImg; i++){
    const imgLi = document.createElement("li");

    imgLi.innerHTML = "<img src='https://placehold.jp/300x400.png'>";
    imgs.appendChild(imgLi);
}