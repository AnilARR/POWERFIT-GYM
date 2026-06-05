/* ===================================
   POWERFIT GYM - SCRIPT.JS
=================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* ==========================
       MOBILE MENU TOGGLE
    ========================== */

    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");

    if (hamburger) {
        hamburger.addEventListener("click", () => {
            navMenu.classList.toggle("active");

            const icon = hamburger.querySelector("i");

            if (navMenu.classList.contains("active")) {
                icon.classList.remove("fa-bars");
                icon.classList.add("fa-times");
            } else {
                icon.classList.remove("fa-times");
                icon.classList.add("fa-bars");
            }
        });
    }

    document.querySelectorAll(".nav-link").forEach(link => {
        link.addEventListener("click", () => {
            navMenu.classList.remove("active");

            const icon = hamburger.querySelector("i");
            icon.classList.remove("fa-times");
            icon.classList.add("fa-bars");
        });
    });

    /* ==========================
       ACTIVE NAVIGATION LINK
    ========================== */

    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-link");

    window.addEventListener("scroll", () => {

        let current = "";

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 150;
            const sectionHeight = section.clientHeight;

            if (pageYOffset >= sectionTop) {
                current = section.getAttribute("id");
            }
        });

        navLinks.forEach(link => {
            link.classList.remove("active");

            if (link.getAttribute("href") === `#${current}`) {
                link.classList.add("active");
            }
        });
    });

    /* ==========================
       COUNTER ANIMATION
    ========================== */

    const counters = document.querySelectorAll(".counter");

    const animateCounter = counter => {

        const target = +counter.getAttribute("data-target");

        let count = 0;

        const speed = target / 150;

        const updateCount = () => {

            if (count < target) {

                count += speed;

                counter.innerText = Math.ceil(count);

                requestAnimationFrame(updateCount);

            } else {

                counter.innerText = target + "+";
            }
        };

        updateCount();
    };

    const counterObserver = new IntersectionObserver(entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                animateCounter(entry.target);

                counterObserver.unobserve(entry.target);
            }
        });

    }, {
        threshold: 0.5
    });

    counters.forEach(counter => {
        counterObserver.observe(counter);
    });

    /* ==========================
       BMI CALCULATOR
    ========================== */

    const bmiBtn = document.getElementById("calculateBMI");

    if (bmiBtn) {

        bmiBtn.addEventListener("click", () => {

            const height =
                parseFloat(document.getElementById("height").value);

            const weight =
                parseFloat(document.getElementById("weight").value);

            const bmiResult =
                document.getElementById("bmiResult");

            const bmiStatus =
                document.getElementById("bmiStatus");

            if (!height || !weight) {

                bmiResult.innerHTML = "Please enter valid values";
                bmiStatus.innerHTML = "";

                return;
            }

            const bmi =
                weight / ((height / 100) * (height / 100));

            bmiResult.innerHTML =
                `BMI: ${bmi.toFixed(1)}`;

            let status = "";

            if (bmi < 18.5) {

                status = "Underweight";

            } else if (bmi >= 18.5 && bmi < 25) {

                status = "Normal Weight";

            } else if (bmi >= 25 && bmi < 30) {

                status = "Overweight";

            } else {

                status = "Obese";
            }

            bmiStatus.innerHTML =
                `Health Status: ${status}`;
        });
    }

    /* ==========================
       CONTACT FORM VALIDATION
    ========================== */
const contactForm =
document.getElementById("contactForm");

if(contactForm){

    contactForm.addEventListener("submit", function(e){

        e.preventDefault();

        const name =
        document.getElementById("name").value;

        const email =
        document.getElementById("email").value;

        const phone =
        document.getElementById("phone").value;

        const message =
        document.getElementById("message").value;

        const subject =
        encodeURIComponent(
            "PowerFit Gym Contact Request"
        );

        const body =
        encodeURIComponent(
            "Name: " + name + "\n" +
            "Email: " + email + "\n" +
            "Phone: " + phone + "\n\n" +
            "Message:\n" + message
        );

        window.location.href =
        "mailto:anilrathod.ar716@gmail.com" +
        "?subject=" + subject +
        "&body=" + body;
    });
}
    /* ==========================
       SCROLL REVEAL ANIMATION
    ========================== */

    const revealElements = document.querySelectorAll(
        ".about-card, .plan-card, .exercise-card, .diet-card, .trainer-card, .price-card, .benefit, .gallery-grid img"
    );

    revealElements.forEach(element => {
        element.classList.add("reveal");
    });

    const revealObserver = new IntersectionObserver(entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("active");
            }

        });

    }, {
        threshold: 0.15
    });

    revealElements.forEach(element => {
        revealObserver.observe(element);
    });

    /* ==========================
       STICKY NAVBAR EFFECT
    ========================== */

    const header = document.querySelector(".header");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 50) {

            header.style.background =
                "rgba(0,0,0,0.95)";

            header.style.boxShadow =
                "0 10px 25px rgba(0,0,0,0.4)";

        } else {

            header.style.background =
                "rgba(0,0,0,0.7)";

            header.style.boxShadow = "none";
        }
    });

    /* ==========================
       GALLERY HOVER ZOOM
    ========================== */

    const galleryImages =
        document.querySelectorAll(".gallery-grid img");

    galleryImages.forEach(img => {

        img.addEventListener("mouseenter", () => {

            img.style.transform =
                "scale(1.08)";
        });

        img.addEventListener("mouseleave", () => {

            img.style.transform =
                "scale(1)";
        });

    });

    /* ==========================
       SMOOTH SCROLL
    ========================== */

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {

        anchor.addEventListener("click", function (e) {

            e.preventDefault();

            const target =
                document.querySelector(
                    this.getAttribute("href")
                );

            if (target) {

                window.scrollTo({

                    top: target.offsetTop - 70,

                    behavior: "smooth"
                });
            }
        });
    });

    /* ==========================
       HERO BUTTON ANIMATION
    ========================== */

    const buttons =
        document.querySelectorAll(".btn");

    buttons.forEach(btn => {

        btn.addEventListener("mouseenter", () => {

            btn.style.transform =
                "translateY(-4px)";
        });

        btn.addEventListener("mouseleave", () => {

            btn.style.transform =
                "translateY(0)";
        });
    });

    /* ==========================
       CURRENT YEAR AUTO UPDATE
    ========================== */

    const copyright =
        document.querySelector(".copyright");

    if (copyright) {

        const year = new Date().getFullYear();

        copyright.innerHTML =
            `© ${year} PowerFit Gym. All Rights Reserved.`;
    }

});