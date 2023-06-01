const numImg = 6;
const imgs = document.querySelector(".imgs");
const imgsReal = ["images/img1.png", "images/img2.png", "images/img3.png", "images/img4.png", "images/img5.png", "images/img6.png"]



for(let i = 0; i < numImg; i++){
    const imgLi = document.createElement("li");

    imgLi.innerHTML = "<img src='https://placehold.jp/300x400.png'>";
    imgs.appendChild(imgLi);
}