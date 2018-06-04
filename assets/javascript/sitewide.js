
$(document).ready(function(){

	console.log("Hello World!");
	
	//disable the link for 'disabled-link' class
	if($('.disabled_link').length){
		$('.disabled_link').on('click', function(event){
			event.preventDefault();
		});	
	}

	//stick footer to the bottom of window if the content is too short(it won't work if define body height 100%)
	//if($('body').height() < window.innerHeight){
    //    console.log("stick foot");
	//	$('footer').addClass('fixed-bottom');
	//}

    if($('.owl-carousel').length){
    	$('.owl-carousel').owlCarousel({
        loop:false,
        autoplayTimeout:5000,
        autoplayHoverPause:true,
        margin:30,
        nav:true,
        autoHeight:true,
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
        autoplay:false
        })
    }


    // For Image Modal
    // Get the modal
    if($('.img_for_modal').length){
        var modal = document.getElementById('myModal');   

        // Get the image and insert it inside the modal - use its "alt" text as a caption
        // Get the image and insert it inside the modal - use its "alt" text as a caption
        var img = $('.img_for_modal');
        var modalImg = $("#img01");
        var captionText = document.getElementById("caption");

        $('.img_for_modal').click(function(){
            modal.style.display = "block";
            var newSrc = this.src;
            modalImg.attr('src', newSrc);
            captionText.innerHTML = this.alt;
            console.log(this);
        });

        // Get the <span> element that closes the modal
        var span = document.getElementsByClassName("close")[0];

        // When the user clicks on <span> (x), close the modal
        span.onclick = function() { 
          modal.style.display = "none";
        }
    }



});

