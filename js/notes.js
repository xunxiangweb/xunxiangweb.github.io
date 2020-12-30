var pages = ["1","2"];
var categories = ["tech", "business"];
var currentCat = "tech";
function changePage(page){
    for (let step = 0; step < pages.length; step++) {
        if(pages[step] == page){
            var pageShown = document.getElementById(pages[step] + currentCat);
            pageShown.style.display = 'block';
        }else{
            var pageHide = document.getElementById(pages[step] + currentCat);
            pageHide.style.display = 'none';
        }
    }
}

function changeCat(cat){
    currentCat = cat;
    var pageShown = document.getElementById("1" + currentCat);
    pageShown.style.display = 'block';

    for (let c = 0; c < categories.length; c++) {
        for (let p = 0; p < pages.length; p++) {
            if((pages[p] + categories[c]) != ("1" + cat)){
                var pageHide = document.getElementById(pages[p] + categories[c]);
                pageHide.style.display = 'none';
            }
        }
    }
}

function showAll(){
    for (let c = 0; c < categories.length; c++) {
        for (let p = 0; p < pages.length; p++) {
            var pageShown = document.getElementById(pages[p] + categories[c]);
            pageShown.style.display = 'block';
        }
    }
}