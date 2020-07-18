// dropdown
function toggleMenu(e) {
    e.preventDefault();
    document.body.classList.toggle('menu-opened');
}

function addListenerForMobileMenuLinks(){
    const navMenu = document.querySelector('.menu');
       if(window.innerWidth <= 992) {
           navMenu.addEventListener('click',function(event) {
               let cureLink = event.target.classList.contains('menu__link');
                   cureLink ? document.body.classList.remove('menu-opened') : null;
           });
       }
}
window.addEventListener('resize',addListenerForMobileMenuLinks);
addListenerForMobileMenuLinks();

// const contact = document.querySelector('.contactLink');
// contact.addEventListener('click', toggleMenu(e){
//     e.preventDefault();
//     document.body.classList.toggle('menu-opened');
// });

// swiper
var swiperProducts = new Swiper('.swiper-container--products', {
    // spaceBetween: 30,
    slidesPerGroup: 1,
    loop: true,
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
            // spaceBetween: 20
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 20,
            slidesPerGroup: 2,
        },
        1170: {
            slidesPerView: 3,
            spaceBetween: 30,
            slidesPerGroup: 3
        }
    },
    navigation: {
        nextEl: '.button-next',
        prevEl: '.button-prev',
    },
});

var swiperTestimonials = new Swiper('.swiper-container--testimonials', {
    slidesPerView: 1,
    loop: true,
    effect: 'fade',
    lazy: true,
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: '.swiper-buttons__next',
        prevEl: '.swiper-buttons__prev',
    },
 
});



$(window).scroll(function() {
    var $sections = $('.section');
    $sections.each(function(i, el) {
        var top  = $(el).offset().top-400;
        var bottom = top +$(el).height();
        var scroll = $(window).scrollTop();
        var id = $(el).attr('id');

        if( scroll > top && scroll < bottom) {
            $('a.active').removeClass('active');
            $('a[href="#'+id+'"]').addClass('active');
        }
    })
});

// $(window).scroll(function() {
//     var height = $(window).scrollTop();
//      /*Если сделали скролл на 100px задаём новый класс для header*/
//     if(height > 100){
//         $('.menu').addClass('scrolled');
//     } else{
//         /*Если меньше 100px удаляем класс для header*/
//         $('.menu').removeClass('scrolled');
//     }
// });

document.addEventListener( 'scroll', function(e) {
    const menu = document.querySelector('.menu');
    if(window.pageYOffset > 100) {
        menu.classList.add('scrolled')
    } else {
        menu.classList.remove('scrolled')
    }
});