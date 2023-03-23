import * as flsFunctions from "./modules/functions.js";
import Swiper from 'swiper';
import {
	Navigation,
	EffectFade,
	Pagination,
	Thumbs,
	Controller,
	FreeMode,
	Scrollbar,
	A11y,
	Mousewheel
} from 'swiper';
import AOS from 'aos';

flsFunctions.isWebp(); 



const swiper =  new  Swiper('.auctions-slider', {
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev'
	},
	modules: [Navigation, FreeMode],
	autoHeight: true,
	speed: 500,
	slidesPerView: 3,
	spaceBetween: 15,
	freeMode: true,
	grabCursor: true,
	breakpoints: {
		1300: {
			spaceBetween: 42
		},	
		1100: {
			slidesPerView: 3
		},
		600: {
			slidesPerView: 2
		},
		500: {
			slidesPerView: 3
		},
	},
});

if(window.innerWidth < 600) {
	const swiper =  new  Swiper('.auctions-slider', {
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev'
		},
		modules: [Navigation, FreeMode],
		autoHeight: true,
		speed: 500,
		slidesPerView: 3,
		spaceBetween: 15,
		freeMode: true,
		grabCursor: true,
		breakpoints: {
			1300: {
				spaceBetween: 42
			},	
			1100: {
				slidesPerView: 3
			},
			600: {
				slidesPerView: 2
			},
			500: {
				slidesPerView: 3
			},
		}
	});
}

	

const swiper2  = new  Swiper('.popular-slider', {
	navigation: {
		nextEl: '.swiper-button-next2',
		prevEl: '.swiper-button-prev2'
	},
	modules: [Navigation, FreeMode],
	autoHeight: true,
	speed: 500,
	slidesPerView: 2.5,
	spaceBetween: 15,
	freeMode: true,
	grabCursor: true,
	breakpoints: {
		1300: {
			spaceBetween: 42
		},
		1100: {
			slidesPerView: 3
		},
		600: {
			slidesPerView: 2
		}
	}
});

if(window.innerWidth >= 600) {
	const swiper2 =   new  Swiper('.popular-slider', {
		navigation: {
			nextEl: '.swiper-button-next2',
			prevEl: '.swiper-button-prev2'
		},
		modules: [Navigation, FreeMode],
		autoHeight: true,
		speed: 500,
		slidesPerView: 2.5,
		spaceBetween: 15,
		freeMode: true,
		grabCursor: true,
		breakpoints: {
			1300: {
				spaceBetween: 42
			},	
			1100: {
				slidesPerView: 3
			},
			600: {
				slidesPerView: 2
			}
		}
	});
}

const swiper3 = new  Swiper('.categories-slider', {
	navigation: {
		nextEl: '.swiper-button-next3',
		prevEl: '.swiper-button-prev3'
	},
	modules: [Navigation, FreeMode],
	autoHeight: true,
	speed: 500,
	slidesPerView: 3,
	spaceBetween: 15,
	freeMode: true,
	grabCursor: true,
	breakpoints: {
		1300: {
			spaceBetween: 42
		},
		1100: {
			slidesPerView: 3
		},
		600: {
			slidesPerView: 2
		}
	}
});

if(window.innerWidth >= 600) {
	const swiper3 = new  Swiper('.categories-slider', {
		navigation: {
			nextEl: '.swiper-button-next3',
			prevEl: '.swiper-button-prev3'
		},
		modules: [Navigation, FreeMode],
		autoHeight: true,
		speed: 500,
		slidesPerView: 3,
		spaceBetween: 15,
		freeMode: true,
		grabCursor: true,
		breakpoints: {
			1300: {
				spaceBetween: 42
			},	
			1100: {
				slidesPerView: 3
			},
			600: {
				slidesPerView: 2
			}
		}
	});
}

const viewBtn = document.getElementById('auction__view--btn');

viewBtn.addEventListener('click', ()=> {
	const notView = document.querySelectorAll('.not-view');
	if(window.innerWidth < 600) {
		notView.forEach(i=> {
			i.classList.toggle('not-view');
		}) 
	}
});

	// class saqlovchilari //

const barBtn = document.querySelector('.header__burger');
const barBtn2 = document.querySelector('.header__burder--close');
const inner = document.querySelector('.header__items');

	//click add btn1

barBtn.addEventListener('click', ()=> { 
	inner.classList.toggle('header__items--active');
	barBtn.classList.toggle('header__burger--active');
	barBtn2.classList.toggle('close__active');
});

	//click remove btn2

barBtn2.addEventListener('click', ()=> { 
	inner.classList.toggle('header__items--active');
	barBtn.classList.toggle('header__burger--active');
	barBtn2.classList.toggle('close__active');
});

	//scroll remove btn1 btn2

window.addEventListener('scroll', ()=> { 
	inner.classList.add('header__items--active');
	barBtn2.classList.remove('close__active');
	barBtn.classList.remove('header__burger--active');
});

AOS.init();

AOS.init ({
	// Global settings:
	disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
	startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
	initClassName: 'aos-init', // class applied after initialization
	animatedClassName: 'aos-animate', // class applied on animation
	useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
	disableMutationObserver: false, // disables automatic mutations' detections (advanced)
	debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
	throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
	// Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
	offset: 120, // offset (in px) from the original trigger point
	delay: 0, // values from 0 to 3000, with step 50ms
	duration: 400, // values from 0 to 3000, with step 50ms
	easing: 'ease', // default easing for AOS animations
	once: false, // whether animation should happen only once - while scrolling down
	mirror: false, // whether elements should animate out while scrolling past them
	anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
});