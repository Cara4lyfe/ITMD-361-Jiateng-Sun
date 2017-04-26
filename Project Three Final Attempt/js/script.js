(function($) {

  // Get the .gif images from the "data-alt".
	var getGif = function() {
		var gif = [];
		$('img').each(function() {
			var data = $(this).data('alt');
			gif.push(data);
		});
		return gif;
	}

	var gif = getGif();

	// Preload all the gif images.
	var image = [];

	$.each(gif, function(index) {
		image[index]     = new Image();
		image[index].src = gif[index];
	});

	// Change the image to .gif when clicked and vice versa.
	$('figure').on('click', function() {

		var $this   = $(this),
			$index  = $this.index(),

			$img    = $this.children('img'),
			$imgSrc = $img.attr('src'),
			$imgAlt = $img.attr('data-alt'),
			$imgExt = $imgAlt.split('.');

		if($imgExt[1] === 'gif') {
			$img.attr('src', $img.data('alt')).attr('data-alt', $imgSrc);
		}

		var audio = new Audio('audio/tardis.mp3');
		audio.play();

		$("figure").delay(2000).fadeOut(2000);
		$("#SS").delay(2000).hide();
		$("#SS").delay(2000).fadeIn(1000)
							.fadeOut(1000)
							.fadeIn(1000)
							.fadeOut(1000)
							.fadeIn(1000)
							.fadeOut(1000)
							.fadeIn(1000);

		$("#Doctor").delay(2000).hide();
		$("#Doctor").delay(2000).fadeIn(1000)
								.fadeOut(1000)
								.fadeIn(1000)
								.fadeOut(1000)
								.fadeIn(1000)
								.fadeOut(1000)
								.fadeIn(1000);

		$("#alldoc").delay(11000).queue(function(next){
			$(this).attr("class", "floating");
			next();
		});

		$("#sonic").delay(11100).queue(function(next){
			$(this).attr("class", "floating");
			next();
		});

	});


})(jQuery);