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
    $login.css("left", "400px");
    $register.css("left", "870px");
});
$('.switch__register').on('click', function () {
    $login.css("left", "870px");
    $register.css("left", "400px");
});



// 注册验证
var usename = $('#register__fname').val(),
    password__val,
    register__confirm__password,
    register__cellphone,
    register__email,
    pattern = /^1[3-9]+\d{9}$/,
    myreg = /^([\.a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(\.[a-zA-Z0-9_-])+/,
    err = 0;

usename = $('#register__fname').val();
if (usename == "") {
    $('#register__fname').css('borderBottom', '1px solid red').parent().find('span').addClass('show');
    err = 0;
} else {
    $('#register__fname').css('borderBottom', '1px solid #8facbd').parent().find('span').removeClass('show');
    err = 1;
}
$('#register__fname').bind('input propertychange', function () {
    usename = $('#register__fname').val();
    if (usename == null) {
        $('#register__fname').css('borderBottom', '1px solid red').parent().find('span').addClass('show');
        err = 0;
    } else {
        $('#register__fname').css('borderBottom', '1px solid #8facbd').parent().find('span').removeClass('show');
        err = 1;
    }
});
$('#register__password').bind('input propertychange', function () {
    password__val = $('#register__password').val();
    if (password__val.length < 8) {
        $('#register__password').css('borderBottom', '1px solid red').parent().find('span').addClass('show');
        err = 0;
    } else {
        $('#register__password').css('borderBottom', '1px solid #8facbd').parent().find('span').removeClass('show');
        err = 1;
    }
});
$('#register__confirm__password').bind('input propertychange', function () {
    register__confirm__password = $('#register__confirm__password').val();
    if (register__confirm__password != password__val) {
        $('#register__confirm__password').css('borderBottom', '1px solid red').parent().find('span').addClass('show');
        err = 0;
    } else {
        $('#register__confirm__password').css('borderBottom', '1px solid #8facbd').parent().find('span').removeClass('show');
        err = 1;
    }
});
$('#register__cellphone').bind('input propertychange', function () {
    register__cellphone = $('#register__cellphone').val();
    if (!pattern.test(register__cellphone)) {
        $('#register__cellphone').css('borderBottom', '1px solid red').parent().find('span').addClass('show');
        err = 0;
    } else {
        $('#register__cellphone').css('borderBottom', '1px solid #8facbd').parent().find('span').removeClass('show');
        err = 1;
    }
});
$('#register__email').bind('input propertychange', function () {
    register__email = $('#register__email').val();
    if (!myreg.test(register__email)) {
        $('#register__email').css('borderBottom', '1px solid red').parent().find('span').addClass('show');
        err = 0;
    } else {
        $('#register__email').css('borderBottom', '1px solid #8facbd').parent().find('span').removeClass('show');
        err = 1;
    }
});

$('#registerForm').on('submit', function () {
    var result = serializeToJson($(this));
    if (result.register__fname.trim().length == 0) {
        alert('请输入用户名');
        return false;
    }
    if (result.password.trim().length == 0) {
        alert('请输入密码');
        return false;
    }
    if (result.confirm__password.trim().length == 0) {
        alert('请确认密码');
        return false;
    }
    if (result.cellphone.trim().length == 0) {
        alert('请输入电话号码');
        return false;
    }
    if (result.email.trim().length == 0) {
        alert('请输入邮箱');
        return false;
    }
    if (err == 0) {
        alert('请检查一遍信息');
        return false;
    } else {
        $.ajax({
            type: "POST",
            url: "/user/rigist",
            //方法1：将form表单数据序列化
            // data : $('#registerForm').serialize(),
            //方法2：传送json数据
            data: { username: result.register__fname.trim(), password: result.password.trim(), telephone: result.cellphone.trim(), email: result.email.trim(), checkCode: result.confirm__password.trim() },
            dataType: "json",
            success: function (flag, data, errorMsg) {
                //接收后台返回的结果
                if (falg == true) {
                    alert("提交成功");
                    window.location.Reload();
                } else {
                    alert("操作失败");
                }
            },
            error: function (data) {
                alert("操作异常" + data.responseText);
            }
        });
    }
});
function serializeToJson(form) {
    var result = {};
    var f = form.serializeArray();
    f.forEach(function (item) {
        result[item.name] = item.value;
    });
    return result;
}

// 登录验证
var login__name,
    login__password,
    err1;
$('#login__name').bind('input propertychange', function () {
    login__name = $('#login__name').val();
    if (login__name == "") {
        $('#login__name').css('borderBottom', '1px solid red').parent().find('span').addClass('show');
        err1 = 0;
    } else {
        $('#login__name').css('borderBottom', '1px solid #8facbd').parent().find('span').removeClass('show');
        err1 = 1;
    }
});
$('#login__password').bind('input propertychange', function () {
    login__password = $('#login__password').val();
    if (login__password.length < 8) {
        $('#login__password').css('borderBottom', '1px solid red').parent().find('span').addClass('show');
        err1 = 0;
    } else {
        $('#login__password').css('borderBottom', '1px solid #8facbd').parent().find('span').removeClass('show');
        err1 = 1;
    }
});
$('#loginForm').on('submit', function () {
    var result = serializeToJson($(this));
    if (result.login__name.trim().length == 0) {
        alert('请输入用户名');
        return false;
    }
    if (result.login__password.trim().length == 0) {
        alert('请输入密码');
        return false;
    }
    if (result.login__check.trim().length == 0) {
        alert('请输入验证码');
        return false;
    }
    if (err1 == 0) {
        alert('请检查一遍信息');
        return false;
    } else {
        $.ajax({
            type: "POST",
            url: "/user/login",
            //方法1：将form表单数据序列化
            // data : $('#registerForm').serialize(),
            //方法2：传送json数据
            data: { username: result.login__name.trim(), password: result.login__password.trim(), checkCode: result.login__check.trim() },
            dataType: "json",
            success: function (flag, data, errorMsg) {
                //接收后台返回的结果
                if (falg == true) {
                    alert("提交成功");
                    window.location.Reload();
                } else {
                    alert("操作失败");
                }
            },
            error: function (data) {
                alert("操作异常" + data.responseText);
            }
        });
    }
});