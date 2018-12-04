$( document ).ready(function() {


    // TOGGLE MOBILE MENU
    $('#toggle').click(function() {
        $(this).toggleClass('active');
        $('#mobile__menu').toggleClass('open');
    });

    //HIDE MOBILE MENU ON ITEM CLICK
    var mobileMenuLinks = $('#mobile__menu').find('.menu__item');
    mobileMenuLinks.each(function(){
        $(this).click(function(){
            if($('#toggle').hasClass('active')) {
                setTimeout(function(){
                    $('#toggle').removeClass('active');
                    $('#mobile__menu').removeClass('open');
                },300)
            }
        })
    })

    // SCROLL NAVI EFFECT
    $(document).scroll(function(){
        var $nav = $(".navbar");
        $nav.toggleClass('after-scroll', $(this).scrollTop() > $nav.height());
    });

    // SLICK SLIDER INIT
    $('#header-slider').slick({
        autoplay: true,
        autoplaySpeed: 5000
    });

    // LOAD PROJECT INFO
    $('#load-project-info').on('click', function(){
        var projectDiv = $('#project-info');
        
        if (projectDiv.hasClass('opened')){
            projectDiv.removeClass('opened');
            $(this).find('span').text('Dowiedz się więcej');
        } else {
            projectDiv.addClass('opened');
            $(this).find('span').text('Zwiń');
        }
    })

});