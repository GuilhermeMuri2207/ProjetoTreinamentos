// script.js
function toggleSidebar() {
    var sidebar = document.getElementById("sidebar");
    var mainContent = document.getElementById("main-content");
    sidebar.classList.toggle("expanded");
    mainContent.classList.toggle("expanded");
}

function toggleCourses(event) {
    event.preventDefault();
    var coursesList = document.querySelector(".courses-list");
    var arrow = event.target.querySelector('.arrow');
    coursesList.style.display = coursesList.style.display === "block" ? "none" : "block";
    arrow.style.transform = coursesList.style.display === "block" ? "rotate(180deg)" : "rotate(0deg)";
}

// Simulating admin login
document.addEventListener("DOMContentLoaded", function() {
    var isAdmin = true; // Change to false to hide admin-only sections
    if (isAdmin) {
        var adminItems = document.querySelectorAll(".admin-only");
        adminItems.forEach(function(item) {
            item.style.display = "block";
        });
    }
});
