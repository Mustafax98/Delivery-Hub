const sidebar = document.getElementById("sidebar");
const toggleBtn = document.getElementById("toggleSidebar");
const main = document.querySelector(".main");

toggleBtn.addEventListener("click", () => {
    if (window.innerWidth <= 768) {
        // موبايل: Toggle class show
        sidebar.classList.toggle("show");
    } else {
        // ديسكتوب: Toggle hidden + تعديل عرض main
        sidebar.classList.toggle("hidden");
        main.style.width = sidebar.classList.contains("hidden") ? "100%" : "95%";
    }
});
