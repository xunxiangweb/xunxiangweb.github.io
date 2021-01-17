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


// Articles from merging old articles.js file
const pageOneArticles = [
  {
    title: "在风口浪尖回收data求职路-信管学姐的成长和思考",
    desc:
      "本次采访我们邀请到毕业于西雅图华盛顿大学信息管理专业的 Jessica 学姐。学姐在求学阶段于中美两国都有丰富的数据方向求职经历，目前已确认入职国内互联网大厂......",
    link: "https://mp.weixin.qq.com/s/3ECItOc7JG2cekw0jQXyVQ",
    img: "img/notes/articles/01.jpeg",
    category: "tech",
  },
  {
    title: "三国求学，迪拜BCG入职：学姐讲述她的人生机遇与选择",
    desc:
      "Sisi学姐是一位很特别的咨询行业新人。她喜欢去探索不同的文化，很长一段时间都把NGO作为自己未来的职业方向。高中在印度毕业，大学在美国的一所文理学院主修南亚研究，研究生去到了伦敦商学院......",
    link: "https://mp.weixin.qq.com/s/YSYOxEiDyT88MyYWIvNGeQ",
    img: "img/notes/articles/02.jpeg",
    category: "consulting",
  },
  {
    title: "在求职与旅行的道路上，赤子之心永不缺席",
    desc:
      "众所周知，在求职咨询的时候，networking是非常重要的一项技能。对于这点，学姐建议多多利用学校资源，联系校友，尤其是背景相同的校友......",
    link: "https://mp.weixin.qq.com/s/_R__AwXaaT3MiI8ruqaglA",
    img: "img/notes/articles/03.jpeg",
    category: "consulting",
  },
  {
    title: "时尚KOL、自媒体创业者：她说，内心的声音才是唯一的答案",
    desc:
      "Cathy是一位妥妥的“别人家的孩子”。曾在许多国家生活，会多国语言，在美国UCSD读完国际关系后，到西北大学学习市场营销。毕业后，她曾到500强企业工作，现在是在小红书拥有64万......",
    link: "https://mp.weixin.qq.com/s/CC9PLeWDxitHEbn8Njx5JQ",
    img: "img/notes/articles/04.jpg",
    category: "comm",
  },
  {
    title: "一个经济留学生的打怪升级之路：从伯克利到国际货币基金组织",
    desc:
      "什么是大家梦寐以求的留学结果？是以加州伯克利3.95+/4.00的GPA获得毕业生最高荣誉奖？作为学生代表发表毕业演讲？还是进入国际货币基金组织并成为首席经济学家Gita Gopinath团队最年轻的员工？......",
    link: "https://mp.weixin.qq.com/s/m08rGAsHM7rmmnDcMaFr2Q",
    img: "img/notes/articles/05.jpg",
    category: "others",
  },
];

const pageTwoArticles = [
  {
    title: "不会经营餐厅的登山背包客不是好的产品经理",
    desc:
      "在众多留学生的求学生涯里，王钰涵学姐的经历是极为独特的。学业上，她在攻读经济和心理双专业的同时辅修了教育研究，仅用三年便以极为优异的综合成绩毕业......",
    link: "https://mp.weixin.qq.com/s/JY5L54LDUtQGBY2n-tMEig",
    img: "img/notes/articles/06.jpeg",
    category: "tech",
  },
  {
    title: "急性子的人怎么读博？",
    desc:
      "现在的她在UW-Madison攻读心理学博士，研究方向主要是评估针对自闭症女童的不同干预方案。一面做实验，一面进行临床咨询实践，她说自己每周正常情况下的工作量一般在60-80个小时......",
    link: "https://mp.weixin.qq.com/s/SDdAoOxOHQGNmOeH5-FlzQ",
    img: "img/notes/articles/07.jpeg",
    category: "education research",
  },
  {
    title: "所谓航运：遥遥千里之外，起步始于足下",
    desc:
      "在许多人随波逐流地选择了计算机和经济等大众学科时，Anna学姐是我采访中遇到最有态度和想法的受访者，不仅仅是因为她选择了从事航运管理这样的小众学科，更是因为她对独特的人生规划和健康的心态......",
    link: "https://mp.weixin.qq.com/s/mmZ1A3Myu2oRHiiHR7FlZg",
    img: "img/notes/articles/08.jpeg",
    category: "manufacturing",
  },
  {
    title: "面对初创公司和大公司，她是这样选择的",
    desc:
      "今年是桦桦学姐工作的第三年了，也是在这OPT的最后一年，她顺利地抽中了h1b。想到几年前学生时代对未来的畅想，以及刚开始在南加大学习传媒的经历，桦桦学姐不禁感叹人生的奇妙：一切的随机与意外又仿佛是早有预兆的发生......",
    link: "https://mp.weixin.qq.com/s/7P0ZLZ9hacwp0l3ZI4pqAA",
    img: "img/notes/articles/09.jpg",
    category: "manufacturing",
  },
  {
    title: "在风口浪尖回首data求职路-信管学姐的成长和思考",
    desc:
      "本次采访我们邀请到毕业于西雅图华盛顿大学信息管理专业的 Jessica 学姐。学姐在求学阶段于中美两国都有丰富的数据方向求职经历，目前已确认入职国内互联网大厂......",
    link: "https://mp.weixin.qq.com/s/3ECItOc7JG2cekw0jQXyVQ",
    img: "img/notes/articles/10.jpg",
    category: "research",
  },
];

const pageThreeArticles = [
  {
    title: "Networking、gap、实习...这个热爱跳舞的女孩想分享的还有很多！",
    desc:
      "Jessica学姐从采访一开始就给我留下了很深的印象。毕竟在我有限的采访经历里，主动要求“打开摄像头交流”的采访对象还是头一次遇到......",
    link: "https://mp.weixin.qq.com/s/AnCj1Wy0MvSqRembZo9TUQ",
    img: "img/notes/articles/11.jpg",
    category: "others",
  },
  {
    title: "你聪明的小脑瓜里，是否充满对创业的疑惑？",
    desc:
      "1995年出生的她（95后）在Babson College读研时便决定投身于艰难的实业领域（不是互联网），一手创立了Thero. Inc......",
    link: "https://mp.weixin.qq.com/s/hIugnmXhIC0abiD4OPWeZA",
    img: "img/notes/articles/12.jpg",
    category: "others",
  },
  {
    title: "从校园走向职场：有关坚持、选择、和热爱",
    desc:
      "回到原点，Tony在职业规划上也并不是一帆风顺，经过了一系列的思考和调整，基于个人兴趣和擅长领域他才最终确定了方向......",
    link: "https://mp.weixin.qq.com/s/SPoLtruU253DQsGOkCNG_A",
    img: "img/notes/articles/13.jpg",
    category: "consulting",
  },
  {
    title: "所谓求职道路上的顺风顺水 都是背后学业与实习的相辅相成",
    desc:
      "K 学长在本科期间参加了滑铁卢大学的Co-op program，在这个过程中积累了大量关于职业选择的经验和实习工作的经历。之后他前往 UCB 继续深造，将自己在金融，数学，统计等方面的知识融会贯通......",
    link: "https://mp.weixin.qq.com/s/HYNl0ePNdmfLxG5Dq7YvPg",
    img: "img/notes/articles/14.jpg",
    category: "finance",
  },
  {
    title: "找到自己喜欢的领域 做一个有辨识度的人",
    desc:
      "深知找工作的艰辛不易，子涵学姐在大一就开始积极尝试并在暑假成功开始了她的第一次实习。当时的她不确定自己将来想干什么，目标很模糊，专业也没有确定......",
    link: "https://mp.weixin.qq.com/s/zryTj87g1YokJJpnGWFaEw",
    img: "img/notes/articles/15.jpg",
    category: "finance",
  },
];

const pageFourArticles = [
  {
    title: "当下最火的营销岗位都做些什么？甲方乙方公司的区别？",
    desc:
      "而广告和传单只是营销的冰山一角，在夺人眼球的精美设计和朗朗上口的洗脑式宣传口号背后，有一个庞大的营销团队掌控着产品和服务的宣传与投放，Paris学姐就属于这个团队里的一员......",
    link: "https://mp.weixin.qq.com/s/A3vjt-FTFJKJgxQcBcdf8Q",
    img: "img/notes/articles/16.jpg",
    category: "finance",
  },
  {
    title: "15年生命科学研究之旅，我的热爱与坚持",
    desc:
      "从十二年前在中国农大本科毕业，经历了中科院、克利夫兰医学中心再到UCSD，到如今全职加入西湖大学，当谢琦学长为我们娓娓道来者十几年的科研之路时......",
    link: "https://mp.weixin.qq.com/s/fnVO-HBMTr34oIWVMMuyIw",
    img: "img/notes/articles/17.jpg",
    category: "research",
  },
  {
    title: "AI+医疗，创新者的革命",
    desc:
      "2014年底，他从新加坡的高中毕业，此时距离大学开学还有整整9个月的时间，于是他和几个同学一起，在黑龙江省正式成立扬阳教育，专门辅导学生备考SM奖学金......",
    link: "https://mp.weixin.qq.com/s/-q_fykEgofbACix4-Pw2-A",
    img: "img/notes/articles/18.jpg",
    category: "tech",
  },
  {
    title: "顶尖投行中Quant大佬的一天",
    desc:
      "学长从在职quant的角度，自身职业发展，quant技能需求，工作日常和networking方面，通过从北大到哥大再到入职的个人经历，为我们提供了很多宝贵的信息和建议......",
    link: "https://mp.weixin.qq.com/s/RB1TtyyIBDbRenNzVGv9-A",
    img: "img/notes/articles/19.jpg",
    category: "finance",
  },
  {
    title: "从高考失利，到创立“青年力量”，再到哈佛教育学院",
    desc:
      "优异的高考成绩，哈佛教育学院毕业生，拒绝哥伦比亚大学的offer并选择前往一个似乎名不见经传的Watson University，而这个仅录取二十人的社会孵化项目还为她提供全额奖学金......",
    link: "https://mp.weixin.qq.com/s/JkEJToLmFfDFZACIJaimng",
    img: "img/notes/articles/20.jpg",
    category: "education",
  },
];

const pageFiveArticles = [
  {
    title: "在快消时代做个有温度的媒体人",
    desc:
      "那一刻我不禁想到，有多少从这走出去的优秀媒体人，都在靠着自己的长枪短炮、墨水笔杆给世界带来消息或竭力发声......",
    link: "https://mp.weixin.qq.com/s/FwYU-aeHlxEdOHz_6OtRvw",
    img: "img/notes/articles/21.jpg",
    category: "comm",
  },
  {
    title: "从Minerva到斯坦福，从感受教育到研究教育",
    desc:
      "她曾经在柏林和阿根廷做过关于欧洲难民与流动儿童教育问题的田野调查；曾是中国发展研究基金会下中国城市流动儿童教育研究组的一名成员；她也曾在本科期间尝试从社会和国家层面来看待和解决现阶段的教育问题......",
    link: "https://mp.weixin.qq.com/s/hHoE6SrzQUGTl2ATGfEyGQ",
    img: "img/notes/articles/22.jpg",
    category: "research",
  },
  {
    title: "金融资讯会计，我该选哪个？",
    desc:
      "大学期间担任CSSA主席，也是商业社团Phi Beta Lambda的主席。他做过non-profit，也做过投行，大学四年不断探索方向。谈到校园活动与个人生活，他坦言有良多有趣的回忆，也有颗“闲不下来”的心......",
    link: "https://mp.weixin.qq.com/s/dbrvN4R5ot9ub0c7E7IJuw",
    img: "img/notes/articles/23.jpg",
    category: "finance",
  },
  {
    title: "非CS背景转行机器学习，并斩获阿里腾讯华为美团全职offer",
    desc:
      "强朔学长本科就读于厦门大学王亚南经济研究院，最初的计划是走金融的道路。大二时，他逐渐发现经济学科太偏理论，自己很难从各个经济学理论当中看到应用的前景，于是开始重新考虑自己的职业方向......",
    link: "https://mp.weixin.qq.com/s/1mKlpZu_69qzTP04mjINPg",
    img: "img/notes/articles/24.jpg",
    category: "tech",
  },
  {
    title: "99年到她如何“混迹”国会与投行",
    desc:
      "她说开始实习仅仅是因为高中学校课程简单，自己会没事情做，就干脆去找实习。此后她的实习经历丰富多彩，涉猎极广。在采访Alisa学姐的过程中，她讲起实习经历和经验滔滔不绝，让我印象极为深刻......",
    link: "https://mp.weixin.qq.com/s/bRcfHgmYRPmqbIrOBv6h6Q",
    img: "img/notes/articles/25.jpg",
    category: "finance",
  },
];

const pageSixArticles = [
  {
    title: "我是如何从会计专业转向投资方向的？",
    desc:
      "在UCLA，她不断探索着适合自己的专业，只为找到让自己离梦想最近的那扇门。在课余时间，她积极抓住每一个机会， 在多个行业多个岗位的实习经历中，认清自己，加速成长......",
    link: "https://mp.weixin.qq.com/s/g_9oDr0Euvv9cuYfRBY86A",
    img: "img/notes/articles/26.jpg",
    category: "finance",
  },
  {
    title: "五个国家六份实习，听她说创投的风险与理想",
    desc:
      "申请美国大学的时候，孙银蔚突发奇想在网上搜索“美国最奇葩的大学”，然后就看到了有关Minerva的新闻报道：没有固定校址、在线上课、大学四年去七个不同国家。她立即被吸引了......",
    link: "https://mp.weixin.qq.com/s/EFQ5LPLtPtyLmb3N8WUMlw",
    img: "img/notes/articles/27.png",
    category: "finance",
  },
  {
    title: "理性公益人在非洲的一年：比情怀更远一步",
    desc:
      "这段经历在常人眼里看上去不可思议——一个二十岁的姑娘为什么要休学一年去非洲做公益？但这对于Joany本人来说却是一个“必然”的决定，也是她人生一个重要的转折点......",
    link: "https://mp.weixin.qq.com/s/A8OT7JnFiwe4tS6Ej7mA4A",
    img: "img/notes/articles/28.png",
    category: "others",
  },
  {
    title: "一名CS博士生的自白",
    desc:
      "邵帅觉得自己很幸运，因为数学的美不是每个人都能接触和认识到的。他觉得自己是真的很喜欢数学，于是就开始学习数学竞赛。没有很渴望得奖，只是想获得一种精神上的满足......",
    link: "https://mp.weixin.qq.com/s/sLOJSdxF7ypWF8XH-0IlnQ",
    img: "img/notes/articles/29.png",
    category: "tech",
  },
  {
    title: "在微软实习是一种什么体验？",
    desc:
      "从作为社区志愿者教当地小学生编写程序，到作为Coding for Good主席带领学校的同学为社会中资金匮乏的公益项目提供技术支持，正如梁钰珂所说的那样......",
    link: "https://mp.weixin.qq.com/s/QQPLk07nlBITOL6VrxU7rQ",
    img: "img/notes/articles/30.png",
    category: "tech",
  },
];

// AKA 职场面对面
const pageSevenArticles = [
  {
    title: "Tech Consulting从业七年，这些是她最想说的话",
    desc:
      "德勤咨询公司（Deloitte Consulting）是全球最大的咨询公司之一，总部位于美国纽约，原为德勤集团主管咨询业务的子公司......",
    link: "https://mp.weixin.qq.com/s/bw00wkb78gAQbsEV9Ee_MA",
    img: "img/notes/articles/31.jpeg",
    category: "facetoface",
  },
  {
    title: "在市值170亿的教育公司当管培生是一种什么体验？",
    desc:
      "管培生, 全称管理培训生, 英文名称Management Trainee, 是国内外企业以”培养公司未来领导者”为目标的人才储备项目, 主要面向应届毕业生及毕业三年内的年轻人......",
    link: "https://mp.weixin.qq.com/s/KD79DExFfiST3wSf_-r7sg",
    img: "img/notes/articles/32.jpeg",
    category: "facetoface",
  },
  {
    title: "那些进微软前他没想到的事",
    desc:
      "我就是大家所说的“码农”。我的岗位名称就是Software Engineer（软件工程师）。其实很难说这个岗位具体做什么，因为每个公司、甚至一个团队当中每一个人，做的事情都大相径庭......",
    link: "https://mp.weixin.qq.com/s/SN6-VcdekRi7PytX4S9FZQ",
    img: "img/notes/articles/33.jpeg",
    category: "facetoface",
  },
];

const makePage = (page, articles) => {
  currPage = document.querySelector(`#${page}`);
  for (let a of articles) {
    const div = document.createElement("div");
    // For articles with multiple classes
    const cats = a.category.split(" ");
    for (cat of cats) {
      div.classList.add(cat);
    }
    div.classList.add("cat");
    currPage.append(div);

    const row = document.createElement("div");
    row.classList.add("row");
    const col9 = document.createElement("div");
    col9.classList.add("col-md-9");
    const col3 = document.createElement("div");
    col3.classList.add("col-md-3");

    const anchor = document.createElement("a");
    anchor.href = a.link;
    anchor.target = "_blank";
    col9.append(anchor);

    const title = document.createElement("p");
    title.classList.add("article-title");
    title.innerText = a.title;
    const desc = document.createElement("p");
    desc.classList.add("article-desc");
    desc.innerText = a.desc;
    anchor.append(title, desc);

    const img = document.createElement("img");
    img.classList.add("article-img");
    img.src = a.img;
    col3.append(img);

    const hr = document.createElement("hr");
    hr.classList.add("mb-5");

    row.append(col9, col3);
    div.append(row, hr);
    currPage.append(div);
  }
};

makePage("page1", pageOneArticles);
makePage("page2", pageTwoArticles);
makePage("page3", pageThreeArticles);
makePage("page4", pageFourArticles);
makePage("page5", pageFiveArticles);
makePage("page6", pageSixArticles);
makePage("page7", pageSevenArticles);

