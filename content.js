let previousScrollHeight = 0;
let scrollIncreaseCount = 0;

function checkScroll() {
    const currentScrollHeight = document.body.scrollHeight;

    if (currentScrollHeight > previousScrollHeight) {
        scrollIncreaseCount++;
        if (scrollIncreaseCount === 15) {
            alert("Are you Doomscrolling?");
            scrollIncreaseCount = 0;
        }
    }

    previousScrollHeight = currentScrollHeight;
}

window.addEventListener("scroll", checkScroll);