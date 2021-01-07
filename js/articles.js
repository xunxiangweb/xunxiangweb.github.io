const pageOneArticles = [
  {
    title: "在风口浪尖回收data求职路-信管学姐的成长和思考",
    desc: "本次采访我们邀请到毕业于西雅图华盛顿大学信息管理专业的 Jessica 学姐。学姐在求学阶段于中美两国都有丰富的数据方向求职经历，目前已确认入职国内互联网大厂......",
    link: "https://mp.weixin.qq.com/s/3ECItOc7JG2cekw0jQXyVQ",
    img: "img/notes/articles/01.jpeg",
    category: "tech",
  },
  {
    title: "三国求学，迪拜BCG入职：学姐讲述她的人生机遇与选择",
    desc: "Sisi学姐是一位很特别的咨询行业新人。她喜欢去探索不同的文化，很长一段时间都把NGO作为自己未来的职业方向。高中在印度毕业，大学在美国的一所文理学院主修南亚研究，研究生去到了伦敦商学院......",
    link: "https://mp.weixin.qq.com/s/YSYOxEiDyT88MyYWIvNGeQ",
    img: "img/notes/articles/02.jpeg",
    category: "consulting",
  },
  {
    title: "在求职与旅行的道路上，赤字之心永不缺席",
    desc: "众所周知，在求职咨询的时候，networking是非常重要的一项技能。对于这点，学姐建议多多利用学校资源，联系校友，尤其是背景相同的校友......",
    link: "https://mp.weixin.qq.com/s/_R__AwXaaT3MiI8ruqaglA",
    img: "img/notes/articles/03.jpeg",
    category: "consulting",
  },
  {
    title: "时尚KOL、自媒体创业者：她说，内心的声音才是唯一的答案",
    desc: "Cathy是一位妥妥的“别人家的孩子”。曾在许多国家生活，会多国语言，在美国UCSD读完国际关系后，到西北大学学习市场营销。毕业后，她曾到500强企业工作，现在是在小红书拥有64万......",
    link: "https://mp.weixin.qq.com/s/CC9PLeWDxitHEbn8Njx5JQ",
    img: "img/notes/articles/04.jpg",
    category: "comm",
  },
  {
    title: "一个经济留学生的打怪升级之路：从伯克利到国际货币基金组织",
    desc: "什么是大家梦寐以求的留学结果？是以加州伯克利3.95+/4.00的GPA获得毕业生最高荣誉奖？作为学生代表发表毕业演讲？还是进入国际货币基金组织并成为首席经济学家Gita Gopinath团队最年轻的员工？......",
    link: "https://mp.weixin.qq.com/s/m08rGAsHM7rmmnDcMaFr2Q",
    img: "img/notes/articles/05.jpg",
    category: "others",
  }
];

const makePage = (page, articles) => {
    currPage = document.querySelector(`#${page}`)
    for (let a of articles) {
        const div = document.createElement("div")
        // TODO: multiple classes 
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