(function ($) {
	"use strict";

    jQuery(document).ready(function($){


        $(".embed-responsive iframe").addClass("embed-responsive-item");
        $(".carousel-inner .item:first-child").addClass("active");
        
        $('[data-toggle="tooltip"]').tooltip();

        $('.menu-toggle').click(function(){
        	$('.main-menu nav ul').toggleClass('active')
        }); 


        //sticky nav
 		$(window).scroll(function(){
		   	if($(this).scrollTop()>200){
		   		$('.header').addClass("sticky_header")
		   	}
		   	else{
		   		$('.header').removeClass("sticky_header")
		   	}
		   })

         $('.hero-slider').owlCarousel({
        	items: 1,
        	loop: true,
        	dots: true, 
        });

 		$('.practice-slider').owlCarousel({
 			items:3,
		    loop:true, 
		    margin:100,  
		    dots:true,
		    responsive:{
		        0:{
		            items:1
		        },
		        600:{
		            items:3
		        },
		        1000:{
		            items:3
		        }
		    }
		});


		$('.social-sliders').owlCarousel({
 			items:1,
		    loop:true, 
		    margin:100,  
		    dots:true, 
		});

		$('.notice-slider').owlCarousel({
 			items:3,
		    loop:true, 
		    margin:30,  
		    dots:true, 
		});

















    });


    jQuery(window).load(function(){


    });


}(jQuery));	