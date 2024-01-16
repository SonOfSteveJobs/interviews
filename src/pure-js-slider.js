document.addEventListener("DOMContentLoaded", function () {
    const wrap = document.querySelector(".wrap");
    const items = document.querySelectorAll(".wrap > div");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");
    let currentIndex = 0;

    function showItem(index) {
        items.forEach((item, i) => {
            item.style.display = i === index ? "block" : "none";
        });
    }

    function nextItem() {
        currentIndex = (currentIndex + 1) % items.length;
        showItem(currentIndex);
    }

    function prevItem() {
        currentIndex = (currentIndex - 1 + items.length) % items.length;
        showItem(currentIndex);
    }

    nextBtn.addEventListener("click", nextItem);
    prevBtn.addEventListener("click", prevItem);

    showItem(currentIndex);
});
