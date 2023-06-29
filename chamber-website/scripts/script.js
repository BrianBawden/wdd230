function toggleMenu() {
  document.querySelector(".nav").classList.toggle("open");
}

// Code to load add li to html
const imgs = document.querySelector(".imgs"); // unordered list
// file names of the images used
const imgsReal = [
  "discover-imgs/timp-flag.jpg",
  "discover-imgs/city-hall.jpg",
  "discover-imgs/timp.jpeg",
  "discover-imgs/ut-valley.PNG",
  "discover-imgs/swing.jpg",
  // "images/img6.jpg",
];
const numImg = imgsReal.length; // length used for the for loop

const imgsInfo = [
  "At the Timp Chamber of Commerce, we are proud to help the entrepreneurs of Utah Valley fulfil the American dream and grow the businesses in the area. We believe that the best way to promote business growth is by supporting each other.",
  "One of the first steps to starting a business is by getting a business license at city hall. The Timp Chamber of Commerce has people on hand that have help other business owners start the journey of entrepreneurship, and they can help you too. For assistance, please reach out to us via email or phone.",
  "Utah is known for the beauty nature has to offer. Mount timpanogos, our name’s sake, is a majestic mountain the watches over Utah Valley. An important part of running a business is a little RNR. Take some time and enjoy the beauty that Utah has to offer by hiking Mount timpanogos.",
  "Every business needs one thing, customers. Utah Valley has been growing exponentially for years. With almost 700,000 residents you will plenty of customers looking to do business with you, and with the hundreds of members of the Timp Chamber of Commerce we can help get you in touch with those potential customers. Contact us via phone or email to start growing your business.",
  "Family is important to us at the Timp Chamber of Commerce, and Utah Valley offers some amazing parks to bring your family to. So no matter you favorite outdoor activity There is always something fun to keep you and the little ones active and healthy.",
];

let imagesToLoad = document.querySelectorAll("img[data-src]");

// this for loop adds the li's to ul based on the length of imgsReal.
for (let i = 0; i < numImg; i++) {
  const imgLi = document.createElement("li");

  imgLi.innerHTML =
    "<img src='https://placehold.jp/300x400.png' data-src=" +
    imgsReal[i] +
    " id='img" +
    i +
    "'> <p class='imgsInfo' id='imgsInfo" +
    i +
    " loading='lazy'>" +
    imgsInfo[i] +
    "</p>";
  try{
    imgs.appendChild(imgLi);
  } catch(error){
    console.log("class imgs not found: " + error);
  }
}

const loadImages = (image) => {
  image.setAttribute("src", image.getAttribute("data-src"));
  image.onload = () => {
    image.removeAttribute("data-src");
  };
};

// Code for progressive loading
let callback = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting === true) {
      const image = entry.target;
      loadImages(image);
      observer.unobserve(image);
    }
  });
};
let options = {
  root: null,
  rootMargin: "0px",
  threshold: 0.25,
};

let observer = new IntersectionObserver(callback, options);

let target = document.querySelectorAll("img[data-src]");

target.forEach((pic) => {
  observer.observe(pic);
});



// ************* random highlight biz ******************


const biz = 'directory/data.json';
const arrayGold = [];
let dirLength;
let bizData;

// ************* get json **********************
async function getBiz(){
    const response = await fetch(biz);
    const data = await response.json();
    const hiLi = highlightBiz(data.bizz);
    console.log(arrayGold);
}

// ***************** pick random gold/silver card ***************

function goldRandom(data) {
    dirLength = data.length;
    let dirRandom = Math.floor(Math.random() * (dirLength));
    let member = data[dirRandom].memberLvl;


    if ((member === "gold" || member === "silver") && !arrayGold.includes(data[dirRandom])) {
        let hiObj = data[dirRandom];
        return hiObj;
       }
    else{
        return goldRandom(data);
    };
}

function highlightBiz(data) {
    if (arrayGold.length != 3) {
        let hiObj = goldRandom(data);
        arrayGold.push(hiObj);
        highlightBiz(data);
    } else {
        return arrayGold;
    }
}

// *************** call function to start program *******************
getBiz();
