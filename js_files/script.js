// slider part
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
let currentSlide = 0;
const slideInterval = 4000; // 4 seconds

if (slides.length && dots.length) {
    function goToSlide(index) {
        slides[currentSlide].classList.remove('active');
        dots[currentSlide].classList.remove('active');

        currentSlide = index;

        slides[currentSlide].classList.add('active');
        dots[currentSlide].classList.add('active');
    }

    function nextSlide() {
        let next = (currentSlide + 1) % slides.length;
        goToSlide(next);
    }

    // Auto Play
    let slideTimer = setInterval(nextSlide, slideInterval);

    // Dot Click Event
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            clearInterval(slideTimer); // Click hone par timer reset
            goToSlide(index);
            slideTimer = setInterval(nextSlide, slideInterval); // Phir se auto start
        });
    });
}

// categories slider
const slider = document.getElementById("category-slider");
const prevbtn = document.getElementById("prev-btn");
const nextbtn = document.getElementById("next-btn");

if (slider && prevbtn && nextbtn) {
    nextbtn.addEventListener("click", function() {
        slider.scrollBy({
            left:slider.clientWidth,
            behavior: "smooth"
        });
    });

    prevbtn.addEventListener("click", function() {
        slider.scrollBy({
            left: -slider.clientWidth,
            behavior: "smooth"
        });
    });
}

// best seller slider
const sellSlider = document.getElementById("seller-slider");
const nextMove = document.getElementById("next-move");
const prevMove = document.getElementById("prev-move");

if (sellSlider && nextMove && prevMove) {
    nextMove.onclick = function () {
        sellSlider.scrollBy({
            left: sellSlider.clientWidth,
            behavior:"smooth"
        });
    };

    prevMove.onclick = function () {
        sellSlider.scrollBy({
            left: -sellSlider.clientWidth,
            behavior:"smooth"
        });
    };
}

// Mobile Navbar Toggle
const menuBtn = document.getElementById("menu-btn");
const navlinks = document.querySelector(".navlinks");

if (menuBtn && navlinks) {
    // Hamburger icon click par toggle
    menuBtn.addEventListener("click", () => {
        navlinks.classList.toggle("open");
        menuBtn.classList.toggle("ri-close-line"); // Icon cross (X) ban jayega
    });

    // Kisi bhi link par click karne par mobile menu automatically close ho jaye
    navlinks.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => {
            navlinks.classList.remove("open");
            menuBtn.classList.remove("ri-close-line");
        });
    });

    // Screen par kahi aur click karne par bhi menu close ho jaye
    document.addEventListener("click", (e) => {
        if (!menuBtn.contains(e.target) && !navlinks.contains(e.target)) {
            navlinks.classList.remove("open");
            menuBtn.classList.remove("ri-close-line");
        }
    });
}

//claude code

// Logged-in user: account icon ke paas naam, click par logout
const currentUserRaw = localStorage.getItem("travelmart_current_user");
const accountLink = document.querySelector('.social-icons a[href="auth.html"]');

if (currentUserRaw && accountLink) {
    try {
        const currentUser = JSON.parse(currentUserRaw);
        const nameTag = document.createElement("span");
        nameTag.className = "user-name";
        nameTag.textContent = currentUser.name.split(" ")[0];
        accountLink.appendChild(nameTag);
        accountLink.title = "Logged in as " + currentUser.name + " (click to logout)";

        accountLink.addEventListener("click", function (event) {
            event.preventDefault();
            if (confirm("Logout " + currentUser.name + "?")) {
                localStorage.removeItem("travelmart_current_user");
                window.location.reload();
            }
        });
    } catch (error) {
        localStorage.removeItem("travelmart_current_user");
    }
}