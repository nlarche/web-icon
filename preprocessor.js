'use strict';

const babel = require('babel-core');
const jestPreset = require('babel-preset-jest');

module.exports = {
    process(src, filename) {
        if (/\.css$/.test(filename)) {
            return {};
        } else
            if (babel.util.canCompile(filename)) {
                return babel.transform(src, {
                    filename,
                    presets: [jestPreset],
                    retainLines: true,
                }).code;
            }
        return src;
    },
};