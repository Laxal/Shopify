export default () => ({
	_active: '',

	get active() {
		return this._active;
	},

	set active(newActive) {
		this._active = this._active === newActive ? '' : newActive;
	},
});
