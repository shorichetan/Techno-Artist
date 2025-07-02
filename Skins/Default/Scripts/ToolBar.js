function toggleTheme() {
  const isDark = document.body.classList.contains("dark-mode");
  document.body.classList.toggle("dark-mode", !isDark);
  document.body.classList.toggle("light-mode", isDark);
  localStorage.setItem("theme", isDark ? "light" : "dark");
}

// Apply saved theme on load
document.addEventListener("DOMContentLoaded", function () {
  const savedTheme = localStorage.getItem("theme") || "light";
  document.body.classList.add(savedTheme + "-mode");
});
