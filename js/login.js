$('.login__register input').on('focusin', function () {
    $(this).parent().find('label').addClass('active');
});

$('.login__register input').on('focusout', function () {
    if (!this.value) {
        $(this).parent().find('label').removeClass('active');
    }
});


var $login = $('.login'),
    $register = $('.register');

$('.switch__login').on('click', function () {
    $login.css("left", "480px");
    $register.css("left", "950px");
});
$('.switch__register').on('click', function () {
    $login.css("left", "950px");
    $register.css("left", "480px");
});



var usename = $('#register__fname').val();
var password__val;
var register__confirm__password;
var register__cellphone;
var register__email;
var pattern = /^1[3-9]+\d{9}$/;
var myreg = /^([\.a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(\.[a-zA-Z0-9_-])+/;


usename = $('#register__fname').val();
if (usename == "") {
    $('#register__fname').parent().find('span').addClass('show');
} else {
    $('#register__fname').parent().find('span').removeClass('show');
}
$('#register__fname').bind('input propertychange', function () {
    console.log(2);

    usename = $('#register__fname').val();
    if (usename == null) {
        $('#register__fname').parent().find('span').addClass('show');
    } else {
        $('#register__fname').parent().find('span').removeClass('show');
    }
});
$('#register__password').bind('input propertychange', function () {
    password__val = $('#register__password').val();
    if (password__val.length < 8) {
        $('#register__password').parent().find('span').addClass('show');
    } else {
        $('#register__password').parent().find('span').removeClass('show');
    }
});
$('#register__confirm__password').bind('input propertychange', function () {
    register__confirm__password = $('#register__confirm__password').val();
    if (register__confirm__password != password__val) {
        $('#register__confirm__password').parent().find('span').addClass('show');
    } else {
        $('#register__confirm__password').parent().find('span').removeClass('show');
    }
});
$('#register__cellphone').bind('input propertychange', function () {
    register__cellphone = $('#register__cellphone').val();
    if (!pattern.test(register__cellphone)) {
        $('#register__cellphone').parent().find('span').addClass('show');
    } else {
        $('#register__cellphone').parent().find('span').removeClass('show');
    }
});
$('#register__email').bind('input propertychange', function () {
    register__email = $('#register__email').val();
    if (!myreg.test(register__email)) {
        $('#register__email').parent().find('span').addClass('show');
    } else {
        $('#register__email').parent().find('span').removeClass('show');
    }
});