document.addEventListener("DOMContentLoaded", function () {

  console.log("SMD STREAMS website loaded.");

  const navLinks = document.querySelectorAll("nav a");

  navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      console.log("Navigation:", link.textContent);
    });
  });

});