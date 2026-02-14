function showMessage() {
    alert("Whistle Podu! 💛 CSK Forever 🦁");
}
document.addEventListener("DOMContentLoaded", () => {

    

    const flipCards = document.querySelectorAll(".player-card");

    flipCards.forEach(card => {
        card.addEventListener("click", () => {

            
            flipCards.forEach(otherCard => {
                if (otherCard !== card) {
                    otherCard.classList.remove("flip");
                }
            });

           
            card.classList.toggle("flip");
        });
    });

    const progressFill = document.querySelector(".progress-fill");

window.addEventListener("scroll", () => {

    const scrollTop = document.documentElement.scrollTop;
    const scrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    const scrollPercent = (scrollTop / scrollHeight) * 100;

    progressFill.style.width = scrollPercent + "%";
});


    const form = document.getElementById("contactForm");
    const successMsg = document.getElementById("successMsg");

    if (form) {
        form.addEventListener("submit", function (e) {
            e.preventDefault();

            successMsg.style.display = "block";
            successMsg.innerHTML =
                "🎉 Thank you for joining CSK Fan Club!";

            form.reset();

            setTimeout(() => {
                successMsg.style.display = "none";
            }, 4000);
        });
    }


    

    const counters = document.querySelectorAll(".counter");

    counters.forEach(counter => {
        counter.innerText = "0";

        const updateCounter = () => {
            const target = +counter.getAttribute("data-target");
            const current = +counter.innerText;
            const increment = target / 100;

            if (current < target) {
                counter.innerText = Math.ceil(current + increment);
                setTimeout(updateCounter, 20);
            } else {
                counter.innerText = target;
            }
        };

        updateCounter();
    });


    

    const navLinks = document.querySelectorAll("a[href^='#']");

    navLinks.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();

            const target = document.querySelector(
                this.getAttribute("href")
            );

            if (target) {
                target.scrollIntoView({
                    behavior: "smooth"
                });
            }
        });
    });

});
