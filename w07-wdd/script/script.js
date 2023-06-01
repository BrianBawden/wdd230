const numImg = 6;
const imgs = document.querySelector(".imgs");
const imgsReal = ["images/img1.jpg", 
                  "images/img2.jpg",
                  "images/img3.jpg",
                  "images/img4.jpg",
                  "images/img5.jpg",
                  "images/img6.jpg"]

// let imagesToLoad = document.querySelectorAll("img[data-src]");
// const loadImages = (image) => {
//     image.setAttribute(src, image.getAttribute("data-src"));
//     image.onload = () => {
//         image.removeAttribute("data-src");
//     };
// };


for(let i = 0; i < numImg; i++){
    const imgLi = document.createElement("li");

    imgLi.innerHTML = "<img src='" + imgsReal[1] + "' data-src=" + imgsReal[i] + "> ";
    // imgLi.innerHTML = "<img src='" + imgsReal[1] + "'>";

    imgs.appendChild(imgLi);
}

imagesToLoad.forEach((img) => {
    loadImages(img);
});