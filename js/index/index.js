$(document).ready(function () {

    $('#header').prepend('<div id="menu-icon"><span class="first"></span><span class="second"></span><span class="third"></span></div>');

    $("#menu-icon").on("click", function () {
        $("nav").slideToggle();
        $(this).toggleClass("active");
    });





    document.querySelector('body').style.overflowX = 'hidden';
    $(document).on("mousewheel DOMMouseScroll", function (e) {
        var delta = (e.originalEvent.wheelDelta && (e.originalEvent.wheelDelta > 0 ? 1 : -1)) ||  // chrome & ie
            (e.originalEvent.detail && (e.originalEvent.detail > 0 ? -1 : 1));              // firefox
        var a = $(this).scrollTop();
        if (a >= 0 && a < window.innerHeight - 80) {
            if (delta < 0) {
                // 向下滚
                window.scrollTo({
                    top: window.innerHeight - 90,
                    behavior: "smooth"
                });
                // animate_scroll(window, window.innerHeight - 90);
                // $('body').css("overflow-y", "scroll");
            } else if (delta > 0) {
                // 向上滚
                animate_scroll(window, 0);
                // $('body').css("overflow-y", "hidden");
            }

        }
    });



    function animate_scroll(obj, dis) {
        clearInterval(obj.timer);
        // document.body.onmousewheel = function () { return false; }
        obj.timer = setInterval(function () {
            var step = (dis - window.pageYOffset) / 10;
            if (step > 0) {
                step = Math.ceil(step);
            } else {
                step = Math.floor(step);
            }
            if (window.pageYOffset == dis) {
                clearInterval(obj.timer);
            }
            // if (step == 0) {
            // document.body.onmousewheel = function () { return true; }
            // }
            window.scroll(0, window.pageYOffset + step);
        }, 20);
    }



    $('.readmore h3').click(function () {
        if ($(this).text() == "发现更多") {
            $(this).text('返回');
            $(this).parents().parents().addClass('showfull');
        } else {
            $(this).text('发现更多');
            $(this).parents().parents().removeClass('showfull');
        }
    });

    $('.like').click(function () {
        $(this).toggleClass('clicked');
        $(this).children("svg").toggleClass('clicked1');
    });
});