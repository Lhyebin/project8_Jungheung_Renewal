$(function () {

    // 메인비쥬얼 다음페이지
    $('.visual_wrap').slick({
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 1000,
        pauseOnHover: false,
        pauseOnFocus: false,
        fade: true,
    });

    // 메인비쥬얼 다음페이지 화살표
    $('.main_visual .main_arrows .left').on('click', function () {
        $('.visual_wrap').slick('slickPrev')
    })
    $('.main_visual .main_arrows .right').on('click', function () {
        $('.visual_wrap').slick('slickNext')
    })

    $('.scroll_down').on('click', function (e) {
        e.preventDefault();
        const st = $(this.hash).offset().top;
        console.log(st);
        $('html, body').animate({ scrollTop: st }, 600);
    })





});