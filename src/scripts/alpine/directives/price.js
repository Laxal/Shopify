export default (el, { expression }, { effect, evaluateLater }) => {
	const toPrice = evaluateLater(expression);

	effect(() => {
		toPrice((price) => {
			const formatedPrice = (price / 100).toLocaleString('de-DE', { maximumFractionDigits: 0 });

			if (window.currency.position === 'left') {
				el.innerText = `${window.currency.value} ${formatedPrice}`;
				return;
			}
			if (window.currency.position === 'right') {
				el.innerText = `${formatedPrice} ${window.currency.value}`;
				return;
			}
			el.innerText = `${formatedPrice}`;
		});
	});
};
