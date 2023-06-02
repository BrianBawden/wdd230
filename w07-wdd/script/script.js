
// Code to load add li to html
const imgs = document.querySelector(".imgs"); // unordered list
const imgsReal = ["images/img1.jpg", 
                  "images/img2.jpg",
                  "images/img3.jpg",
                  "images/img4.jpg",
                  "images/img5.jpg",
                  "images/img6.jpg"] // file names of the images used
const numImg = imgsReal.length; // length used for the for loop

let imagesToLoad = document.querySelectorAll("img[data-src]");


// this for loop adds the li's to ul based on the length of imgsReal.
for(let i = 0; i < numImg; i++){
    const imgLi = document.createElement("li");

    imgLi.innerHTML = "<img src='https://placehold.jp/300x400.png' data-src=" + imgsReal[i] + " id='img" + i + "'> ";

    imgs.appendChild(imgLi);
}; 

const loadImages = (image) => {
    image.setAttribute('src', image.getAttribute("data-src"));
    image.onload = () => {
        image.removeAttribute("data-src");
    };
};



// Code for progressive loading
let callback = (entries, observer) => {
    entries.forEach((entry) => {

        if(entry.isIntersecting === true){
            const image = entry.target;
            loadImages(image);
            observer.unobserve(image);
        };
    });
};
let options = {
    root: null,
    rootMargin: "0px",
    threshold: .25,
};
  
let observer = new IntersectionObserver(callback, options);

let target = document.querySelectorAll("img[data-src]");

target.forEach((pic) => {
    observer.observe(pic);
});

