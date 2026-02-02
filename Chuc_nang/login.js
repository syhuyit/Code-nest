// Lấy form đăng nhập
const form = document.getElementById("loginForm");

// Bắt sự kiện submit
form.addEventListener("submit", function (event) {
  // Ngăn form reload trang
  event.preventDefault();

  // Lấy dữ liệu người dùng nhập
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // Tài khoản & mật khẩu mẫu
  const correctUsername = "admin";
  const correctPassword = "123456";

  // Kiểm tra đăng nhập
  if (username === correctUsername && password === correctPassword) {
    alert("Đăng nhập thành công!");

    // Chuyển sang trang home
    window.location.href = "home.html";
  } else {
    alert("Sai tài khoản hoặc mật khẩu!");
  }
});
