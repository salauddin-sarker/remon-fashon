(function ($) {
    "use Strict";

    $('.hero-slider').owlCarousel({
        animateIn: 'lightSpeedIn',
        animateOut: 'lightSpeedOut',
        autoplay: true,
        autoplayTimeout: 7000,
        dots: false,
        loop: true,
        mouseDrag: false,
        responsive: {
            0: {
                items: 1
            }
        }
    });
    $('.blog-carousel').owlCarousel({
        autoplay: true,
        autoplayTimeout: 6000,
        dots: false,
        items: 3,
        loop: true,
        margin:30,
        mouseDrag: true,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            }
            
        }
    });
    $('.home-brand-carousel').owlCarousel({
        autoplay: true,
        autoplayTimeout: 6000,
        // dots: false,
        item: 5,
        loop: true,
        margin:30,
        mouseDrag: true,
        responsive: {
           0: {
                items: 2
            },
           574: {
                items: 3
            },
           992: {
                items: 5
            }
        }
    });
    

    $('.hero-slider-nav').on('click', function (e) {
        e.preventDefault();

        if ($(this).hasClass('prev')) {
            $('.owl-carousel').trigger('prev.owl.carousel');
        } else {
            $('.owl-carousel').trigger('next.owl.carousel');
        }
    });


    // hero-slider.on("changed.owl.carousel", function(event){
    //     var item = event.item.index-2;
    //     $('h1').removeClass('animated jackInTheBox');
    //     $('owl-item').not('.cloned').eq(item).find('h1').addClass('animated fadeInDownBig')
    //     $('img').removeClass('animated rotateIn');
    //     $('owl-item').not('.cloned').eq(item).find('img').addClass('zoomIn')
    // })
    // $('.hero-slider-nav').on('click', function (e) {
    //     e.preventDefault();

    //     if ($(this).hasClass('prev')) {
    //         $heroSlider.trigger('prev.owl.carousel');
    //     } else {
    //         $heroSlider.trigger('next.owl.carousel');
    //     }
    // });
})(jQuery);