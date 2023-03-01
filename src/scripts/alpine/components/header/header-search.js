export default () => ({
	active: false,
	right: 0,
	inputValue: '',

	toggle() {
		if (this.windowWidth > 1024) {
			this.active = !this.active;
		} else {
			this.active = false;
		}
	},

	setRight() {
		this.right = this.$el.getBoundingClientRect().right - this.windowWidth;
	},

	focus() {
		const input = this.$refs.input;
		setTimeout(() => input.focus(), 300);
	},

	init() {
		this.$watch('active', () => {
			if (this.active) {
				this.setRight();
				this.focus();
				this.bodyLock();
			} else {
				this.bodyUnlock();
				this.inputValue = '';
			}
		});

		this.$nextTick(() => {
			this.setRight();
		});
	},
});
