document.addEventListener("DOMContentLoaded", function () {

  console.log("SMD STREAMS website loaded successfully.");

  const navLinks = document.querySelectorAll("nav a");

  navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

      console.log(
        "SMD STREAMS navigation:",
        link.textContent.trim()
      );

    });

  });


  /* Smooth button interaction */

  const buttons = document.querySelectorAll(
    ".main-button, .secondary-button, .profile-button, .social-card"
  );

  buttons.forEach(function (button) {

    button.addEventListener("click", function () {

      button.style.transform = "scale(0.97)";

      setTimeout(function () {
        button.style.transform = "";
      }, 120);

    });

  });


  /* Simple reveal animation */

  const sections = document.querySelectorAll("section");

  const observer = new IntersectionObserver(
    function (entries) {

      entries.forEach(function (entry) {

        if (entry.isIntersecting) {

          entry.target.classList.add("visible");

        }

      });

    },
    {
      threshold: 0.08
    }
  );


  sections.forEach(function (section) {

    section.classList.add("reveal");

    observer.observe(section);

  });

});