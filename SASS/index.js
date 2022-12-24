const d = document,
  $menu = d.getElementById("menu"),
  $navText = d.querySelectorAll("li a");
console.log($navText);


window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    $menu.style.backgroundColor = "hsl(243, 100%, 69%)";
    $navText.forEach((el) => el.style.color = "hsl(0,0%,90%)")
  } else {
    $navText.forEach((el) => el.style.color = " hsl(0, 1%, 52%)")
    $menu.style.backgroundColor = "";
  }
})
