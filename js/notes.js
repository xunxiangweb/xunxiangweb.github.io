const pages = [1, 2, 3, 4, 5, 6, 7];

function changePage(page) {
  // restore pagination from industry clicks
  document.getElementById("pagination").style.display = "block";
  // display page according to parameter
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
  // change active/inactive style of the nav numbers
  lists = document.getElementsByClassName("page-item");
  for (let li of lists) {
    pageNum = li.getElementsByTagName("a")[0].innerText;
    pageNum == page
      ? li.classList.add("active")
      : li.classList.remove("active");
    if (page === 1 && li.innerText == lists.length - 2) {
      li.style.display = "block"
    }
  }

}

function prevPage() {
  for (let i of pages) {
    // check if reachs the first nav number
    if (i === pages[0]) continue;
    // display the previous page
    currPage = document.getElementById(`page${i}`);
    if (currPage.style.display === "block") {
      currPage.style.display = "none";
      document.getElementById(`page${i - 1}`).style.display = "block";
      break;
    }
  }
  // change active/inactive style of the nav numbers 
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
  // check if 人物专访 is active
  isInterview = document.querySelector("#interviews").style.color == "white"
  for (let i of pages) {
    // check if reaches the last nav number
    if (i === pages[pages.length - 1]) break;
    // check if reaches the last nav number for interviews
    if (isInterview && i === 6) break;
    // display the next page
    currPage = document.getElementById(`page${i}`);
    if (currPage.style.display === "block") {
      currPage.style.display = "none";
      document.getElementById(`page${i + 1}`).style.display = "block";
      break;
    }
  }
  lists = document.getElementsByClassName("page-item");
  for (let i = 0; i < lists.length - 2; i++) {
    // do not change style if reach the last nav number for interviews
    if (isInterview && i === 6) break;
    // change active/inactive style of the nav numbers 
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
    // get all the articles according to the parameter
    let articles = currPage.getElementsByClassName("cat");
    for (let a of articles) {
      a.className.includes(cat)
        ? (a.style.display = "block")
        : (a.style.display = "none");
    }
    currPage.style.display = "block";
  }
  // hide pagination since each category does not contain many articles
  document.getElementById("pagination").style.display = "none";
  sidelinks = document.getElementsByClassName("sidelink")
  // change active/inactive style of the side links 
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

function changeColor(articleType) {
  // change active/inactive style for different article types 
  sidelinks = document.getElementsByClassName("sidelink")
  for (let link of sidelinks) {
    if (link.id === articleType) {
      link.style.backgroundColor = "#369472"
      link.style.color = "white"
      link.style.borderRadius = "10px"
    } else {
      link.style.backgroundColor = "transparent"
      link.style.color = "black"
    }
  }
}

function changeInterviews() {
  changePage(1)
  // Hide the last page of facetoface articles
  navNums = document.querySelectorAll(".page-item")
  for (let num of navNums) {
    if (num.innerText == navNums.length - 2) {
      num.style.display = "none"
    }
  }


}
