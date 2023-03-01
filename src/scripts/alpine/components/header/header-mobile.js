export default () => ({
	_tab: '',
	_accordion: '',

	get tab() {
		return this._tab;
	},
	get accordion() {
		return this._accordion;
	},

	set tab(name) {
		this._tab = this._tab === name ? '' : name;
	},
	set accordion(name) {
		this._accordion = this._accordion === name ? '' : name;
	},
});
