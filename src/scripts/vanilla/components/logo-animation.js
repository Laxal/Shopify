const logos = document.querySelectorAll('[data-animate-width]');

if (logos.length) {
	for (const logo of logos) observeLogo(logo);
}

function observeLogo(logo) {
	const options = { threshold: [0, 0.2, 0.4, 0.6, 0.8, 1] };
	const logoFullWidth = Number(logo.dataset.animateWidth);

	const updateLogoWidth = (entries) => {
		setLogoWidth(entries, logoFullWidth);
	};

	new IntersectionObserver(updateLogoWidth, options).observe(logo);
}

function setLogoWidth(entries, logoFullWidth) {
	const [entry] = entries;

	const logo = entry.target;
	const logoWidth = Math.ceil(logoFullWidth * entry.intersectionRatio);

	logo.style.width = `${logoWidth}px`;
}
