let m = document.querySelector("main"),
  h = document.querySelector("header"),
  hHeight;

function setTopPadding() {
  hHeight = h.offsetHeight;
  m.style.paddingTop = hHeight + "px";
}

function onScroll() {
  // TODO use lodash throttle
  window.addEventListener("scroll", callbackFunc);
  function callbackFunc() {
    const y = window.scrollY;
    if (y > 150) {
      h.classList.add("scroll");
    } else {
      h.classList.remove("scroll");
    }
    setTopPadding();
  }
}

window.onload = function() {
  setTopPadding();
  onScroll();
};

window.onresize = function() {
  setTopPadding();
};
