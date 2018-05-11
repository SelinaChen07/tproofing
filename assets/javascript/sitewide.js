
$(document).ready(function(){

	console.log("Hello World!");
	
	//disable the link for 'disabled-link' class
	if($('.disabled_link').length){
		$('.disabled_link').on('click', function(event){
			event.preventDefault();
		});	
	}

	//stick footer to the bottom of window if the content is too short
	if($('body').height() < window.innerHeight){
		$('footer').addClass('fixed-bottom');
	}

	$('.owl-carousel').owlCarousel({
    loop:false,
    autoplayTimeout:5000,
    autoplayHoverPause:true,
    margin:30,
    responsiveClass:true,
    responsive: {
            0: {
                items: 1
            },
            576: {
                items: 1,
            },
            768: {
                items: 2,
            },
            992: {
                items: 2,
            },
            1200: {
                items: 3,
            }

        },
    autoplay:true
})



});

