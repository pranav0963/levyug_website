document.addEventListener("DOMContentLoaded", function () {
    var topbar = document.getElementById("topbar");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 50) { // Adjust the scroll threshold as needed
            topbar.classList.add("hidden");
        } else {
            topbar.classList.remove("hidden");
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    var header = document.getElementById("header");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 100) {
            header.classList.add("scroll-bg");
        } else {
            header.classList.remove("scroll-bg");
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    let logo1 = document.querySelector(".hero");
    let logo2 = document.querySelector(".scroll-hero");
    logo2.classList.add("hidden")

    window.addEventListener("scroll", function () {
        if (window.scrollY > 100) {
            logo1.classList.add("hidden");
            logo2.classList.remove("hidden");
        } else {
            logo2.classList.add("hidden");
            logo1.classList.remove("hidden");
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    let links = document.querySelectorAll(".colorednav");

    window.addEventListener("scroll", function () {
        let y = window.scrollY || window.pageYOffset;

        if (y > 100) {
            links.forEach(function (link) {
                link.style.color = "#001549";
            });
        } else {
            links.forEach(function (link) {
                link.style.color = "#666666";
            });
        }
    });
});



