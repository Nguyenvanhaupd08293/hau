function mySearch() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("navbar");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        txtValue = li[i].textContent || li[i].innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}

function login() {
    // Lấy giá trị nhập từ form
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Kiểm tra giá trị nhập vào
    if (username == "" || password == "") {
        alert("Vui lòng nhập tên đăng nhập và mật khẩu");
    } else if (username == "admin" && password == "123456") {
        alert("Đăng nhập thành công!");
    } else {
        alert("Tên đăng nhập hoặc mật khẩu không đúng");
    }
}
document.getElementById('next').onclick = function() {
    const widthItem = document.querySelector('.item').offsetWidth;
    document.getElementById('formList').scrollLeft += widthItem;
}
document.getElementById('prev').onclick = function() {
    const widthItem = document.querySelector('.item').offsetWidth;
    document.getElementById('formList').scrollLeft -= widthItem;
}
document.getElementById('nex').onclick = function() {
    const widthItem = document.querySelector('.item').offsetWidth;
    document.getElementById('form').scrollLeft += widthItem;
}
document.getElementById('pre').onclick = function() {
    const widthItem = document.querySelector('.item').offsetWidth;
    document.getElementById('form').scrollLeft -= widthItem;
}