const hambugerMenu = document.querySelector(`[data-mobile-menu]`);
const mobileMenuContainer = document.querySelector(`[data-mobile-menu-container]`);

hambugerMenu.addEventListener("click", () => {
  console.log(mobileMenuContainer);
  mobileMenuContainer.classList.toggle("active");
  hambugerMenu.classList.toggle("active");
});
