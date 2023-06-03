// function togglePassword() {
//     var password = document.getElementById('password');
//     var open = document.getElementById('open');
//     if (password.type == "password") {
//         password.type = "text";
//         open.value = "fa-eye-slash";
//     } else {
//         password.type = "password";
//         open.value = "fa-eye";
//     }
// }
// var mk = document.getElementById("mk");
// mk.type = (mk.type === "password") ? "text" : "password";

$(document).ready(function() {
    $('#eye').click(function() {
        $(this).toggleClass('open');
        $(this).children('i').toggleClass('fa-eye-slash fa-eye');
        if ($(this).hasClass('open')) {
            $(this).prev().attr('type', 'text');
        } else {
            $(this).prev().attr('type', 'password');
        }
    });
});