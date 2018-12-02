$( document ).ready(function() {

    $('#header-slider').slick({
        autoplay: true,
        autoplaySpeed: 5000
    });

    $(document).scroll(function(){
        var $nav = $(".navbar");
        $nav.toggleClass('after-scroll', $(this).scrollTop() > $nav.height());
    })

    $('#load-project-info').on('click', function(){
        var projectDiv = $('#project-info');
        
        if (projectDiv.hasClass('opened')){
            projectDiv.removeClass('opened');
            $(this).find('a').text('Dowiedz się więcej');
        } else {
            projectDiv.addClass('opened');
            $(this).find('a').text('Zwiń');
        }
    })

});