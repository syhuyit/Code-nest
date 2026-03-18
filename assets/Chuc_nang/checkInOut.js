document.addEventListener("DOMContentLoaded", function () {
  const username = localStorage.getItem("username");

  // Nếu chưa login → về index
  if (!username) {
    window.location.href = "/index.html";
    return;
  }

  // Hiển thị tên
  const userNameEl = document.getElementById("userName");
  if (userNameEl) {
    userNameEl.innerText = username;
  }

  // Logout
  const logoutBtn = document.getElementById("logoutBtn");
  if (logoutBtn) {
    logoutBtn.addEventListener("click", function () {
      localStorage.removeItem("username");
      window.location.href = "/index.html";
    });
  }
});
