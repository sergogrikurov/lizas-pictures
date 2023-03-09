if (document.querySelector('.lizas__slider')) {
	new Swiper('.lizas__slider', {
		pagination: {
			el: '.controll-main-block__dots',
			bullets: true,
			type: 'fraction',
			renderFraction: function (currentClass, totalClass) {
				return '0<span class="' + currentClass + '"></span>' +
					'<span class="slash">/</span>' +
					'<span class="' + totalClass + '"></span>';
			},
		},
		observer: true,
		spaceBetween: 20,
		watchOverflows: true,
		observeParents: true,
		speed: 800,
		loop: true,
		autoplay: {
			delay: 3000,
			disableOnInteraction: false,
		}
	});
}
if (document.querySelector('.lizas__slider2')) {
	new Swiper('.lizas__slider2', {
		pagination: {
			el: '.controll-main-block__dots',
			bullets: true,
			type: 'fraction',
			renderFraction: function (currentClass, totalClass) {
				return '0<span class="' + currentClass + '"></span>' +
					'<span class="slash">/</span>' +
					'<span class="' + totalClass + '"></span>';
			},
		},
		observer: true,
		spaceBetween: 20,
		watchOverflows: true,
		observeParents: true,
		speed: 800,
		loop: true,
		autoplay: {
			delay: 3000,
			disableOnInteraction: false,
		}
	});
}


