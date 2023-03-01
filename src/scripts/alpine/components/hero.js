export default () => ({
	config: {},

	createSwiper() {
		const { selector, ...settings } = this.config;

		new window.Slider(`.${selector}`, {
			...settings,
			autoHeight: true,
			pagination: {
				el: '.hero__swiper-pagination',
				clickable: true,
			},
			navigation: {
				nextEl: '.hero__swiper-next',
				prevEl: '.hero__swiper-prev',
			},
		});

		this.calcBtnPosition();
	},

	calcBtnPosition() {
		const btns = this.$el.querySelectorAll('.hero__swiper-btn');
		const pagination = this.$el.querySelector('.hero__swiper-pagination');
		const image = this.$el.querySelector('.hero__swiper-slide-inner--desktop');
		const imageMob = this.$el.querySelector('.hero__swiper-slide-inner--mobile');

		const btnPosition = Math.round(image.getBoundingClientRect().height / 2);
		const paginationPosition = Math.round(imageMob.getBoundingClientRect().height - 20);

		btns.forEach((btn) => {
			btn.style.top = `${btnPosition}px`;
		});
		if (!pagination) return;
		pagination.style.top = `${paginationPosition}px`;
	},

	init() {
		this.$watch('config', () => {
			this.createSwiper();
		});
		this.$watch('windowWidth', () => {
			this.calcBtnPosition();
		});
	},
});
