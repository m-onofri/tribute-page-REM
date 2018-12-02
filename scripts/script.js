let menu_icon = document.querySelector(".menu_icon");
let navigation = document.querySelector("nav");
menu_icon.addEventListener('click', () => {
  navigation.classList.toggle("hide");
});
