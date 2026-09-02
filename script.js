document.addEventListener("DOMContentLoaded", function () {

  console.log("SMD STREAMS loaded.");

  const statusTitle = document.getElementById("status-title");
  const statusText = document.getElementById("status-text");
  const statusLight = document.getElementById("status-light");

  const miniStatus = document.getElementById("mini-status");
  const miniLight = document.getElementById("mini-status-light");


  function setLiveStatus() {

    statusTitle.textContent = "🔴 LIVE NOW";
    statusText.textContent = "SMD STREAMS is live on Twitch";

    statusLight.style.background = "#ff1744";
    statusLight.style.boxShadow = "0 0 12px #ff1744";

    miniStatus.textContent = "LIVE";
    miniLight.style.background = "#ff1744";
    miniLight.style.boxShadow = "0 0 10px #ff1744";

  }


  function setOfflineStatus() {

    statusTitle.textContent = "⚫ OFFLINE";
    statusText.textContent = "Check back for the next stream";

    statusLight.style.background = "#666";
    statusLight.style.boxShadow = "none";

    miniStatus.textContent = "OFFLINE";
    miniLight.style.background = "#666";
    miniLight.style.boxShadow = "none";

  }


  function setCheckingStatus() {

    statusTitle.textContent = "CHECKING STATUS...";
    statusText.textContent = "Connecting to Twitch";

  }


  /*
    Twitch Embed
  */

  if (typeof Twitch !== "undefined") {

    const player = new Twitch.Embed(
      "twitch-player",
      {
        width: "100%",
        height: 500,
        channel: "still_madollare",
        layout: "video",
        autoplay: false,
        parent: ["madollar71.github.io"]
      }
    );


    player.addEventListener(
      Twitch.Embed.VIDEO_READY,
      function () {

        console.log("Twitch player ready.");

      }
    );


    player.addEventListener(
      Twitch.Embed.ONLINE,
      function () {

        console.log("SMD STREAMS is LIVE.");

        setLiveStatus();

      }
    );


    player.addEventListener(
      Twitch.Embed.OFFLINE,
      function () {

        console.log("SMD STREAMS is OFFLINE.");

        setOfflineStatus();

      }
    );

  } else {

    setCheckingStatus();

    console.log("Twitch Embed API failed to load.");

  }


  /*
    Navigation
  */

  const navLinks = document.querySelectorAll("nav a");

  navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

      console.log(
        "Navigation:",
        link.textContent.trim()
      );

    });

  });


  /*
    Button interaction
  */

  const buttons = document.querySelectorAll(
    ".main-button, .secondary-button, .profile-button, .twitch-profile-button, .social-card"
  );

  buttons.forEach(function (button) {

    button.addEventListener("click", function () {

      button.style.transform = "scale(0.97)";

      setTimeout(function () {

        button.style.transform = "";

      }, 120);

    });

  });


  /*
    Section reveal
  */

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