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
    });

    suite('i ask 50 grams', function () {
        test('I get and drink whisky', function (done) {
            _fs2.default.readFile('whisky.jpg', function (err, whisky) {
                if (err) {
                    throw err;
                }

                var iAskVolume = 50;

                var volumeInGlass = (0, _barmen.pour)(whisky, iAskVolume);
                (0, _me.drink)(volumeInGlass);

                _assert2.default.equal(iAskVolume, volumeInGlass);

                done();
            });
        });
    });

    suite('i ask -10 grams', function () {
        test('I get an error', function (done) {
            _fs2.default.readFile('whisky.jpg', function (err, whisky) {
                if (err) {
                    throw err;
                }

                var iAskVolume = -10;

                (0, _chai.expect)(function () {
                    return (0, _barmen.pour)(whisky, iAskVolume);
                }).to.throw(/Invalid volume of whisky/);
                done();
            });
        });
    });

    suite('i ask 500 grams', function () {
        test('Barmen said there is no such glass', function (done) {

            (0, _username2.default)().then(function (un) {
                console.log(un);
                if (un === "alex4Zero") {}
                var iAskVolume = 500;
                var whisky = 1;

                (0, _chai.expect)(function () {
                    return (0, _barmen.pour)(whisky, iAskVolume);
                }).to.throw(/There is no such glass/);
                done();
            });
        });
    });

    teardown(function () {});
});

//# sourceMappingURL=whenBarmenPourWhiskyTests-compiled.js.map