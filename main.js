const header = document.querySelector(".header__top");

const bn_img = document.querySelectorAll(".images");
const bn_slider = document.querySelectorAll(".slider_test");
const bn_txt = document.querySelectorAll(".heading__text div p");
const bs = document.querySelector(".slider_ani");
const hd_menu = document.querySelector(".header__main-menu li");
const nw_list = document.querySelector(".news__wrap");

const slogan = document.querySelector(".slogan__text");
const slogan_p = slogan.querySelectorAll("p");

let a = 0;
let b = 1;
let c = 2;
let x;
let y = 0;
let z = 0;

let scroll_now;

setInterval(() => {
  console.log(y);
  // 배너 텍스트 변경
  bn_txt[y].classList.toggle("text--show");
  bn_txt[y].classList.toggle("text--clear");
  if (y < 2) {
    y = y + 1;
    bn_txt[y].classList.toggle("text--show");
    bn_txt[y].classList.toggle("text--clear");
  } else {
    y = 0;
    bn_txt[y].classList.toggle("text--show");
    bn_txt[y].classList.toggle("text--clear");
  }

  //

  if (z == 0) {
    bn_img[0].classList.remove("reduce_ani");
    bn_img[1].classList.add("reduce_ani");
    bs.style.transform = "translateX(-25%)";
    z = z + 1;
  } else if (z == 1) {
    bn_img[1].classList.remove("reduce_ani");
    bn_img[2].classList.add("reduce_ani");
    bs.style.transform = "translateX(-50%)";
    z = z + 1;
  } else if (z == 2) {
    bn_img[2].classList.remove("reduce_ani");
    bn_img[0].classList.add("reduce_ani");
    bs.style.transform = "translateX(0%)";
    z = 0;
  }
}, 3600);

// 헤더 메인메뉴 호버
hd_menu.addEventListener("mouseover", (event) => {
  hd_menu.querySelector("div").style.display = "block";
});
hd_menu.addEventListener("mouseout", (event) => {
  hd_menu.querySelector("div").style.display = "none";
});

window.addEventListener("scroll", (event) => {
  // console.log(window.pageYOffset);
  if (scroll_now > 1500) {
    slogan.style.display = "static";
    slogan_p[0].style.animation = "slide1 0.1s linear";
    slogan_p[1].style.animation = "slide2 0.1s linear";
    slogan_p[2].style.animation = "slide3 0.1s linear";
    console.log(slogan.style.display);

    // header.style.position = "sticky";
  } else {
    // header.style.position = "static";
  }
  scroll_now = window.pageYOffset;
});

console.log(slogan);
