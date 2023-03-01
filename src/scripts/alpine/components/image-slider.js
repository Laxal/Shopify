export default () => ({
	selector: '',

	createSwiper() {
		new window.Slider(this.selector, {
			slidesPerView: 1.4,
			spaceBetween: 4,
			navigation: {
				nextEl: '.image-slider__swiper-next',
				prevEl: '.image-slider__swiper-prev',
			},
			breakpoints: {
				768: {
					slidesPerView: 3,
					spaceBetween: 4,
				},
			},
		});
	},

	init() {
		this.$watch('selector', () => {
			this.createSwiper();
		});
	},
});
