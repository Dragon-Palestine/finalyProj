//-----------------------------------------------------------
const btnSetting = document.querySelector(".setting");
const overlay = document.querySelector(".overlay");
const aside = document.querySelector("aside");
const bullets = document.querySelector(".bullets");
const showBull = document.querySelector(
  ".show-bullets ul li:nth-of-type(1) button"
);
const hiddenBull = document.querySelector(
  ".show-bullets ul li:nth-of-type(2) button"
);

btnSetting.onclick = () => {
  overlay.classList.toggle("hidden");
  aside.classList.toggle("tran-100");
};
showBull.onclick = () => {
  bullets.classList.remove("hidden");
  hiddenBull.classList.remove("active-option");
  showBull.classList.add("active-option");
  window.localStorage.setItem("showBull", "yes");
};
hiddenBull.onclick = () => {
  bullets.classList.add("hidden");
  showBull.classList.remove("active-option");
  hiddenBull.classList.add("active-option");
  window.localStorage.setItem("showBull", "no");
};
//------------------------------------------------------------
const navBol = document.querySelectorAll("nav ul li");
const bol = document.querySelector(".bol-nav");

for (let i = 0; i < navBol.length; i++) {
  navBol[i].onmouseover = () => {
    activeNav = document
      .querySelector(".active-nav")
      .classList.remove("active-nav");
    navBol[i].classList.add("active-nav");
    bol.style.left = -13 + navBol[i].offsetLeft + "px";
  };
}
//-----------------------------------------------------------
const randBtn = document.querySelector(".rand");
const NotrandBtn = document.querySelector(".notRand");

let changeImge;

randBtn.onclick = () => {
  window.localStorage.setItem("RandomBackGround", "yes");
  NotrandBtn.classList.remove("active-option");
  randBtn.classList.add("active-option");
  changeImge = setInterval(() => {
    nextImg();
  }, 4000);
};
NotrandBtn.onclick = () => {
  window.localStorage.setItem("RandomBackGround", "no");
  randBtn.classList.remove("active-option");
  NotrandBtn.classList.add("active-option");
  clearInterval(changeImge);
  changeImge = null;
};

//-----------------------------------------------------------
const containerImges = document.querySelector(".imges-flex");
const imges = document.querySelectorAll(".imges-flex img");
let indexOfActiveImge = 1;
function nextImg() {
  const left = imges[indexOfActiveImge++ % 10].offsetLeft;
  containerImges.style.left = -left + "px";
}

//-----------------------------------------------------------
const sections = document.querySelectorAll("section");
const options = {};

const observerSec = new IntersectionObserver((entries) => {
  entries.forEach((ele) => {
    if (ele.isIntersecting) {
      ele.target.classList.add("animation-sec");
      let num = ele.target.dataset.num[1];
      let entNum = document.querySelector(`[data-num=s${num - 1}]`);
      entNum.lastElementChild.classList.add("animation-after");
    }
  });
}, options);

sections.forEach((section) => {
  observerSec.observe(section);
});
//-----------------------------------------------------------
const boxesSkill = document.querySelectorAll(".skills .skill-box");

const observeBoxesSkill = new IntersectionObserver((entries) => {
  entries.forEach((ele) => {
    if (ele.isIntersecting) {
      const progressSpan = ele.target.childNodes[3].lastElementChild;
      progressSpan.style.width = progressSpan.dataset.progress;
    }
  });
});

boxesSkill.forEach((box) => {
  observeBoxesSkill.observe(box);
});
//--------------------------------------------------------------
const rightBox = document.querySelector(".timeline .right");
const leftBoxes = document.querySelectorAll(".timeline .left");

const observeBoxesLeft = new IntersectionObserver((entries) => {
  entries.forEach((ele) => {
    if (ele.isIntersecting) {
      ele.target.classList.add("animation-box-time");
    }
  });
});

leftBoxes.forEach((leftBox) => {
  observeBoxesLeft.observe(leftBox);
});

observeBoxesLeft.observe(rightBox);

//--------------------------------------------------------------
const featBoxes = document.querySelectorAll(".feat-box");

featBoxes.forEach((featBox) => {
  observeBoxesLeft.observe(featBox);
});
//--------------------------------------------------------------
const contact = document.querySelector(".contact form");

const observeWidth = new IntersectionObserver((entries) => {
  entries.forEach((ele) => {
    if (ele.isIntersecting) {
      ele.target.style.maxWidth = "800px";
      ele.target.style.height = "fit-content";
    }
  });
});

observeWidth.observe(contact);

//--------------------------------------------------------------
const boxTs = document.querySelectorAll(".ts-box");

const observeBoxTs = new IntersectionObserver((entries) => {
  entries.forEach((ele) => {
    if (ele.isIntersecting) {
      ele.target.classList.add("animation-sec");
    }
  });
});

boxTs.forEach((boxTss) => {
  observeBoxTs.observe(boxTss);
});
//--------------------------------------------------------------

const bolscolor = document.querySelectorAll(".colors-list li");
bolscolor.forEach((bolcolor) => {
  bolcolor.onclick = () => {
    document.querySelector(".active-colors").classList.remove("active-colors");
    bolcolor.classList.add("active-colors");
    const c = bolcolor.dataset.color;
    window.localStorage.setItem("color", c);
    const root = document.documentElement;
    root.style.setProperty("--color-option", c);
  };
});

//-----------------------------------------------------------

document.addEventListener("DOMContentLoaded", () => {
  const savedColor = window.localStorage.getItem("color");
  if (savedColor) {
    const root = document.documentElement;
    root.style.setProperty("--color-option", savedColor);

    document.querySelector(".active-colors").classList.remove("active-colors");
    const activeColorElement = Array.from(
      document.querySelectorAll(".colors-list li")
    ).find((element) => element.dataset.color === savedColor);
    if (activeColorElement) {
      activeColorElement.classList.add("active-colors");
    }
  }

  //---------------------------------
  const show = window.localStorage.getItem("showBull");

  if (show === "yes" || show === null) showBull.click();
  else if (show === "no") hiddenBull.click();

  //---------------------------------
  const r = window.localStorage.getItem("RandomBackGround");
  if (r === "yes" || r === null) randBtn.click();
  else if (r === "no") NotrandBtn.click();
});

//-------------------------------------------------------------------

const rest = document.querySelector(".rest");
rest.onclick = () => {
  window.localStorage.clear();
  location.reload();
};

//-------------------------------------------------------------------
const imgesGallery = document.querySelectorAll(".images-box img");
const layImg = document.querySelector(".layimg");

imgesGallery.forEach((imgeGallery) => {
  imgeGallery.onclick = () => {
    imgeGallery.classList.toggle("big-img");
    // layImg.classList.toggle('hidden');
  };
});
//-----------------------------------
const observeImge = new IntersectionObserver((entries) => {
  entries.forEach((ele) => {
    if (ele.isIntersecting) {
      ele.target.classList.add("animation-after");
    }
  });
});

imgesGallery.forEach((imgeGallery) => {
  observeImge.observe(imgeGallery);
});

//------------------------------------------------------------------
const btnScrool = document.querySelector(".scrool");

window.onscroll = () => {
  if (window.scrollY > sections[0].offsetTop)
    btnScrool.classList.remove("hidden");
  else btnScrool.classList.add("hidden");
};

btnScrool.onclick = () => {
  window.scrollTo(0, 0);
};
