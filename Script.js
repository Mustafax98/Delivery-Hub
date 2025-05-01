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

document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll(".sidebar a");
    const pages = document.querySelectorAll(".page");
  
    links.forEach(link => {
      link.addEventListener("click", function (e) {
        e.preventDefault();
        const targetId = this.getAttribute("data-target");
  
        pages.forEach(page => {
          page.classList.remove("active");
        });
  
        const targetPage = document.getElementById(targetId);
        if (targetPage) {
          targetPage.classList.add("active");
        }
      });
    });
  });
