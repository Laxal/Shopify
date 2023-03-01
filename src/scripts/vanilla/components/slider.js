import Swiper, { Navigation, Pagination } from 'swiper';

class Slider {
	constructor(selector, options) {
		new Swiper(selector, {
			modules: [Navigation, Pagination],
			...options,
		});
	}
}

window.Slider = Slider;
