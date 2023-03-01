export default () => ({
	_active: '',

	get active() {
		return this._active;
	},

	set active(newActive) {
		this._active = this._active === newActive ? '' : newActive;
	},

	init() {
		this.$watch('active', () => {
			if (this.windowWidth > 1024) return;
			if (this.active === 'filter') {
				this.bodyLock();
			} else {
				this.bodyUnlock();
			}
		});
	},
});
