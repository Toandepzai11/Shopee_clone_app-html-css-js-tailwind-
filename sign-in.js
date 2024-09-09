function loginForm() {
    var sdt = document.getElementById("sdt").value
    var pass = document.getElementById("password").value
    if (sdt.trim() === "" || pass.trim() === "") {
    alert("Vui lòng nhập tên người dùng và mật khẩu!");
    return false;
    } else if (sdt === "0846666015" && pass === "admin") { 
        // Thay thế bằng thông tin đăng nhập thực tế
        alert("Đăng nhập thành công!");
        // Chuyển hướng đến trang chủ (ở đây là "trang chủ.html")
        // window.location.href = 'index.html';
        window.location.assign("index.html")
        return false;
    } else {
        alert("Tên người dùng hoặc mật khẩu không đúng. Vui lòng thử lại!");
        return false;
    }
}

