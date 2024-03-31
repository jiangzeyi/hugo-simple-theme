import * as params from '@params';
import utils from './utils';

// 随机图片
window.addEventListener('load', () => {
    let randomPhotoParams = params.randomPhotoParams;
    let url = randomPhotoParams.url;
    let width = randomPhotoParams.width;
    let height = randomPhotoParams.height;
    let seed = utils.generateSeed(6)
    let replacedUrl = utils.parse(url, seed, width, height)
    let randomPhoto = document.getElementById('random-photo');
    let randomPhotoLink = document.getElementById('random-photo-link');
    randomPhoto.src = replacedUrl;
    randomPhotoLink.setAttribute('href', replacedUrl)
});