const preloader = document.getElementById("preloader"),
      loader = document.getElementById("loader");

setTimeout (function() {
  preloader.classList.remove("preloader");
  loader.classList.remove("loader");
}, 3100);
/*
window.addEventListener("load", function() {
  preloader.classList.remove("preloader");
  loader.classList.remove("loader");
});*/