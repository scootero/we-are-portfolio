let phoneFull = document.getElementById("phone-full");
let footer = document.getElementById("footer");
let mediaWidth = 1000;
let isMediaMatch = window.matchMedia(`(max-width: ${mediaWidth}px)`);
let model = document.getElementById("model");
let line = document.getElementById("line");
function revealY() {
  let revealY = document.querySelectorAll(".reveal-y");
  for (let i = 0; i < revealY.length; i++) {
    let windowHeight = window.innerHeight;
    let elementTop = revealY[i].getBoundingClientRect().top;
    let elementVisible = 100;
    if (elementTop < windowHeight - elementVisible) {
      revealY[i].classList.add("active");
    } else {
      revealY[i].classList.remove("active");
    }
  }
}
let revealTextX = document.querySelectorAll(".reveal-spread-x");

function revealSpreadX() {
  for (let i = 0; i < revealTextX.length; i++) {
    let windowHeight = window.innerHeight;
    let elementTop = revealTextX[i].getBoundingClientRect().top;
    let elementVisible = -120 + i * 70;
    if (elementTop < windowHeight - elementVisible) {
      revealTextX[i].classList.add("active");
    } else {
      revealTextX[i].classList.remove("active");
    }
  }
}

function collapseXMedia() {
  // let collapseX = document.querySelectorAll(".reveal-spread-x");
  for (let i = 0; i < revealTextX.length; i++) {
    revealTextX[i].classList.add("active");
  }
}

function checkMedia(isMedia) {
  if (isMedia.matches) {
    collapseXMedia();
  } else {
    window.addEventListener("scroll", revealSpreadX);
  }
}

function scrollMakeVisible(thisElement, addClass, delayPx = 0) {
  let position = thisElement.getBoundingClientRect().top;
  let innerHeight = window.innerHeight;
  // console.log(position, innerHeight + delayPx);
  if (position <= innerHeight + delayPx) {
    // console.log("show .. " + position.top, innerHeight);
    thisElement.classList.add(addClass);
  } else {
    // console.log("hide .. " + position.top, innerHeight);
    thisElement.classList.remove(addClass);
  }
}

function footerScroll() {
  scrollMakeVisible(footer, "show", 100);
}

function modelScroll() {
  scrollMakeVisible(model, "show", -280);
}
function lineScroll() {
  scrollMakeVisible(line, "show");
}

window.onload = (event) => {
  scrollMakeVisible(model);

  phoneFull.classList.add("loaded");
  checkMedia(isMediaMatch);
  scrollMakeVisible(footer);
};

// isMediaMatch.addEventListener(checkMedia);
window.addEventListener("scroll", revealY);
window.addEventListener("scroll", revealSpreadX);
// window.addEventListener("scroll", footerScroll);
window.addEventListener("scroll", modelScroll);
window.addEventListener("scroll", lineScroll);
