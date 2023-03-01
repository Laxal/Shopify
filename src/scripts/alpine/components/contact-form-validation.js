export default () => ({
	form: null,
	inputValue: '',
	phoneValue: '',
	type: '',
	subject: '',
	subTopic: '',
	formCheck: '',
	subjectChildrens: '',
	subTopicChildrens: '',
	formSended: false,
	defaultOption: '',
	selectErrors: true,
	nameField: '',
	surNameField: '',
	messageField: '',
	form_loader: false,
	changeType(index) {
		this.type = index;
	},
	changeSubject(index) {
		this.subject = index;
	},
	changeSubTopic(index) {
		this.subTopic = index;
	},
	reset(index) {
		this.subject = index;
		this.subTopic = index;
	},
	changesubjectChildrens(index) {
		this.subjectChildrens = document.getElementById(index).querySelectorAll('option').length;
	},
	changeSubtopicChildrens(index) {
		this.subTopicChildrens = document.getElementById(index).querySelectorAll('option').length;
	},
	submit() {
		this.formSended = true;
		if (this.formCheck == 'phone') {
			console.log(this.formCheck);
			if (
				this.defaultOption == this.type ||
				this.defaultOption == this.subject ||
				this.nameField == '' ||
				this.surNameField == '' ||
				this.phoneValue.length < 10 ||
				(this.isInvalidEmail && this.inputValue != '') ||
				this.messageField == ''
			) {
				console.log('form stopped');
			} else {
				console.log('form sent');
				this.form.submit();
			}
		} else if (this.formCheck == 'email') {
			console.log(this.formCheck);
			if (
				this.defaultOption == this.type ||
				this.defaultOption == this.subject ||
				this.nameField == '' ||
				this.surNameField == '' ||
				(this.phoneValue.length != '' && this.phoneValue.length < 10) ||
				this.inputValue == '' ||
				this.isInvalidEmail ||
				this.messageField == ''
			) {
				console.log('form stopped');
			} else {
				console.log('form sent');
				this.form.submit();
				this.form_loader = true;
			}
		}
	},

	get isInvalidEmail() {
		const EMAIL_REGEXP =
			/^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
		return !EMAIL_REGEXP.test(this.inputValue);
	},
	isInvalidPhone() {
		// eslint-disable-next-line no-useless-escape
		this.phoneValue = this.phoneValue.replace(/[^0-9\.]/g, '');
		console.log(this.phoneValue.length);
	},
	init() {
		this.form = this.$el.querySelector('form');
	},
});
