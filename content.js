let previousScrollHeight = 0;
let scrollIncreaseCount = 0;

function checkScroll() {
    const currentScrollHeight = document.body.scrollHeight;

    if (currentScrollHeight > previousScrollHeight) {
        scrollIncreaseCount++;
        if (scrollIncreaseCount === 15) {
            alert("Infinite scroll triggered twice!");
            scrollIncreaseCount = 0;
        }
    }

    previousScrollHeight = currentScrollHeight;
}

window.addEventListener("scroll", checkScroll);