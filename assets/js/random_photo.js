import * as params from '@params';
import * as utils from './utils';

class RandomPhotoLoader {
    constructor() {
        if (params.randomPhotoParams) {
            this.loadRandomPhoto();
        }
    }

    loadRandomPhoto() {
        window.addEventListener('load', () => {
            let randomPhoto = document.getElementById('random-photo');
            let randomPhotoLink = document.getElementById('random-photo-link');
            if (!randomPhoto || !randomPhotoLink) {
                return;
            }

            let photoParams = params.randomPhotoParams;
            let { url, width, height } = photoParams;
            let seed = utils.seed(6);
            let replacedUrl = utils.formatStr(url, seed, width, height);

            randomPhoto.src = replacedUrl;
            randomPhotoLink.setAttribute('href', replacedUrl);
        });
    }
}

export default RandomPhotoLoader;
