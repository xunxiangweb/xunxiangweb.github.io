let pages = [1, 2, 3, 4, 5, 6];
let categories = [
  "tech",
  "finance",
  "consulting",
  "design/art",
  "manufacturing",
  "insurance",
  "healthcare",
  "comm",
  "education",
  "research",
  "law",
  "others",
];
let currentCat = "tech";
function changePage(page) {
  for (let i of pages) {
    currPage = document.getElementById(`page${i}`);
    i === page
      ? (currPage.style.display = "block")
      : (currPage.style.display = "none");
      let articles = currPage.getElementsByClassName("cat");
      for (let a of articles) {
        a.style.display = "block"
      }
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
  for (let i of pages) {
    currPage = document.getElementById(`page${i}`);
    let articles = currPage.getElementsByClassName("cat");
    for (let a of articles) {
      a.className.includes(cat) ? a.style.display = "block" : a.style.display = "none"
    }
    currPage.style.display = "block"
  }
}

function displayCat(){
  currPage.style.display = "block"
}
