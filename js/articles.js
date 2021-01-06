const pageOneArticles = [
  {
    title: "在风口浪尖回收data求职路-信管学姐的成长和思考",
    desc: "算法工程师都做些什么？",
    link: "https://mp.weixin.qq.com/s/3ECItOc7JG2cekw0jQXyVQ",
    img: "img/notes/articles/01.jpeg",
    category: "tech",
  },
  {
    title: "三国求学，迪拜BCG入职：学姐讲述她的人生机遇与选择",
    desc: "算法工程师都做些什么？",
    link: "https://mp.weixin.qq.com/s/YSYOxEiDyT88MyYWIvNGeQ",
    img: "img/notes/articles/02.jpeg",
    category: "consulting",
  },
  {
    title: "在求职与旅行的道路上，赤字之心永不缺席",
    desc: "算法工程师都做些什么？",
    link: "https://mp.weixin.qq.com/s/_R__AwXaaT3MiI8ruqaglA",
    img: "img/notes/articles/03.jpeg",
    category: "consulting",
  },
  {
    title: "时尚KOL、自媒体创业者：她说，内心的声音才是唯一的答案",
    desc: "算法工程师都做些什么？",
    link: "https://mp.weixin.qq.com/s/CC9PLeWDxitHEbn8Njx5JQ",
    img: "img/notes/articles/04.jpg",
    category: "comm",
  },
  {
    title: "一个经济留学生的打怪升级之路：从伯克利到国际货币基金组织",
    desc: "算法工程师都做些什么？",
    link: "https://mp.weixin.qq.com/s/m08rGAsHM7rmmnDcMaFr2Q",
    img: "img/notes/articles/05.jpg",
    category: "others",
  }
];

const makePage = (page, articles) => {
    currPage = document.querySelector(`#${page}`)
    for (let a of articles) {
        const div = document.createElement("div")
        div.classList.add(a.category, "cat")
        currPage.append(div)

        const row = document.createElement("div")
        row.classList.add("row")
        const col9 = document.createElement("div")
        col9.classList.add("col-md-9")
        const col3 = document.createElement("div")
        col3.classList.add("col-md-3")

        const anchor = document.createElement("a")
        anchor.href = a.link
        anchor.target = "_blank"
        col9.append(anchor)

        const title = document.createElement("p")
        title.classList.add("article-title")
        title.innerText = a.title
        const desc = document.createElement("p")
        desc.classList.add("article-desc")
        desc.innerText = a.desc
        anchor.append(title, desc)

        const img = document.createElement("img")
        img.classList.add("article-img")
        img.src = a.img
        col3.append(img)

        const hr = document.createElement("hr")
        hr.classList.add("mb-5")

        row.append(col9, col3)
        div.append(row, hr)
        currPage.append(div)
    }
}

makePage("page1", pageOneArticles)