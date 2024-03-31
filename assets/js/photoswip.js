// Include Lightbox 
import PhotoSwipeLightbox from '../lib/photoswipe-lightbox.esm.min.js';



const content = document.getElementById("content");

const lightbox = new PhotoSwipeLightbox({
    // may select multiple "galleries"
    gallery: "#content",

    // Elements within gallery (slides)
    children: ".gallery",

    // setup PhotoSwipe Core dynamic import
    pswpModule: () => import('../lib/photoswipe.esm.min.js'),
});
lightbox.init();