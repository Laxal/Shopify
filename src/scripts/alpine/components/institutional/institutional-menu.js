export default () => ({
	currentIndex: '',
	activeSublink: '',
	currentPage: '',
	sublinksArray: [],
	changeIndex(index) {
		if (this.currentIndex == index) {
			this.currentIndex = '';
		} else this.currentIndex = index;
	},
	checkCurrentPage(url) {
		this.currentPage = url;
		console.log('update currentPage', this.currentPage);
	},
	init() {},
});
