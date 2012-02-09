$(document).ready(
		function() {
			$('.icon img').each(
					function() {
						// Add mouse events
						$(this).bind(
								{
									mouseenter : function() {
										$(this).attr(
												'src',
												'images/'
														+ $(this).parent().attr('id')
														+ '_up.png');
									},
									mouseleave : function() {
										$(this).attr(
												'src',
												'images/'
														+ $(this).parent().attr('id')
														+ '.png');
									}
								});
					});

			$('.icon').each(function() {
				// get position of the element we clicked on
				var targetTop = $(this).css('top');
				var initTop = targetTop.replace(/[^-\d\.]/g, '') - 300;

				// animate drop
				$(this).css({
					top : initTop,
					opacity : 0
				}).animate({
					top : targetTop,
					opacity : 1
				}, Math.random() * 500 + 1000, 'easeOutBounce');
			});
		});