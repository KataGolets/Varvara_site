$(document).ready(function() {

	//E-mail Ajax Send
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});
});

// /// header fixed with page scrolling
// function slowScroll(id) {
// 	$('html, body').animate ({
// 	  scrollTop: $(id).offset().top
// 	},500);
//   }
  
//   $ (document).on ("scroll", function () {
// 	  if ($(window).scrollTop() === 0)
// 		$("header").removeClass ("fixed");
// 	  else
// 		$("header").attr ("class","fixed");
//   });
  

// Burger menu
$(document).ready(function() {
	$('.header__burger').click(function(){
		$('.header__burger, .menu').toggleClass('active');
		$('body').toggleClass('lock');
	});

	$('.menu__list').click(function(event) {
        $('.header__burger,.menu').removeClass('active');
		$('body').removeClass('lock');
	});
});

// Portfolio block
$(".portfolio__images").magnificPopup ({
	delegate: 'a',
	type: 'image',
	gallery:{
		enabled: true
	}
});