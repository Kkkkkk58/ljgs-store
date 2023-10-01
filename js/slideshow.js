let slideIndex = 1;
const refreshTime = 5000;
let timer;
let galleryContainer;

window.addEventListener("load", function () {
  showSlides(slideIndex);
  timer = setInterval(function () {
    plusSlides(1)
  }, refreshTime);

  galleryContainer = document.getElementsByClassName('gallery__container')[0];
  galleryContainer.addEventListener('mouseenter', pause)
  galleryContainer.addEventListener('mouseleave', resume)
})

function plusSlides(n) {
  clearInterval(timer);
  if (n < 0) {
    showSlides(slideIndex -= 1);
  } else {
    showSlides(slideIndex += 1);
  }

  if (n === -1) {
    timer = setInterval(function () {
      plusSlides(n + 2)
    }, refreshTime);
  } else {
    timer = setInterval(function () {
      plusSlides(n + 1)
    }, refreshTime);
  }
}

function currentSlide(n) {
  clearInterval(timer);
  timer = setInterval(function () {
    plusSlides(n + 1)
  }, refreshTime);
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  const slides = document.getElementsByClassName("slide");
  const dots = document.getElementsByClassName("dot");

  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n <= 0) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; ++i) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; ++i) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

pause = () => {
  clearInterval(timer);
}

resume = () => {
  clearInterval(timer);
  timer = setInterval(function () {
    plusSlides(slideIndex)
  }, refreshTime);
}
