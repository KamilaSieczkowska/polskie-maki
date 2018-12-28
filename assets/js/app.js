$(document).ready(function () {


    // TOGGLE MOBILE MENU
    $('#toggle').click(function () {
        $(this).toggleClass('active');
        $('#mobile__menu').toggleClass('open');
    });

    //HIDE MOBILE MENU ON ITEM CLICK
    var mobileMenuLinks = $('#mobile__menu').find('.menu__item');
    mobileMenuLinks.each(function () {
        $(this).click(function () {
            if ($('#toggle').hasClass('active')) {
                setTimeout(function () {
                    $('#toggle').removeClass('active');
                    $('#mobile__menu').removeClass('open');
                }, 300)
            }
        })
    })

    // SCROLL NAVI EFFECT
    $(document).scroll(function () {
        var $nav = $(".navbar");
        $nav.toggleClass('after-scroll', $(this).scrollTop() > $nav.height());
    });

    // SCROLL TO ID
    // Select all links with hashes
    $('a[href*="#"]')
        // Remove links that don't actually link to anything
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function (event) {
            // On-page links
            if (
                location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
                &&
                location.hostname == this.hostname
            ) {
                // Figure out element to scroll to
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                // Does a scroll target exist?
                if (target.length) {
                    // Only prevent default if animation is actually gonna happen
                    event.preventDefault();
                    $('html, body').animate({
                        scrollTop: (target.offset().top) - 90
                    }, 1000, function () {
                        // Callback after animation
                        // Must change focus!
                        var $target = $(target);
                        $target.focus();
                        if ($target.is(":focus")) { // Checking if the target was focused
                            return false;
                        } else {
                            $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                            $target.focus(); // Set focus again
                        };
                    });
                }
            }
        });

    // SLICK SLIDER INIT
    $('#header-slider').slick({
        autoplay: true,
        autoplaySpeed: 5000
    });

});