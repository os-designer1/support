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
  