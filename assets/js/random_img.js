import * as params from '@params';
import util from './util';


window.addEventListener('DOMContentLoaded', function() {
    let total = params.total;
    let random = util.randomInt(total);
    let bufferImage = new Image();
    bufferImage.src = '/images/random/' + random + '.jpg';
    bufferImage.addEventListener('load', function() {
        let random_image = document.getElementById('random_image_content');
        random_image.alt = 'Example Image';
        random_image.src = bufferImage.src;
    });
});
;
