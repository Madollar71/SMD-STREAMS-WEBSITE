// =====================================================
// SMD STREAMS — SCRIPT
// Twitch Player + Live Status + Loading Screen
// =====================================================

document.addEventListener("DOMContentLoaded", () => {

    // -------------------------------------------------
    // LOADING SCREEN
    // -------------------------------------------------

    const loadingScreen = document.getElementById("loading-screen");

    window.addEventListener("load", () => {
        setTimeout(() => {
            if (loadingScreen) {
                loadingScreen.classList.add("hidden");

                setTimeout(() => {
                    loadingScreen.style.display = "none";
                }, 600);
            }
        }, 800);
    });


    // -------------------------------------------------
    // TWITCH SETTINGS
    // -------------------------------------------------

    const twitchUsername = "still_madollare";

    const twitchPlayer = document.getElementById("twitch-player");

    const statusLight = document.getElementById("status-light");
    const statusTitle = document.getElementById("status-title");
    const statusText = document.getElementById("status-text");

    const miniStatusLight = document.getElementById("mini-status-light");
    const miniStatus = document.getElementById("mini-status");


    // -------------------------------------------------
    // TWITCH PLAYER
    // -------------------------------------------------

    if (twitchPlayer && typeof Twitch !== "undefined") {

        const hostname = window.location.hostname;

        const parentDomain =
            hostname === "localhost" ||
            hostname === "127.0.0.1"
                ? "localhost"
                : hostname;


        new Twitch.Embed("twitch-player", {

            width: "100%",
            height: 500,

            channel: twitchUsername,

            layout: "video",

            autoplay: false,

            muted: true,

            parent: [parentDomain]

        });

    }


    // -------------------------------------------------
    // STATUS CHECK
    // -------------------------------------------------

    async function checkTwitchStatus() {

        try {

            /*
             * Twitch does not allow a normal website to
             * directly check live status without Twitch API
             * authentication.
             *
             * Therefore we use the Twitch channel page as
             * the safest fallback.
             */

            if (statusTitle) {
                statusTitle.textContent = "SMD STREAMS";
            }

            if (statusText) {
                statusText.textContent = "Visit Twitch to see live status";
            }

            if (statusLight) {
                statusLight.classList.remove("online");
                statusLight.classList.add("offline");
            }

            if (miniStatus) {
                miniStatus.textContent = "CHECK TWITCH";
            }

            if (miniStatusLight) {
                miniStatusLight.classList.remove("online");
                miniStatusLight.classList.add("offline");
            }

        } catch (error) {

            console.error(
                "Twitch status error:",
                error
            );

        }

    }


    // Run status check
    checkTwitchStatus();


    // Check again every 60 seconds
    setInterval(
        checkTwitchStatus,
        60000
    );


    // -------------------------------------------------
    // SMOOTH SCROLLING
    // -------------------------------------------------

    document.querySelectorAll(
        'a[href^="#"]'
    ).forEach(anchor => {

        anchor.addEventListener(
            "click",
            function (event) {

                const targetId =
                    this.getAttribute("href");

                const target =
                    document.querySelector(targetId);

                if (target) {

                    event.preventDefault();

                    target.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });

                }

            }
        );

    });


    // -------------------------------------------------
    // HEADER SCROLL EFFECT
    // -------------------------------------------------

    const header =
        document.querySelector("header");

    window.addEventListener(
        "scroll",
        () => {

            if (!header) return;

            if (window.scrollY > 50) {

                header.classList.add(
                    "scrolled"
                );

            } else {

                header.classList.remove(
                    "scrolled"
                );

            }

        }
    );


    // -------------------------------------------------
    // GAMING CARD ANIMATION
    // -------------------------------------------------

    const cards =
        document.querySelectorAll(
            ".gaming-card, .social-card"
        );

    const observer =
        new IntersectionObserver(
            entries => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add(
                            "visible"
                        );

                    }

                });

            },
            {
                threshold: 0.15
            }
        );


    cards.forEach(card => {
        observer.observe(card);
    });


    // -------------------------------------------------
    // CONSOLE MESSAGE
    // -------------------------------------------------

    console.log(
        "%c SMD STREAMS ",
        "font-size:20px;font-weight:bold;"
    );

    console.log(
        "Gaming • Streaming • Entertainment"
    );

});