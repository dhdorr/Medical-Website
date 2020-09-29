const navSlide = () => {
  const hamburger = document.querySelector(".hamburger");
  const nav = document.querySelector(".nav-links");
  //Toggle Nav
  hamburger.addEventListener("click", () => {
    nav.classList.toggle("nav-active");

    //Hamburger Animation
    hamburger.classList.toggle("toggle");
  });
};

//Mother function that calls child functions
const medapp = () => {
  navSlide();
};

medapp();
