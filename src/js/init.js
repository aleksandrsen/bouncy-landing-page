// Tabs start

$( "#tabs" ).tabs();

$( "#tab-services" ).tabs();

$( "#tabs-portfolio" ).tabs();

//Team slider start
$('.team-slider').slick({
    arrows: false,
    dots: true,
    infinite: true,
    lazyLoad: 'ondemand'
});

// Feedback-slider start
$('.feedback-slider').slick({
    arrows: false,
    dots: true,
    infinite: true,
    lazyLoad: 'ondemand'
});

// Latest-slider start
$('.latest-news-slider').slick({
    arrows: false,
    dots: true,
    infinite: true,
    vertical: true,
    verticalSwiping: true,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                vertical: false,
                verticalSwiping: false
            }
        }
    ]
});

// Mobile menu
$('.menu').slicknav({
    appendTo: 'header .container-fluid',
    label: '',
    afterOpen: function () {
        document.body.style.overflow = 'hidden';
        let openmenu = document.getElementsByClassName('slicknav_nav');
        openmenu[0].addEventListener('click', function (e) {
            let target = e.target;
            if (target.matches('.slicknav_nav a')) {
                $('.menu').slicknav('close');
            }
        })
    },
    afterClose: function () {
        document.body.style.overflow = 'auto';
    }
});