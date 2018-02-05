$(document).ready(function() {
	$('.masthead a').click(function() {
		$(this).transition('fade in');
	});

	$('.urls>.item').click(function() {
		$('html, body').animate({ scrollTop: $($.attr(this, 'href')).offset().top }, 300);
		return false;
	});
	
	$('body').visibility({
		once: false,
		continuous : true,
		onPassing: function(cal) {
			$(".urls>.item").removeClass("active");
			if(cal.percentagePassed >= 0.30){
				$("#portfolio").addClass("active");
			}else{
				$("#top").addClass("active");
			}
		}
	});
});