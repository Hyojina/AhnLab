const bn_img = document.querySelectorAll(".images");
const bn_slider = document.querySelectorAll(".slider_test");
const bn_txt = document.querySelectorAll(".heading__text div p");
const bs = document.querySelector(".slider_ani");

let a = 0;
let b = 1;
let c = 2;
let x;
let y = 0;
let z = 0;
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
