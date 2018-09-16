$(function(){

/* begin toggle-mnu button */
	$(".toggle-mnu").click(function() {
		$(this).toggleClass("on");
		$(".hidden-mnu").slideToggle();
		return false;
	});
/* end toggle-mnu button */

/* begin equalHeights */

	 $(".about-Yalta-item p").equalHeights();
	 $(".how-we-work_item").equalHeights();
	 $(".layout-item-heading").equalHeights();
	 $(".About_house .icon-prevelegies .prevelegies-head").equalHeights();
	 $(".about-Yalta-item").equalHeights();
	 $(".layout-item").equalHeights();

	
/* end equalHeights */

/* begin  owl-slider carouser for section .main-gallery */
// $('.gallery-slider').owlCarousel({
// 			center: true,
// 			loop:true,
// 			margin:0,
// 			autoplay:true,
// 			autoHeight:true,
// 			autoplayTimeout:5000,
// 			animateOut: 'fadeOut',
// 			animateIn: 'fadeIn',
// 			nav:true,
// 			navText: ['<i class="icon-navigate_before"></i>', '<i class="icon-navigate_next"></i>'],
// 			dotsEach:false,
// 			responsive:{
// 						0:{
// 								items:1,
// 								autoplay:false
// 						},
// 						480:{
// 								items:1,
// 								autoplay:false
// 						},
// 						768:{
// 								items:1,
// 								autoplay:false
// 						},
// 						992:{
// 								items:1
// 						},
// 						1200:{
// 								items:1
// 						}
// 				}
// 	})	

/* end  owl-slider carouser for section .main-gallery */


// popup gallery

	 $(".mfp-gallery").each(function() {
		$(this).magnificPopup({
		delegate: 'a',	
		mainClass: 'mfp-zoom-in',
		type: 'image',
		tLoading: '',
		gallery:{
			enabled:true,
		},
		removalDelay: 300,
		callbacks: {
			beforeChange: function() {
				this.items[0].src = this.items[0].src + '?=' + Math.random(); 
			},
			open: function() {
				$.magnificPopup.instance.next = function() {
					var self = this;
					self.wrap.removeClass('mfp-image-loaded');
					setTimeout(function() { $.magnificPopup.proto.next.call(self); }, 120);
				}
				$.magnificPopup.instance.prev = function() {
					var self = this;
					self.wrap.removeClass('mfp-image-loaded');
					setTimeout(function() { $.magnificPopup.proto.prev.call(self); }, 120);
				}
			},
			imageLoadComplete: function() { 
				var self = this;
				setTimeout(function() { self.wrap.addClass('mfp-image-loaded'); }, 16);
			}
		}
	});
	});

// popup gallery End 

// begin popup window 
	
	$(".popup-with-move-anim").magnificPopup({
			type: 'inline',

			fixedContentPos: true,
			fixedBgPos: true,

			overflowY: 'auto',

			closeBtnInside: true,
			preloader: true,
			
			midClick: true,
			removalDelay: 300,
			mainClass: 'my-mfp-slide-bottom'
		});

	$('.popup-with-zoom-anim').magnificPopup({
		type: 'inline',

		fixedContentPos: true,
		fixedBgPos: true,

		overflowY: 'auto',

		closeBtnInside: true,
		preloader: true,
		
		midClick: true,
		removalDelay: 300,
		mainClass: 'my-mfp-zoom-in'
	});


		$(".hovereffect-for-prevelegies").each(function(e){

		var th = $(this);
				th.attr("href", "#small-dialog-" + e)
					.find(".popup-prevelegies")
						.attr("id", "small-dialog-" + e);
	});

// end popup window 

	
//E-mail Ajax Send
	
	$(".callback").submit(function() {
		
			var th = $(this);
			$.ajax({
				method: "POST",
				url: "https://formspree.io/SOLYARIS-YALTA@YANDEX.RU",  //Change!!
				data: th.serialize(),
				dataType: "json"
			});
				// После отправки письма будет открываться блок с уведомлением
						$(".popup-succes").toggleClass("hidden");
						  
				setTimeout(function() {
					// Done Functions
					th.trigger("reset");
					$(".popup-succes").toggleClass("hidden");
					$.magnificPopup.close();
				}, 3000);
			return false;
					
	});	

// begin map for yandex in contacts


		ymaps.ready(init);
		var myMap,
				myPlacemark1,
				myCollection

				function init(){
					myMap=new ymaps.Map("my_map",{
						center:[44.49187857, 34.15040508],
						zoom:15
					});

					myCollection = new ymaps.GeoObjectCollection({}, {
						 preset: 'islands#redIcon' //все метки красные
						 
					});
					 
					myMap.behaviors.disable([
						'scrollZoom'
						]);				
					
					
					myPlacemark1 = new ymaps.Placemark([44.49187857, 34.14639250], { 
						preset: 'islands#redIcon',
						balloonContentHeader: 'Клубный дом "Солярис"',
						balloonContentFooter: 'г. Ялта, ул. Ломоносова, дом 25',
						hintContent: 'Клубный дом "Солярис" г. Ялта, ул. Ломоносова, дом 25' 
					});


				myCollection.add(myPlacemark1);
				myMap.geoObjects.add(myCollection);
				

				}


// end map for yandex

// begin scroll to  

	$(".under-menu li a, .button-up-wrap a, .button-bottom-wrap a").click(function() {
		
		$(this).mPageScroll2id({
			offset:0
		});	
	});

	$(".hidden-mnu li a").click(function() {

			$(".hidden-mnu").slideToggle();
			$(".toggle-mnu").toggleClass("on");
			$(this).mPageScroll2id({
			offset:0
			});	
		 
	
	});	

// end scroll to 

/* begin mixitup for prices */

	$(".mixitup_container").mixItUp();

	$(".filter_div li").click(function () {

		$(".floor-18-17, .floor-16, .floor-15, .floor-14, .floor-13, .floor-12, .floor-10, .floor-9").removeClass('hidden');
		
		$(".filter_div li").removeClass("active");
		$(this).addClass("active");
		
	});


	
/* end mixitup for prices */

/* begin mobile menu */


	$(".hamburger").click(function(event) {

		$('.hamburger').toggleClass('is-active');
		$(".hidden-mnu").slideToggle();
	});
		


	
/* end mobile menu */


	
});

