const icons = document.querySelector(".social-icons");
const home__aspiring = document.querySelector(".home__aspiring");
const home__name = document.querySelector(".home__name");
const home__hello = document.querySelector(".home__hello");
const home = document.querySelector(".home");
const footer = document.querySelector("footer");
const nav = document.querySelector(".nav");
const home__img = document.querySelector(".home__img");
const scroll__down = document.querySelector(".scroll__down");
const fab_icons = document.querySelectorAll(".icons");
const form = document.getElementById("my_form");

const onLoad = () => {
  nav.style.opacity = 1;
  home__name.style.right = "-0.3%";
  home__aspiring.style.left = "0";
  home__img.style.top = "0";
  footer.style.opacity = 1;
  scroll__down.style.opacity = 1;
};

document.addEventListener("scroll", function () {
  if (pageYOffset > 50) {
    nav.classList.add("white");
    footer.style.opacity = 0;
    scroll__down.style.opacity = 0;
  } else {
    nav.classList.remove("white");
    footer.style.opacity = 1;
    scroll__down.style.opacity = 1;
    fab_icons.forEach((x) => (x.style.color = "#f7f7f7"));
    fab_icons.forEach((x) => {
      x.addEventListener("mouseover", function () {
        x.style.opacity = 0.8;
      });
      x.addEventListener("mouseleave", function () {
        x.style.opacity = 1;
      });
    });
    footer.style.color = "#f7f7f7";
  }
});

$(window).scroll(function () {
  if ($(window).scrollTop() + $(window).height() > $(document).height() - 100) {
    footer.style.opacity = 1;
    fab_icons.forEach((x) => (x.style.color = "#000000bb"));
    footer.style.color = "#000000bb";
  }
});

onLoad();

$(".navTrigger").click(function () {
  $(this).toggleClass("active");
  console.log("Clicked menu");
  $("#mainListDiv").toggleClass("show_list");
  $("#mainListDiv").fadeIn();
});

const reset = () => {
  form.reset();
};
