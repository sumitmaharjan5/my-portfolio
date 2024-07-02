document.addEventListener("DOMContentLoaded", () => {
  const navToggle = document.querySelector(".nav-toggle");
  const navList = document.querySelector(".main-nav-list");
  const navLink = document.querySelector(".main-nav-list");

  navToggle.addEventListener("click", () => {
    navList.classList.toggle("active");
  });

  navLink.addEventListener("click", () => {
    navList.classList.toggle("active");
  });
});
