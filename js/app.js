

$(document).ready(function(){
	// console.log('h1');
	

	// Start Back To Top
		$('.btn-backtotops').hide();
		$(window).scroll(function(){
			let getscrolltop = $(this).scrollTop();
			// console.log(getscrolltop);

			if(getscrolltop >= 370){
				$('.btn-backtotops').fadeIn(1000);
			}else{
				$('.btn-backtotops').fadeOut(1000);
			}
		});



	// End Back To Top



	// Start Header

		// Start nav
			//for bugger
			$('.navbuttons').click(function(){
				$('.navbuttons').toggleClass('crossxs');
			});


			//for nav
			$(window).scroll(function(){
				// console.log('hay');

				let getscrolltop = $(this).scrollTop();
				// console.log(getscrolltop);

				if(getscrolltop >= 200 ){
					$('.navbar').addClass('navmenus');
				}else{
					$('.navbar').removeClass('navmenus');
				}

			})
		// End nav

	//End Header


	//Start Properties
		$('.propertylists').click(function(){

			//for active item
				//short hand
			// $(this).addClass('activeitems').siblings().removeClass('activeitems');
			$(this).addClass('activeitems')
			$(this).siblings().removeClass('activeitems');


			//for filter
			var getattvalue = $(this).attr('data-filter');
			console.log(getattvalue);

			if(getattvalue === "all"){
				// $('.filters').show('slide',500);
				$('.filters').show(500);
			}else{

				$('.filters').hide();


				$('.filters').not('.'+getattvalue).hide('slide',500);
				// $('.filters').not('.'+getattvalue).hide(500);


				$('.filters').filter('.'+getattvalue).show('slide',500);
				// $('.filters').filter('.'+getattvalue).show(500);

			}

		});

		// For image overlay or lightbox2
		 lightbox.option({
		    showImageNumberLabel : false
    	})
	//End Properties



	//Start ADv Section

		$(window).scroll(function(){
			let getscrolltop = $(this).scrollTop();

			//console.log(getscrolltop);

			if(getscrolltop >= 900){
				$('.advimages').addClass('fromlefts');
				$('.advtexts').addClass('fromrights')
			}else{
				$('.advimages').removeClass('fromlefts');
				$('.advtexts').removeClass('fromrights');
			}
		})

	// End Adv Section


	// Start Footer Section
		const getyear = $('#getyear');
		const getfullyear = new Date().getUTCFullYear();
		getyear.text(getfullyear);


	// End Footer Section












})

// lightbox2 
// zip ko down
// assets > libs hte mr unzip lote