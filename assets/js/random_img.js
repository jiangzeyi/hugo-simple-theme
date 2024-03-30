import * as params from '@params';
import util from './util';

let total = params.total
let random = util.randomInt(total)
let img = document.getElementById('random_image');
img.src = '/images/random/' + random + '.jpg'