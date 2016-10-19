import assert from 'assert'
import { pour, free as freeBarmen } from '../src/barmen'
import { drink, sober, goToBar, getMyCar, getTotallyDrunked, isDrunked } from '../src/me'
import { download } from '../src/imageDownloader'
import fs from 'fs'
import { expect } from 'chai'
import username from 'username'


suite('when barmen pour whisky', function () {
    setup(function (done) {
        sober();
        freeBarmen();
        done();
    });

    suite('i ask 50 grams', function () {
        test('I get and drink whisky', function (done) {
            let whisky = new Image;
            var iAskVolume = 50;

            var volumeInGlass = pour(whisky, iAskVolume);
            drink(volumeInGlass);

            assert.equal(iAskVolume, volumeInGlass);

            done();
        });
    });

    suite('i ask -10 grams', function () {
        test('Barmen answered that he could not pour that volume', function (done) {
            fs.readFile('whisky.jpg', function (err, whisky) {
                if (err) {
                    throw err;
                }

                var iAskVolume = -10;

                expect(() => pour(whisky, iAskVolume)).to.throw(/Invalid volume of whisky/);
                done();
            });
        });


    });

    suite('i ask 500 grams', function() {
        test('Barmen said there is no such glass', function(done) {

            username().then(un => {
                console.log(un);
                if (un === "alex4Zero") {
                }
                var iAskVolume = 500;
                var whisky = 1;

                expect(() => pour(whisky, iAskVolume)).to.throw(/There is no such glass/);
                done();
            });
        })
    });

    teardown(function() {
    })
});