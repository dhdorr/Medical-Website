const navText = document.querySelectorAll(".nav-text");
const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".nav-links");
const subNav = document.querySelector(".sub-nav");

//Navbar slide out for mobile view
const navSlide = () => {
  //Toggle Nav
  hamburger.addEventListener("click", () => {
    nav.classList.toggle("nav-active");

    //Hamburger Animation
    hamburger.classList.toggle("toggle");
  });

  //Toggle Nav
  navText.forEach((element) => {
    element.addEventListener("click", () => {
      nav.classList.toggle("nav-active");

      //Hamburger Animation
      hamburger.classList.toggle("toggle");
    });
  });
};

//Navbar slide out for desktop view
const navExtender = () => {
  navText.forEach((element) => {
    element.addEventListener("mouseenter", () => {
      console.log(element);
      //subNav.style.setProperty("display", "block");
    });

    element.addEventListener("mouseout", () => {
      console.log(element);
      //subNav.style.setProperty("display", "none");
    });
  });
};

//Mother function that calls child functions
const medapp = () => {
  navSlide();
  navExtender();
};

medapp();
