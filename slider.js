
$(document).ready(function(){
  $('.content__slider').slick(
		{
			infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
	autoplay: true,
  autoplaySpeed: 2000,
	arrows: true,
	draggable: false,
	prevArrow: `<button type='button' class='slick-prev slick-arrow'><ion-icon name="chevron-back-outline"></ion-icon></button>`,
    nextArrow: `<button type='button' class='slick-next slick-arrow'><ion-icon name="chevron-forward-outline"></ion-icon></button>`,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2
				}
			},
		]
		}
	);
	$('.zingchart__singer').slick(
		{
			infinite: true,
  slidesToShow: 5,
  slidesToScroll: 3,
	autoplay: true,
  autoplaySpeed: 2000,
	arrows: true,
	draggable: false,
	prevArrow: `<button type='button' class='slick-prev slick-arrow'><ion-icon name="chevron-back-outline"></ion-icon></button>`,
    nextArrow: `<button type='button' class='slick-next slick-arrow'><ion-icon name="chevron-forward-outline"></ion-icon></button>`,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 3,
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
				}
			},
		]
		}
	);
	$('.content__list-slider-5').slick(
		{
			infinite: true,
  slidesToShow: 5,
  slidesToScroll: 3,
	autoplay: true,
  autoplaySpeed: 2000,
	arrows: true,
	draggable: false,
	prevArrow: `<button type='button' class='slick-prev-list slick-arrow-list'><ion-icon name="chevron-back-outline"></ion-icon></button>`,
    nextArrow: `<button type='button' class='slick-next-list slick-arrow-list'><ion-icon name="chevron-forward-outline"></ion-icon></button>`,
		responsive: [
			{
				breakpoint: 1239,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 3,
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 2,
				}
			},
		]
		}
	);
	$('.content__list-slider-3').slick(
		{
			infinite: true,
  slidesToShow: 3,
  slidesToScroll: 2,
	arrows: true,
	draggable: false,
	autoplay: true,
  autoplaySpeed: 2000,
	prevArrow: `<button type='button' class='slick-prev-list slick-arrow-list'><ion-icon name="chevron-back-outline"></ion-icon></button>`,
    nextArrow: `<button type='button' class='slick-next-list slick-arrow-list'><ion-icon name="chevron-forward-outline"></ion-icon></button>`,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				}
			},
			// {
			// 	breakpoint: 480,
			// 	settings: {
			// 		slidesToShow: 1,
			// 		slidesToScroll: 1
			// 	}
			// }
		]
		}
	);
});

