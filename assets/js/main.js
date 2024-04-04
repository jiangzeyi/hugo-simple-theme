import PhotoSwipeLightbox from '../lib/photoswipe-lightbox.esm.min.js';
import { Theme } from "./theme.js";
import RandomPhotoLoader from "./random_photo.js";

const docmentInit = () => {
    new RandomPhotoLoader();
    // 初始化photoswipe
    const lightbox = new PhotoSwipeLightbox({
        gallery: "#content",
        children: ".gallery",
        pswpModule: () => import('../lib/photoswipe.esm.min.js'),
    });
    lightbox.init();
    // 最后初始化主题
    const theme = new Theme();
    theme.themeToggle();
};

document.addEventListener('DOMContentLoaded', () => {
    setTimeout(docmentInit, 0);
});
