export default () => ({
	loaded: false,
	src: '',

	loadImage() {
		if (!this.src) return;
		const adaptiveSrc = this.getAdaptiveSrc(this.src);

		const loader = document.createElement(this.$el.tagName);
		loader.src = adaptiveSrc;

		loader.onload = () => {
			this.$el.src = adaptiveSrc;
			this.loaded = true;
		};

		loader.onerror = () => console.error('Image not loaded: ' + this.$el);
	},
	getAdaptiveSrc(src) {
		const imageExtensions = ['.jpg', '.jpeg', '.png', '.webp'];
		const currentExtension = imageExtensions.find((ext) => src.includes(ext));

		if (!currentExtension) return src;

		const imageWidth = Math.round(Math.max(this.$el.offsetWidth, 10) * 1.03);

		const srcParts = src.split(currentExtension);
		srcParts[0] = `${srcParts[0]}_${imageWidth}x`;
		const adaptiveSrc = srcParts.join(currentExtension);

		return adaptiveSrc;
	},

	init() {
		this.$watch('grid', () => {
			if (!this.loaded) return;
			this.loadImage();
		});
	},
});
