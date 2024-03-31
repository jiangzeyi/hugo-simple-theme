import * as params from '@params';
import util from './util';

// 随机图片
window.addEventListener('load', function() {
    let total = params.total;
    let random = util.randomInt(total);
    let bufferImage = new Image();
    bufferImage.src = '/images/random/' + random + '.jpg';
    let random_image = document.getElementById('rd_img');
    let random_image_container = document.getElementById('rd_img_cont');
    bufferImage.addEventListener('load', function() {
        random_image.alt = '';
        random_image.src = bufferImage.src;
        random_image_container.setAttribute('data-pswp-width', bufferImage.width)
        random_image_container.setAttribute('data-pswp-height', bufferImage.height)
        random_image_container.setAttribute('href',bufferImage.src)
    });
});
