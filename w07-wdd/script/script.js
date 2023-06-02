
// Code to load add li to html
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



// Code for progressive loading
let callback = (entries, observer) => {
    entries.forEach((entry) => {
        console.log(entry);
    });
};

let options = {
    root: document.querySelector(".imgs_row"),
    rootMargin: "0px",
    threshold: 0.25,
};
  
let observer = new IntersectionObserver(callback, options);

let target = document.querySelectorAll("img[data-src]");

target.forEach((pic) => {
    observer.observe(pic);
});





// old stuff

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
