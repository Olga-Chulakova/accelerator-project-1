import Swiper from 'swiper';
import {Navigation, Mousewheel} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/mousewheel';

const juriSwiper = new Swiper('.juri__swiper', {
  modules: [Navigation, Mousewheel],
  loop: true,
  allowTouchMove: true,
  slidesPerView: 1,
  spaceBetween: 40,
  navigation: {
    nextEl: '.juri__slider-button--prev',
    prevEl: '.juri__slider-button--next',
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
      slidesPerGroup: 2,
    },
    1366: {
      slidesPerView: 4,
      slidesPerGroup: 4,
    }
  }
});

const reviewsSwiper = new Swiper('.reviews__swiper', {
  modules: [Navigation, Mousewheel],
  loop: false,
  allowTouchMove: true,
  slidesPerView: 1,
  spaceBetween: 40,
  navigation: {
    nextEl: '.reviews__slider-button--prev',
    prevEl: '.reviews__slider-button--next',
  }
});
