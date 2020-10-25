$(function () {
    $('.comment__input__txt').focus(function () {
        $(this).addClass("comment__input__txt__show");
    });
    $('.comment__input__txt').blur(function () {
        $(this).removeClass("comment__input__txt__show");
    });

    $(".comment__submit").on("click", function () {
        var value = $(".comment__input__txt").val();
        if (value.trim().length == 0) {
            return 0;
        }
        var user__face = $(".user__face").text();
        console.log(user__face);

        var li = $("<li class='list__item'><span class='comment__user__name'>" + user__face + "</span><p class='comment__content'>" + value + "</p><span class='comment__time'>2019-04-29 16:19</span></li>");
        // li.html();
        $(".comment__list").prepend(li);
        li.slideDown();
        $(".comment__input__txt").val("");
    });


    $("ul").on("click", "a", function () {
        $(this).parent().slideUp(function () {
            $(this).remove();
        });
    });

})