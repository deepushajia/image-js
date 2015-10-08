import {load} from '../../common';
import percentile from '../../../../src/image/transform/mask/percentile';

describe('Percentile threshold', function () {
    it('Should work like ImageJ', function () {
        return load('grayscale_by_zimmyrose.png').then(function (img) {
            percentile(img.histogram).should.equal(90);
        });
    });
});
