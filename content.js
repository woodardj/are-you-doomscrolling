let scrollCount = 0;

function checkScroll() {
    const currentScroll = window.pageYOffset;
    const maxScroll = document.body.scrollHeight - window.innerHeight;

    if (currentScroll === maxScroll) {
        scrollCount++;
        if (scrollCount === 2) {
            alert("Infinite scroll triggered twice!");
            scrollCount = 0;
        }
    }
}

window.addEventListener("scroll", checkScroll);