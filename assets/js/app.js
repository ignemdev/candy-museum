//elements
const mainNavbar = document.querySelector("#mainNavbar");

//logic
const addScrolledClass = () =>
  mainNavbar.classList.toggle("scrolled", window.scrollY > 52);

//listeners
document.addEventListener("scroll", addScrolledClass);
