export default () => ({
	selectors: {},

	createSlider() {
		const { slider, next, prev } = this.selectors;

		new window.Slider(slider, {
			slidesPerView: 1,
			navigation: {
				nextEl: next,
				prevEl: prev,
			},
			breakpoints: {
				569: {
					slidesPerView: 2,
				},
				1201: {
					slidesPerView: 3,
				},
			},
		});
	},

	init() {
		this.$watch('selectors', () => {
			this.createSlider();
		});
	},
});
