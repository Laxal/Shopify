export default function body() {
	return {
		windowWidth: window.innerWidth,
		cart: this.$persist({
			attributes: {},
			cart_level_discount_applications: [],
			item_count: 0,
			items: [],
			items_subtotal_price: 0,
			note: null,
			original_total_price: 0,
			requires_shipping: false,
			total_discount: 0,
			total_price: 0,
			total_weight: 0,
		}).using(sessionStorage),
		scrollPosition: 0,
		showPopup: '',
		closePopup: '',
		ACTIVE_CLASS: 'visible',

		getCart() {
			fetch('/cart.js')
				.then((res) => res.json())
				.then((json) => (this.cart = json));
		},

		bodyLock() {
			this.scrollPosition = window.pageYOffset;
			document.body.style.overflow = 'hidden';
			document.body.style.position = 'fixed';
			document.body.style.top = `-${this.scrollPosition}px`;
			document.body.style.width = '100%';
		},
		bodyUnlock() {
			document.body.style.removeProperty('overflow');
			document.body.style.removeProperty('position');
			document.body.style.removeProperty('top');
			document.body.style.removeProperty('width');
			window.scrollTo(0, this.scrollPosition);
		},

		popupOpen() {
			// if there was opened popup - close previous
			document.querySelector(`.popup.${this.ACTIVE_CLASS}`)?.classList.remove(this.ACTIVE_CLASS);

			const popup = document.querySelector(`#${this.showPopup}`);
			if (popup) {
				popup.classList.add(this.ACTIVE_CLASS);
				popup.dataset.lock == 'true' ? this.bodyLock() : this.bodyUnlock();
			}
		},
		popupClose() {
			this.showPopup = '';
			const popup = document.querySelector(`#${this.closePopup}`);
			if (popup) {
				popup.classList.remove(this.ACTIVE_CLASS);
				popup.dataset.lock == 'true' ? this.bodyUnlock() : '';
			}
		},

		resizeHandler() {
			this.windowWidth = window.innerWidth;
		},

		init() {
			this.getCart();

			this.$watch('cart', () => {
				window.cart = this.cart;
			});

			this.$watch('showPopup', () => {
				this.closePopup = '';
				if (this.showPopup != '') {
					this.popupOpen();
				}
			});

			this.$watch('closePopup', () => {
				if (this.closePopup != '') {
					this.popupClose();
				}
			});
		},
	};
}
