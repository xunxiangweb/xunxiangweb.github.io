const schoolURLs = [
  "img/LXS/school/Barnard.png",
  "img/LXS/school/Bentley.png",
  "img/LXS/school/BC.png",
  "img/LXS/school/BU.png",
  "img/LXS/school/CMU.png",
  "img/LXS/school/CMC.jpg",
  "img/LXS/school/Cornell.png",
  "img/LXS/school/Emerson.png",
  "img/LXS/school/Emory.png",
  "img/LXS/school/HMC.png",
  "img/LXS/school/mainpage/mountHcollege.png",
  "img/LXS/school/NYU.png",
  "img/LXS/school/Northwestern.png",
  "img/LXS/school/Pomona.png",
  "img/LXS/school/TuftsU.jpg",
  "img/LXS/school/Tulane.png",
  "img/LXS/school/UCB.png",
  "img/LXS/school/mainpage/ucsb.jpg",
  "img/LXS/school/UNC.png",
  "img/LXS/school/UChicago.png",
  "img/LXS/school/UGeorgia.png",
  "img/LXS/school/mainpage/iowa.png",
  "img/LXS/school/UMichigan.png",
  "img/LXS/school/UPenn.png",
  "img/LXS/school/USC.png",
  "img/LXS/school/UW-Madison.png",
  "img/LXS/school/Villanova.jpg",
  "img/LXS/school/Wesleyan.png",
];

const companyURLs = [
  "img/LXS/company/Alibaba.png",
  "img/LXS/company/mainpage/BCG.png",
  "img/LXS/company/ByteDance.png",
  "img/LXS/company/Deloitte.png",
  "img/LXS/company/mainpage/godaddy.png",
  "img/LXS/company/Goldman Sachs.png",
  "img/LXS/company/Google.png",
  "img/LXS/company/Hana.png",
  "img/LXS/company/InterMF.jpg",
  "img/LXS/company/Info.jpg",
  "img/LXS/company/Lyft.png",
  "img/LXS/company/McKinseyCompany.png",
  "img/LXS/company/mainpage/Microsoft.png",
  "img/LXS/company/Milliman.png",
  "img/LXS/company/mainpage/PwC.png",
  "img/LXS/company/Snap.png",
  "img/LXS/company/mainpage/tripadvisor.png",
  "img/LXS/company/Truist.png",
  "img/LXS/company/mainpage/Tuixiang.png",
  "img/LXS/company/mainpage/WIstateInvestmentBoard.png",
  "img/LXS/company/mainpage/Zhenfund.png",
];

const schoolSection = document.querySelector("#schoolLogoSection");
const sl = schoolURLs.length;
const schoolRowNum = sl % 3 === 0 ? Math.floor(sl / 3) : Math.floor(sl / 3) + 1;

for (let i = 0; i < schoolRowNum; i++) {
  const logoRow = document.createElement("div");
  logoRow.classList.add("row", "logo-row");
  for (let j = 0; j < 3; j++) {
    const col = document.createElement("div");
    col.classList.add("col-6", "col-md-4", "SCimg-parent");
    logoRow.append(col);
    if (!schoolURLs.length) {
      break;
    } else {
      const img = document.createElement("img");
      img.src = schoolURLs.shift();
      img.classList.add("SCimg-mp");
      col.append(img);
    }
  }
  schoolSection.append(logoRow);
}

const companySection = document.querySelector("#companyLogoSection");
const cl = companyURLs.length
const companyRowNum = cl % 3 === 0 ? Math.floor(cl / 3) : Math.floor(cl / 3) + 1;
for (let i = 0; i < companyRowNum; i++) {
  const logoRow = document.createElement("div");
  logoRow.classList.add("row", "logo-row");
  for (let j = 0; j < 3; j++) {
    const col = document.createElement("div");
    col.classList.add("col-6", "col-md-4", "SCimg-parent");
    logoRow.append(col);
    if (!companyURLs.length) {
      break;
    } else {
      const img = document.createElement("img");
      img.src = companyURLs.shift();
      img.classList.add("SCimg-mp");
      col.append(img);
    }
  }
  companySection.append(logoRow);
}
