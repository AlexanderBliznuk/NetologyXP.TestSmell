'use strict';

var _assert = require('assert');

var _assert2 = _interopRequireDefault(_assert);

var _barmen = require('../src/barmen');

var _me = require('../src/me');

var _imageDownloader = require('../src/imageDownloader');

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _chai = require('chai');

var _username = require('username');

var _username2 = _interopRequireDefault(_username);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

suite('when barmen pour whisky', function () {
    setup(function (done) {
        (0, _me.sober)();
        (0, _barmen.free)();
        done();
    });

    suite('i ask 50 grams', function () {
        test('I get and drink whisky', function (done) {
            var whisky = new Image();
            var iAskVolume = 50;

            var volumeInGlass = (0, _barmen.pour)(whisky, iAskVolume);
            (0, _me.drink)(volumeInGlass);

            _assert2.default.equal(iAskVolume, volumeInGlass);

            done();
        });
    });

    suite('i ask -10 grams', function () {
        test('Barmen answered that he could not pour that volume', function (done) {
            var iAskVolume = -10;

            (0, _chai.expect)(function () {
                return (0, _barmen.pour)(whisky, iAskVolume);
            }).to.throw(/Invalid volume of whisky/);
            done();
        });
    });

    suite('i ask 500 grams', function () {
        test('Barmen said there is no such glass', function (done) {
            var iAskVolume = 500;
            var whisky = 1;

            (0, _chai.expect)(function () {
                return (0, _barmen.pour)(whisky, iAskVolume);
            }).to.throw(/There is no such glass/);
            done();
        });
    });

    teardown(function () {});
});

//# sourceMappingURL=whenBarmenPourWhiskyTests-compiled.js.map