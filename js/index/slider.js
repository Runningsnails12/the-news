$(document).ready(function () {

    var $slider = $(".slider"),
        $slideBGs = $(".slide__bg"),
        curSlide = 0,
        numOfSlides = $(".slide").length - 1,
        animating = false,
        animTime = 500,
        autoSlideTimeout,
        autoSlideDelay = 6000,
        $pagination = $(".slider-pagi");

    //创建圆点
    function createBullets() {
        for (var i = 0; i < numOfSlides + 1; i++) {
            var lis = $("<li class='slider-pagi__elem'></li>");
            lis.addClass("slider-pagi__elem-" + i).data("page", i);
            if (i == 0)
                lis.addClass("active");
            $pagination.append(lis);
        }
    };

    createBullets();

    //按钮控制按钮
    function manageControls() {
        $(".slider-control").removeClass("inactive");
        if (curSlide == 0)
            $(".slider-control.left").addClass("inactive");
        if (curSlide == numOfSlides)
            $(".slider-control.right").addClass("inactive");
    };


    function autoSlide() {
        autoSlideTimeout = setTimeout(function () {
            curSlide++;
            if (curSlide > numOfSlides)
                curSlide = 0;
            changeSlides();
        }, autoSlideDelay);
    };

    autoSlide();

    function changeSlides(instant) {
        if (!instant) {
            animating = true;
            manageControls();
            $slider.addClass("animating");
            $slider.css("top");
            $(".slide").removeClass("active");
            $(".slide-" + curSlide).addClass("active");
            setTimeout(function () {
                $slider.removeClass("animating");
                animating = false;
            }, animTime);
        }
        window.clearTimeout(autoSlideTimeout);
        $(".slider-pagi__elem").removeClass("active");
        $(".slider-pagi__elem-" + curSlide).addClass("active");
        $slider.css("transform", "translate3d(" + -curSlide * 100 + "%,0,0)");
        $slideBGs.css("transform", "translate3d(" + curSlide * 50 + "%,0,0)");
        diff = 0;
        autoSlide();
    }

    //左边按钮

    function navigateLeft() {
        if (animating)
            return;
        if (curSlide > 0)
            curSlide--;
        changeSlides();
    }
    //右边按钮

    function navigateRight() {
        if (animating)
            return;
        if (curSlide < numOfSlides)
            curSlide++;
        changeSlides();
    }

    //按钮点击
    $(document).on("click", ".slider-control", function () {
        if ($(this).hasClass("left")) {
            navigateLeft();
        } else {
            navigateRight();
        }
    });

    //圆点点击
    $(document).on("click", ".slider-pagi__elem", function () {
        curSlide = $(this).data("page");
        changeSlides();
    });

});