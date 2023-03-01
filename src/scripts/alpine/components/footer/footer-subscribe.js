export default () => ({
	form: null,
	inputValue: '',
	inputChecked: false,
	cheboxChecked: false,
	loading: false,

	get isValidEmail() {
		const EMAIL_REGEXP =
			/^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
		return !this.inputValue.match(EMAIL_REGEXP);
	},
	changeCheckboxStatus() {
		this.cheboxChecked = !this.cheboxChecked;
	},
	submit() {
		const EMAIL_REGEXP =
			/^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
		this.inputChecked = true;
		if (this.cheboxChecked && this.inputValue.match(EMAIL_REGEXP) && this.inputValue != '') {
			this.form.submit();
			this.loading = true;
		}
	},

	init() {
		this.form = this.$el.querySelector('form');
	},
});
