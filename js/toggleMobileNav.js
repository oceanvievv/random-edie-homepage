function toggleMobileNav() {
  const mobileNav = document.getElementById("mobileNav");
  const body = document.getElementById("body");
  const html = document.getElementById("html");

  mobileNav.classList.toggle("disabled");
  body.classList.toggle("overflow-disabled");
  html.classList.toggle("overflow-disabled");
}