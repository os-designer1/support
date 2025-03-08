function toggleNav() {
    const nav = document.getElementById("nav");
    nav.classList.toggle("active");
}

window.onload = function() {
    // عندما يتم تحميل كل شيء، إخفاء شاشة التحميل
    document.getElementById('loader').style.display = 'none';
    // إظهار المحتوى
    document.getElementById('content').style.display = 'block';
  }
  


  document.addEventListener("DOMContentLoaded", function () {
    const columns = document.querySelectorAll(".footer-column h4");
    columns.forEach(column => {
        column.addEventListener("click", function () {
            let parent = this.parentElement;
            parent.classList.toggle("open");
        });
    });
});