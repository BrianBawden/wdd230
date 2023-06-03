function toggleMenu() {
  document.querySelector(".nav").classList.toggle("open");
}


// Code to load add li to html
const imgs = document.querySelector(".imgs"); // unordered list
// file names of the images used
const imgsReal = ["images/img1.jpg", 
                  "images/img2.jpg",
                  "images/img3.jpg",
                  "images/img4.jpg",
                  "images/img5.jpg",
                  "images/img6.jpg"] 
const numImg = imgsReal.length; // length used for the for loop

const imgsInfo = [
  "1Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint corrupti, officia ab optio nostrum vel accusamus repellat repudiandae iste omnis facilis obcaecati accusantium debitis aspernatur? Minima, accusantium! Ducimus dolorem omnis voluptatem, modi, temporibus eligendi, odio laborum dolore vero aliquid ut saepe! Quaerat adipisci autem, eligendi non magnam nam fugit fuga.",
  "2Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint corrupti, officia ab optio nostrum vel accusamus repellat repudiandae iste omnis facilis obcaecati accusantium debitis aspernatur? Minima, accusantium! Ducimus dolorem omnis voluptatem, modi, temporibus eligendi, odio laborum dolore vero aliquid ut saepe! Quaerat adipisci autem, eligendi non magnam nam fugit fuga.",
  "3Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint corrupti, officia ab optio nostrum vel accusamus repellat repudiandae iste omnis facilis obcaecati accusantium debitis aspernatur? Minima, accusantium! Ducimus dolorem omnis voluptatem, modi, temporibus eligendi, odio laborum dolore vero aliquid ut saepe! Quaerat adipisci autem, eligendi non magnam nam fugit fuga.",
  "4Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint corrupti, officia ab optio nostrum vel accusamus repellat repudiandae iste omnis facilis obcaecati accusantium debitis aspernatur? Minima, accusantium! Ducimus dolorem omnis voluptatem, modi, temporibus eligendi, odio laborum dolore vero aliquid ut saepe! Quaerat adipisci autem, eligendi non magnam nam fugit fuga.",
  "5Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint corrupti, officia ab optio nostrum vel accusamus repellat repudiandae iste omnis facilis obcaecati accusantium debitis aspernatur? Minima, accusantium! Ducimus dolorem omnis voluptatem, modi, temporibus eligendi, odio laborum dolore vero aliquid ut saepe! Quaerat adipisci autem, eligendi non magnam nam fugit fuga.",
  "6Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint corrupti, officia ab optio nostrum vel accusamus repellat repudiandae iste omnis facilis obcaecati accusantium debitis aspernatur? Minima, accusantium! Ducimus dolorem omnis voluptatem, modi, temporibus eligendi, odio laborum dolore vero aliquid ut saepe! Quaerat adipisci autem, eligendi non magnam nam fugit fuga.",
]

let imagesToLoad = document.querySelectorAll("img[data-src]");


// this for loop adds the li's to ul based on the length of imgsReal.
for(let i = 0; i < numImg; i++){
    const imgLi = document.createElement("li");

    imgLi.innerHTML = "<img src='https://placehold.jp/300x400.png' data-src=" + imgsReal[i] + " id='img" + i + "'> <p class='imgsInfo' id='imgsInfo" + i + "'>" + imgsInfo[i] + "</p>";

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

