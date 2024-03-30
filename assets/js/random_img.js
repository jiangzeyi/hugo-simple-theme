import * as params from '@params';
import util from './util';

window.onload = function() {
    let total = params.total
    let random = util.randomInt(total)
    let random_image = document.getElementById('random_image')
    let img = document.createElement('img')
    img.src = '/images/random/' + random + '.jpg'
    img.alt = 'Example Image';
    random_image.appendChild(img)
};