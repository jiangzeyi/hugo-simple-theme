import * as params from '@params';
import utils from './utils';

document.addEventListener

window.addEventListener('load', () => {
    let randomPhoto = document.getElementById('random-photo');
    let randomPhotoLink = document.getElementById('random-photo-link');
    if (!randomPhoto || !randomPhotoLink) {
        return;
    }

    let photoParams = params.randomPhotoParams;
    let { url, width, height } = photoParams;
    let seed = utils.generateSeed(6);
    let replacedUrl = utils.parse(url, seed, width, height);

    randomPhoto.src = replacedUrl;
    randomPhotoLink.setAttribute('href', replacedUrl);
});
