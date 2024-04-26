const navOpen = document.querySelector(".nav-open");
const navClose = document.querySelector(".nav-close");
const nav = document.querySelector(".nav");

navOpen.addEventListener("click", () => {
  console.log("open");
  nav.classList.add("open-navigation");
});

navClose.addEventListener("click", () => {
  console.log("close");
  nav.classList.remove("open-navigation");
});
