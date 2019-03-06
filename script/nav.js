$(document).ready(function () {
    var navY = $('#nav').offset().top;

    var stickyNav = function () {
        var scrollY = $(window).scrollTop();

        if (scrollY > navY) {
            $('#nav').addClass('sticky');
            $('#content').css('padding-top', '70px');
        } else {
            $('#nav').removeClass('sticky');
            $('#content').css('padding-top', '10px');
        }
    };

    stickyNav();

    $(window).scroll(function () {
        stickyNav();
    });
});
