// ========================================
// THEME
// ========================================

const themeBtn =
    document.getElementById("themeBtn");


const savedTheme =
    localStorage.getItem("portfolio-theme");


if (savedTheme === "light") {

    document.body.classList.add("light");

    themeBtn.textContent = "☀";

}


themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("light");


    const light =
        document.body.classList.contains("light");


    themeBtn.textContent =
        light ? "☀" : "☾";


    localStorage.setItem(
        "portfolio-theme",
        light ? "light" : "dark"
    );

});



// ========================================
// SHARE
// ========================================

const shareBtn =
    document.getElementById("shareBtn");


const toast =
    document.getElementById("toast");


function showToast(text) {

    toast.textContent = text;

    toast.classList.add("show");


    setTimeout(() => {

        toast.classList.remove("show");

    }, 2200);

}


shareBtn.addEventListener(
    "click",
    async () => {

        const data = {

            title:
                "Krish Karan | Portfolio",

            text:
                "Check out Krish Karan's portfolio.",

            url:
                window.location.href

        };


        // Mobile share

        if (navigator.share) {

            try {

                await navigator.share(data);

            }

            catch (error) {

                console.log(
                    "Share cancelled"
                );

            }

            return;

        }


        // Desktop copy

        try {

            await navigator.clipboard
                .writeText(
                    window.location.href
                );

            showToast(
                "Website link copied!"
            );

        }

        catch {

            showToast(
                "Copy website URL manually"
            );

        }

    }
);



// ========================================
// CARD REVEAL ANIMATION
// ========================================

const cards =
    document.querySelectorAll(
        ".social-card"
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