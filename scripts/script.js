const menu_icon = document.querySelector(".menu_icon");
const navigation = document.querySelector("nav");
const header = document.querySelector('#header');
const body = document.querySelector("body");
const sticky = header.offsetTop + 25;

menu_icon.addEventListener('click', () => {
  navigation.classList.toggle("hide");
  menu_icon.classList.toggle("change");
});

navigation.addEventListener('click', () => {
  navigation.classList.toggle("hide");
  menu_icon.classList.remove("change");
});

window.addEventListener("scroll", function() {
  if (window.pageYOffset >= sticky) {
    header.classList.add("sticky");
    body.classList.add("stack");
  } else {
    header.classList.remove("sticky");
    body.classList.remove("stack");
  }
});
