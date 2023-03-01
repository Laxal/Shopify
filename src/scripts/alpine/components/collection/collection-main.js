export default function collectionMain() {
	return {
		grid: this.$persist(4).using(sessionStorage),
		productCount: 0,
		availability: false,
		loading: false,
		filtersData: {},
		filters: null,
		emptyFilters: [],
		URL: new URL(window.location.href.toString()),
		prevURL: new URL(window.location.href.toString()),
		HTML: '',

		get filterActive() {
			let active = false;
			for (const filterName in this.filters) {
				if (filterName == 'Availability' || filterName == 'Sort by') {
					continue;
				}

				if (this.filters[filterName].activeValues.length) {
					active = true;
				}
			}
			return active;
		},

		setFilters() {
			const filters = {};

			for (const filterName in this.filtersData) {
				const { paramName, values } = this.filtersData[filterName];

				filters[filterName] = {
					paramName,
					activeValues: this.getActiveValues(values),
					inactiveValues: this.getInactiveValues(values),
				};
			}

			filters['Sort by'] = {
				paramName: 'sort_by',
				activeValue: this.getActiveSortValue(),
				activeValues: [],
			};

			this.filters = filters;
		},

		setEmptyFilters() {
			const emptyFilters = [];

			for (const filterName in this.filtersData) {
				const { values } = this.filtersData[filterName];

				const value = values.find((value) => value.count > 0 || value.active);
				if (!value) emptyFilters.push(filterName);
			}

			this.$nextTick(() => {
				this.emptyFilters = emptyFilters;
			});
		},

		getActiveValues(values) {
			return values.filter((value) => value.active).map((value) => value.value);
		},

		getInactiveValues(values) {
			return values.filter((value) => value.count < 1 && !value.active).map((value) => value.value);
		},

		getActiveSortValue() {
			const value = new URL(window.location.href).searchParams.get('sort_by');
			return value ? value : '';
		},

		setURL() {
			const url = new URL(window.location.pathname, window.location.origin);

			for (const filterName in this.filters) {
				const { activeValue, activeValues, paramName } = this.filters[filterName];

				if (activeValue) {
					url.searchParams.append(paramName, activeValue);
				}

				for (const value of activeValues) {
					url.searchParams.append(paramName, value);
				}
			}
			this.URL = url;
		},

		updateURLHash() {
			if (this.URL.toString() === this.prevURL.toString()) {
				return false;
			}
			this.prevURL = this.URL;

			const searchParams = this.URL.searchParams.toString();
			history.pushState(
				{ searchParams },
				'',
				`${window.location.pathname}${searchParams && '?'.concat(searchParams)}`,
			);

			return true;
		},

		async setHTML(url) {
			const urlString = url.toString();

			const response = await fetch(urlString);
			const html = await response.text();

			this.HTML = html;
		},

		updateProducts(html) {
			const newDocument = new DOMParser().parseFromString(html, 'text/html');

			document.getElementById('collection-content').innerHTML =
				newDocument.getElementById('collection-content').innerHTML;
		},

		deselect() {
			for (const filterName in this.filters) {
				if (filterName == 'Availability' || filterName == 'Sort by') {
					continue;
				}
				this.filters[filterName].activeValues = [];
			}
		},

		scrollToTop() {
			window.scrollTo({ top: 0, behavior: 'smooth' });
		},

		popstateHandler() {
			this.loading = true;
			this.setHTML(window.location.href);
		},

		init() {
			this.$watch('filtersData', () => {
				this.setFilters();
				this.setEmptyFilters();
			});

			this.$watch('filters', () => {
				this.availability = Boolean(this.filters['Availability'].activeValues.length);
				this.setURL();
			});

			this.$watch('availability', () => {
				if (this.availability) {
					this.filters['Availability'].activeValues = ['1'];
				} else {
					this.filters['Availability'].activeValues = [];
				}
			});

			this.$watch('URL', () => {
				const updated = this.updateURLHash();

				if (updated) {
					this.loading = true;
					this.setHTML(this.URL);
				}
			});

			this.$watch('HTML', () => {
				this.updateProducts(this.HTML);
				this.scrollToTop();
				this.loading = false;
			});
		},
	};
}
