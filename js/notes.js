let pages = [1, 2, 3, 4, 5];
let categories = ["tech", "business"];
let currentCat = "tech";
function changePage(page) {
  for (let i of pages) {
    currPage = document.getElementById(`page${i}`);
    i === page
      ? (currPage.style.display = "block")
      : (currPage.style.display = "none");
  }
}
function nextPage() {
  for (let i of pages) {
    if (i === pages[pages.length - 1]) break;
    currPage = document.getElementById(`page${i}`);
    if (currPage.style.display === "block") {
      currPage.style.display = "none";
      document.getElementById(`page${i + 1}`).style.display = "block";
      break;
    }
  }
}
function prevPage() {
  for (let i of pages) {
    if (i === pages[0]) continue;
    currPage = document.getElementById(`page${i}`);
    if (currPage.style.display === "block") {
      currPage.style.display = "none";
      document.getElementById(`page${i - 1}`).style.display = "block";
      break;
    }
  }
}

function changeCat(cat) {
  currentCat = cat;
  var pageShown = document.getElementById("1" + currentCat);
  pageShown.style.display = "block";

  for (let c = 0; c < categories.length; c++) {
    for (let p = 0; p < pages.length; p++) {
      if (pages[p] + categories[c] != "1" + cat) {
        var pageHide = document.getElementById(pages[p] + categories[c]);
        pageHide.style.display = "none";
      }
    }
  }
}
