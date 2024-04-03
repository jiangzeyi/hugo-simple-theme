// Include Lightbox 
import PhotoSwipeLightbox from '../lib/photoswipe-lightbox.esm.min.js';

const lightbox = new PhotoSwipeLightbox({
    gallery: ".prose",
    children: ".gallery",
    pswpModule: () => import('../lib/photoswipe.esm.min.js'),
}).init();