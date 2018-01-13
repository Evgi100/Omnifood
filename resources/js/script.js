
$(document).ready(function () {

    $('.features').waypoint(function (direction) {
        if (direction === "down") {
            $('nav').addClass('sticky')
        } else {
            $('nav').removeClass('sticky')
        }
    }, {
            ofsset: '80px'
        });

    // Animations

    $('.js-wp-1').waypoint(function (direction) {
        $('.js-wp-1').addClass('animated fadeIn');
    }, {
            offset: '55%'
        });

    $('.js-wp-2').waypoint(function (direction) {
        $('.js-wp-2').addClass('animated fadeInUp');
    }, {
            offset: '50%'
        });

 

    $('.js-wp-3').waypoint(function (direction) {
        $('.js-wp-3').addClass('animated pulse');
    }, {
            offset: '50%'
        });

// Mobile nav

$('.js-nav-icon').click(function (){
    var icon= $('.js-nav-icon i')
    var nav=$('.nav-list');

    nav.slideToggle(200);

    if (icon.hasClass('ion-navicon-round')) {
        icon.addClass('ion-close-round');
        icon.removeClass('ion-navicon-round')
    } else {
        icon.addClass('ion-navicon-round');
        icon.removeClass('ion-close-round')
    }

});


/*  MAps */ 

var map=new GMaps({
    div: '.map',
    lat:32.0853,
    lng: 34.8,
    zoom:12
  });

  map.addMarker ({
    lat:32.0853,
    lng: 34.7818,
    title:'Tel-Aviv',
    infoWindow :{
        content: '<p> Our Tel-Aviv HQ</p>'
    }
  });

});

