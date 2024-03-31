// Include Lightbox 
import PhotoSwipeLightbox from '../lib/photoswipe-lightbox.esm.min.js';

const lightbox = new PhotoSwipeLightbox({
    // may select multiple "galleries"
    gallery: ".prose",

    // Elements within gallery (slides)
    children: ".gallery",

    // setup PhotoSwipe Core dynamic import
    pswpModule: () => import('../lib/photoswipe.esm.min.js'),
});
lightbox.init();