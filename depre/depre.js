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