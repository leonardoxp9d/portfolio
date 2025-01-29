const preloader = document.getElementById("preloader"),
      loader = document.getElementById("loader");

setTimeout (function() {
  preloader.classList.remove("preloader");
  loader.classList.remove("loader");
}, 3180);