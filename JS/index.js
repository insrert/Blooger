const responsive = {

    0: {
        items: 1
    },

    320: {
        items: 1
    },
    560: {
        items: 2
    },
    960: {
        items: 3
    }
}

$(document).ready(function() {
    $nav = $('.nav')
    $togglecollaps = $('.toggle-collaps')

    $togglecollaps.click(function() {
            $nav.toggleClass('collaps')
        })
        //owl-carousel for blog
    $('.owl-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
        dots: false,
        nav: true,
        navText: [$('.owl-navigation .owl-nav-prev'), $('.owl-navigation .owl-nav-next')],
        responsive: responsive
    })

    //AOS
    AOS.init();

    // click to scroll top

    $('.home span').click(function() {
        $("html,body").animate({
            scrollTop: 0,

        }, 3000)
    })


})