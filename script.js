document.addEventListener("DOMContentLoaded", function () {
    const revealElements = document.querySelectorAll(".scroll-reveal");

    function reveal() {
        revealElements.forEach((el) => {
            const top = el.getBoundingClientRect().top;
            if (top < window.innerHeight * 0.85) {
                el.style.opacity = "1";
                el.style.transform = "translateY(0)";
            }
        });
    }

    window.addEventListener("scroll", reveal);
    reveal(); // Ensures elements are visible on initial load

    // Copy email to clipboard function
    function copyToClipboard(event, text) {
        event.preventDefault();
        navigator.clipboard.writeText(text).then(() => {
            alert("Email copied to clipboard!");
        }).catch(err => {
            console.error("Failed to copy: ", err);
        });
    }

    // Attach event listener for email copy
    document.querySelector("a[onclick]").addEventListener("click", function (event) {
        copyToClipboard(event, "velevelakevinjoel@gmail.com");
    });
});
