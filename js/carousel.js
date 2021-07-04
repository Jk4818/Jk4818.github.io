$(document).ready(function(){
			$('.customer-logos').slick({
				slidesToShow: 4,
				slidesToScroll: 1,
				autoplay: true,
				autoplaySpeed: 2500,
				arrows: false,
				dots: true,
				lazyLoad: 'ondemand',
					pauseOnHover: true,
					responsive: [{
					breakpoint: 2000,
					settings: {
						slidesToShow: 3
					}
				}, {
					breakpoint: 520,
					settings: {
						slidesToShow: 1,
						centerMode: false, /* set centerMode to false to show complete slide instead of 3 */
						slidesToScroll: 1
					}
				}, ]
			});
		});