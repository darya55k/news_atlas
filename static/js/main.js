$(document).ready(function() {
	
	var $page = $('html, body');
	$('a[href*="#"].scrollTo').on('click', function() {
		$page.animate({
			scrollTop: $($.attr(this, 'href')).offset().top
		}, 1000);
		return false;
	});

	$(window).scroll(function() {
	    if ($(this).scrollTop()) {
	        $('.to_top').fadeIn();
	    } else {
	        $('.to_top').fadeOut();
	    }
	});

	$(".to_top").click(function() {
	    $("html, body").animate({scrollTop: 0}, 1000);
	 });

	$('.menu_btn, .mmh_top_close').on('click', function() {
		$('.mobile_menu_header').slideToggle();
	});

	$('.tabs > ul > li').on('click', function(e) {
		e.preventDefault();
		var curItem = $(this).attr('data-item');
		$(this).parents('.tabs_wrapper').find('.tabs > ul > li').removeClass('active');
		$(this).addClass('active');
		$(this).parents('.tabs_wrapper').find('.tabs_items .tabs_item').removeClass('active');
		$(this).parents('.tabs_wrapper').find('.tabs_items .tabs_item').each(function() {
			if($(this).attr('data-item') == curItem) {
				$(this).addClass('active');
			}
		});
	});

	const medialibrarySlider = document.querySelector(".medialibrary_slider");
	if(medialibrarySlider != null) {
		$('.medialibrary_slider').slick({
			slidesToShow: 3,
			slidesToScroll: 1,
			arrows: true,
			prevArrow: '<span class="arr_sl arr_left d_flex a_items_center j_content_center"><svg width="28" height="54" viewBox="0 0 28 54" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M28 48.276L9.79538 27L28 5.72401L23.1023 3.30838e-06L-3.72594e-06 27L23.1023 54L28 48.276Z" fill="#333333"/></svg></span>', 
			nextArrow: '<span class="arr_sl arr_right d_flex a_items_center j_content_center"><svg width="28" height="54" viewBox="0 0 28 54" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 5.724L18.2046 27L0 48.276L4.89769 54L28 27L4.89769 0L0 5.724Z" fill="#333333"/></svg></span>',
			dots: false,
			responsive: [
				{
					breakpoint: 551,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 1
					}
				},
				{
					breakpoint: 371,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1
					}
				}
			]
		});
	}


	const youngWinners = document.querySelector(".young_winners_items");
	if(youngWinners != null) {
		$('.young_winners_items').masonry({
			itemSelector: '.col',
			gutter: 81
		});
	}

	const mediatekaGallery = document.querySelector(".mediateka_gallery_slider");
	if(mediatekaGallery != null) {
		$('.mediateka_gallery_slider').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: false,
			prevArrow: '<span class="arr_sl arr_left d_flex a_items_center j_content_center"><svg width="28" height="54" viewBox="0 0 28 54" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M28 48.276L9.79538 27L28 5.72401L23.1023 3.30838e-06L-3.72594e-06 27L23.1023 54L28 48.276Z" fill="#333333"/></svg></span>', 
			nextArrow: '<span class="arr_sl arr_right d_flex a_items_center j_content_center"><svg width="28" height="54" viewBox="0 0 28 54" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 5.724L18.2046 27L0 48.276L4.89769 54L28 27L4.89769 0L0 5.724Z" fill="#333333"/></svg></span>',
			dots: false,
			autoplay: true,
			autoplaySpeed: 3000,
		});
	}

	const peoplesSlider = document.querySelector(".peoples_slider");
	if(peoplesSlider != null) {
		$('.peoples_slider').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: false,
			prevArrow: '<span class="arr_sl arr_left d_flex a_items_center j_content_center"><svg width="28" height="54" viewBox="0 0 28 54" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M28 48.276L9.79538 27L28 5.72401L23.1023 3.30838e-06L-3.72594e-06 27L23.1023 54L28 48.276Z" fill="#333333"/></svg></span>', 
			nextArrow: '<span class="arr_sl arr_right d_flex a_items_center j_content_center"><svg width="28" height="54" viewBox="0 0 28 54" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 5.724L18.2046 27L0 48.276L4.89769 54L28 27L4.89769 0L0 5.724Z" fill="#333333"/></svg></span>',
			dots: false,
			infinite: true,
			variableWidth: true,
			autoplay: true,
			autoplaySpeed: 3000,
			responsive: [
				{
					breakpoint: 861,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
						infinite: true,
						variableWidth: true
					}
				}
			]
		});
	}
	
	var overlay = $('#overlay');
	var open_modal = $('.open_modal');
	var close_modal = $('.modal_close, #overlay, .close_btn');
	var modal = $('.modal_window');
	
	open_modal.on('click', function(event) {
		event.preventDefault();
		$('body').toggleClass('overflow');
		$('.modal_window.active').animate({opacity: 0, top: 45 + "%"},300, function(){$(this).css('display','none');});
		var div = $(this).attr('href');
		$(div).addClass('active');
		overlay.fadeIn(400,
			function() {
				$(div)
					.css('display', 'block')
					.animate({opacity: 1, top: '50%', marginTop: "-" + ($(div).outerHeight()/2)}, 200);
			}
		);
	});
	close_modal.on('click', function(e) {
		if (e.target != this && e.currentTarget.className != 'modal_close' && e.currentTarget.className != 'close_btn')
			return;
		$('body').toggleClass('overflow');
		e.preventDefault();
		modal
			.animate(
				{opacity: 0, top: 45+"%"}, 200,
				function() {
					$(this).css('display', 'none');
					overlay.fadeOut(400);
				}
			);
		$(modal).removeClass('active');
	});
	
});