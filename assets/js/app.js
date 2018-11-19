$( document ).ready(function() {

    $('#header-slider').slick({
        autoplay: true,
        autoplaySpeed: 5000
    });

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