export default () => ({
	active: false,
	activateTimeoutID: null,
	deactivateTimeoutID: null,

	activateWithDelay() {
		clearTimeout(this.deactivateTimeoutID);
		this.activateTimeoutID = setTimeout(() => {
			this.active = true;
		}, 300);
	},

	closeWithDelay() {
		clearTimeout(this.activateTimeoutID);
		this.deactivateTimeoutID = setTimeout(() => {
			this.active = false;
		}, 500);
	},
});
