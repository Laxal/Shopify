export default () => ({
	color: '',

	setColor(value) {
		if (value in window.productColors) {
			this.color = window.productColors[value];
		}
	},
});
