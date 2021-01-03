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

function changePage(page) {
  document.getElementById("pagination").style.display = "block";
  for (let i of pages) {
    currPage = document.getElementById(`page${i}`);
    i === page
      ? (currPage.style.display = "block")
      : (currPage.style.display = "none");
    let articles = currPage.getElementsByClassName("cat");
    for (let a of articles) {
      a.style.display = "block";
    }
  }
  lists = document.getElementsByClassName("page-item");
  for (let li of lists) {
    pageNum = li.getElementsByTagName("a")[0].innerHTML[0];
    pageNum == page
      ? li.classList.add("active")
      : li.classList.remove("active");
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
  lists = document.getElementsByClassName("page-item");
  for (let i = lists.length - 1; i > 1; i--) {
    if (lists[i].className.includes("active")) {
      lists[i].classList.remove("active");
      lists[i - 1].classList.add("active");
      break
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
  lists = document.getElementsByClassName("page-item");
  for (let i = 0; i < lists.length - 2; i++) {
    if (lists[i].className.includes("active")) {
      lists[i].classList.remove("active");
      lists[i + 1].classList.add("active");
      break
    }
  }
}

function changeCat(cat) {
  for (let i of pages) {
    currPage = document.getElementById(`page${i}`);
    let articles = currPage.getElementsByClassName("cat");
    for (let a of articles) {
      a.className.includes(cat)
        ? (a.style.display = "block")
        : (a.style.display = "none");
    }
    currPage.style.display = "block";
  }
  document.getElementById("pagination").style.display = "none";
  sidelinks = document.getElementsByClassName("sidelink")
  for (let link of sidelinks) {
    if (link.innerHTML.toUpperCase().includes(cat.toUpperCase())) {
      link.style.backgroundColor = "#369472"
      link.style.color = "white"
      link.style.borderRadius = "10px"
    } else {
      link.style.backgroundColor = "transparent"
      link.style.color = "black"
    }
  }
}

function changeColor() {
  sidelinks = document.getElementsByClassName("sidelink")
  for (let link of sidelinks) {
    console.log(link)
    if (link.innerHTML.includes("全部")) {
      link.style.backgroundColor = "#369472"
      link.style.color = "white"
      link.style.borderRadius = "10px"
    } else {
      link.style.backgroundColor = "transparent"
      link.style.color = "black"
    }
  }
}