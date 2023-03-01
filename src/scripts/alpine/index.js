import Alpine from 'alpinejs';
import collapse from '@alpinejs/collapse';
import intersect from '@alpinejs/intersect';
import persist from '@alpinejs/persist';

// Import directives
import price from './directives/price';

// Import components
import body from './components/body';
import lazyLoad from './components/lazy-load';
import { headerSearch, headerCart, headerDesktop, headerMobile } from './components/header';
import { footerSubscribe } from './components/footer';
import { institutionalMenu } from './components/institutional-menu';
import hero from './components/hero';
import imageSlider from './components/image-slider';
import productSlider from './components/product-slider';
import contactFormValidation from './components/contact-form-validation';
import {
	collectionMain,
	collectionMenuItem,
	collectionLazyImage,
	collectionColorItem,
	collectionTopbarItems,
	collectionProductList,
} from './components/collection';

Alpine.plugin(collapse);
Alpine.plugin(intersect);
Alpine.plugin(persist);

// Declare directives
Alpine.directive('price', price);

// Declare components
Alpine.data('body', body);
Alpine.data('lazyLoad', lazyLoad);
Alpine.data('headerSearch', headerSearch);
Alpine.data('headerCart', headerCart);
Alpine.data('headerDesktop', headerDesktop);
Alpine.data('headerMobile', headerMobile);
Alpine.data('footerSubscribe', footerSubscribe);
Alpine.data('institutionalMenu', institutionalMenu);
Alpine.data('hero', hero);
Alpine.data('imageSlider', imageSlider);
Alpine.data('productSlider', productSlider);
Alpine.data('contactFormValidation', contactFormValidation);
Alpine.data('collectionMain', collectionMain);
Alpine.data('collectionMenuItem', collectionMenuItem);
Alpine.data('collectionLazyImage', collectionLazyImage);
Alpine.data('collectionColorItem', collectionColorItem);
Alpine.data('collectionTopbarItems', collectionTopbarItems);
Alpine.data('collectionProductList', collectionProductList);

window.Alpine = Alpine;
Alpine.start();
