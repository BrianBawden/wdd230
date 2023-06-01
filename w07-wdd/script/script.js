const numImg = 6;
const imgs = document.querySelector(".imgs");
const imgsReal = ["images/img1.png", 
                  "images/img2.png",
                  "images/img3.png",
                  "images/img4.png",
                  "images/img5.png",
                  "images/img6.png"]

let imagesToLoad = document.querySelectorAll("img[data-src]");
const loadImages = (image) => {
    image.setAttribute(src, image.getAttribute("data-src"));
    image.onload = () => {
        image.removeAttribute("data-src");
    };
};


for(let i = 0; i < numImg; i++){
    const imgLi = document.createElement("li");

    imgLi.innerHTML = "<img src='" + imgsReal[1] + "' data-src=" + imgsReal[i] + "> ";
    imgs.appendChild(imgLi);
}

imagesToLoad.forEach((img) => {
    loadImages(img);
});