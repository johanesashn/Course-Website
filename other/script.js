const menu = document.querySelector(".menu-toggle");
const navUl = document.querySelector("nav ul");
const navSpan = document.querySelectorAll("nav span");
const navbar = document.querySelector("nav");
const imgNav = document.querySelector("nav .main img");
const alasanButton = document.querySelector(".alasan button");
const alasanP = document.querySelector(".alasan .explanation p");
const kelasButton = document.querySelectorAll(".kelas .buttons button");
const faqQuestions = document.querySelectorAll(".faq .questions .question");
const faqAnswers = document.querySelectorAll(".faq .questions .answer");
const faqImg = document.querySelectorAll(".faq img");
const faqHeads = document.querySelectorAll('.faq .head')

menu.addEventListener("click", function () {
  navUl.classList.toggle("slide");
  navSpan[0].classList.toggle("span1");
  navSpan[1].classList.toggle("hide");
  navSpan[2].classList.toggle("span3");
});

for (let i = 0; i < faqQuestions.length; i++) {
  faqQuestions[i].addEventListener("click", function () {

    // if (faqImg[i].src == 'img/arrow2.png' ){
    //     faqImg[i].setAttribute('src', 'img/arrow.png')
    //     console.log('arrow1');
    //     console.log(faqImg[i].src == 'img/arrow2.png' )
    // } else {
    //     faqImg[i].setAttribute('src', 'img/arrow.png')
    //     console.log("arrow2")
    // }

    

    faqHeads[i].classList.toggle('active')
    faqAnswers[i].classList.toggle("active");
    faqImg[i].classList.toggle("active");
  })
}

kelasButton.forEach(function (button) {
  button.addEventListener("click", function () {
    kelasButton.forEach(function (but) {
      but.classList.remove("active");
    });
    button.classList.toggle("active");
  });
});

window.addEventListener("scroll", () => {
  if (window.scrollY >= 50) {
    navbar.classList.add("active_nav");
    imgNav.setAttribute("src", "../img/navbar2.png");
    navSpan.forEach((span) => {
      span.classList.add("active_span");
    });
    navUl.classList.add("active_ul");
  } else {
    navbar.classList.remove("active_nav");
    imgNav.setAttribute("src", "../img/navbar.png");
    navSpan.forEach((span) => {
      span.classList.remove("active_span");
    });
    navUl.classList.remove("active_ul");
  }
});
