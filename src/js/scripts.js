

$(document).ready(function () {
	'use strict';

	$('.slider').slick({

	   dots: true,
	   arrows: true,
	   infinite: true,
	   speed: 800,
	   fade: true,
	   autoplay: true,
	   autoplaySpeed: 3000,
	   cssEase: 'linear',
	   prevArrow: '<button class="arrow arrow--prev"><svg width="35" height="35" ><use xlink:href="#scroll"></use></svg></button>',
	   nextArrow: '<button class="arrow arrow--next"><svg width="35" height="35" ><use xlink:href="#scroll"></use></svg></button>',    
	   responsive: [
	   		{
		      breakpoint: 490,
		      settings: {
		        arrows: false
		      }
		    }
	   ]
	});

	$('.team__slider').slick({
		dots: false,
	    arrows: true,
	    autoplay: true,
	    autoplaySpeed: 3000,
	    slidesToShow: 3,
		slidesToScroll: 1,
		prevArrow: '<button class="arrow arrow--dark arrow--dprev"><svg width="35" height="35" ><use xlink:href="#dark"></use></svg></button>',
	  	nextArrow: '<button class="arrow arrow--dark arrow--dnext"><svg width="35" height="35" ><use xlink:href="#dark"></use></svg></button>',    
		responsive: [
		    {
		      breakpoint: 1024,
		      settings: {
		        slidesToShow: 2,
		        slidesToScroll: 1,
		        infinite: true,
		        dots: false
		      }
		    },
		    {
		      breakpoint: 991,
		      settings: {
		        slidesToShow: 2,
		        slidesToScroll: 1
		      }
		    },
		    {
		      breakpoint: 768,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1
		      }
		    }
		]
	});

	$("#menu").on("click","a", function (e) {
    	e.preventDefault();

    	var id  = $(this).attr('href'),
        	top = $(id).offset().top;

    	$('body,html').animate({scrollTop: top}, 800);
    });

    $("#up").on("click","a", function (e) {
    	e.preventDefault();

    	var id  = $(this).attr('href'),
        	top = $(id).offset().top;

    	$('body,html').animate({scrollTop: top}, 1500);
    });

    $('.toggler').on('click', function(e){
		e.preventDefault();

		$('body').toggleClass('navigation-opened');
	})

});

function initMap() {
    let center = {
          lat: 38.112322,
          lng: -89.503285
    }
    
    let map = new google.maps.Map(document.getElementById('map'), {
        zoom: 12,
        center: center
        
    });

    let marker = new google.maps.Marker({
        position: { lat: 38.154322, lng: -89.450285},
        map: map,
        icon: '../img/marker.png'
        // title: '91 Nolan Extensions Suite 670'
    });


};
