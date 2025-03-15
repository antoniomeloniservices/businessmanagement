// Gestione slideshow
let slides = document.querySelectorAll(".slide");
let slideIndex = 0;

function showSlides() {
    slides.forEach(slide => slide.classList.remove("active"));
    slides[slideIndex].classList.add("active");
    slideIndex = (slideIndex + 1) % slides.length;
}

if (slides.length > 0) {
    slides[0].classList.add("active");
    setInterval(showSlides, 3000);
}

// Animazione numeri dinamici
document.addEventListener("DOMContentLoaded", function () {
    function animateValue(id, start, end, duration) {
        let obj = document.getElementById(id);
        let range = end - start;
        let current = start;
        let increment = range / (duration / 10);
        let timer = setInterval(function () {
            current += increment;
            obj.textContent = Math.floor(current);
            if (current >= end) {
                obj.textContent = end;
                clearInterval(timer);
                obj.classList.add("highlight");
                setTimeout(() => obj.classList.remove("highlight"), 1500);
            }
        }, 10);
    }

    // Simulazione dati dinamici (OdooDBlink)
    let OdooDBlink = {
        totalRentals: Math.floor(Math.random() * 1000 + 500),
        monthlyRentals: Math.floor(Math.random() * 20 + 5),
        weeklyTenants: Math.floor(Math.random() * 10 + 2)
    };

    // Avvio animazioni
    animateValue("total-rentals", 0, OdooDBlink.totalRentals, 2000);
    animateValue("monthly-rentals", 0, OdooDBlink.monthlyRentals, 2000);
    animateValue("weekly-tenants", 0, OdooDBlink.weeklyTenants, 2000);

    // Aggiorna i numeri ogni 10 secondi
    setInterval(() => {
        OdooDBlink.totalRentals += Math.floor(Math.random() * 10);
        OdooDBlink.monthlyRentals += Math.floor(Math.random() * 3);
        OdooDBlink.weeklyTenants += Math.floor(Math.random() * 2);
        animateValue("total-rentals", parseInt(document.getElementById("total-rentals").textContent), OdooDBlink.totalRentals, 1500);
        animateValue("monthly-rentals", parseInt(document.getElementById("monthly-rentals").textContent), OdooDBlink.monthlyRentals, 1500);
        animateValue("weekly-tenants", parseInt(document.getElementById("weekly-tenants").textContent), OdooDBlink.weeklyTenants, 1500);
    }, 10000);
});
