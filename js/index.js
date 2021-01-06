document.addEventListener("DOMContentLoaded", function (event) {
  var dataText = [
    "帮助留学生了解未来的无数种可能",
    "连接起校园和职场",
    "让经验和知识不断传递",
  ];
  function typeWriter(text, i, fnCallback) {
    if (i < text.length) {
      document.querySelector("#typing-text").innerHTML =
        text.substring(0, i + 1) +
        '<span id="typing-span" aria-hidden="true"></span>';
      setTimeout(function () {
        typeWriter(text, i + 1, fnCallback);
      }, 100);
    }
    else if (typeof fnCallback == "function") {
      setTimeout(fnCallback, 2000);
    }
  }
  function StartTextAnimation(i) {
    if (typeof dataText[i] == "undefined") {
      setTimeout(function () {
        StartTextAnimation(0);
      }, 20000);
    }
    if (i < dataText[i].length) {
      typeWriter(dataText[i], 0, function () {
        StartTextAnimation(i + 1);
      });
    }
  }
  StartTextAnimation(0);
});

let slideIndex = [1, 1];
/* Class the members of each slideshow group with different CSS classes */
let slideId = ["mySlides1", "mySlides2"];
showSlides(1, 0);
showSlides(1, 1);

function plusSlides(n, no) {
  showSlides((slideIndex[no] += n), no);
}

function showSlides(n, no) {
  let i;
  let x = document.getElementsByClassName(slideId[no]);
  if (n > x.length) {
    slideIndex[no] = 1;
  }
  if (n < 1) {
    slideIndex[no] = x.length;
  }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex[no] - 1].style.display = "block";
}
