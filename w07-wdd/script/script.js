const imgs = document.querySelector(".imgs"); // unordered list
const imgsReal = ["images/img1.jpg", 
                  "images/img2.jpg",
                  "images/img3.jpg",
                  "images/img4.jpg",
                  "images/img5.jpg",
                  "images/img6.jpg"] // file names of the images used
const numImg = imgsReal.length; // length used for the for loop

// this for loop adds the li's to ul based on the length of imgsReal.
for(let i = 0; i < numImg; i++){
    const imgLi = document.createElement("li");

    imgLi.innerHTML = "<img src='https://placehold.jp/300x400.png' data-src=" + imgsReal[i] + " loading='lazy'> ";

    imgs.appendChild(imgLi);
}; 

let imagesToLoad = document.querySelectorAll("img[data-src]");

const imgOptions = {
    threshold: 0,
    rootMargin: "0px 0px 50px 0px"
};

const loadImages = (image) => {
    image.setAttribute('src', image.getAttribute("data-src"));
    image.onload = () => {
        image.removeAttribute("data-src");
    };
};


imagesToLoad.forEach((img) => {
    loadImages(img);
});

if("IntersectionObserver" in window) {
    const imgObserver = new IntersectionObserver((items, observer) => {
        items.forEach((item) => {
            loadImages(item);

        })
    })
}
