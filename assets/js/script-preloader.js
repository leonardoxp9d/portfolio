const elem_preloader = document.getElementById("preloader"),
      elem_loader = document.getElementById("loader");

setTimeout (function() {
  elem_preloader.classList.remove("preloader");
  elem_loader.classList.remove("loader");
}, 4180);