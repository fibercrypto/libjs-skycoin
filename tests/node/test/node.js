"use strict";

const config = require('../../config');

let nodeClient = require('libsky-node');
var expect = require('chai').expect;

const instantiateAPI = function (path) {
    return new nodeClient.DefaultApi(path);
};

const checkVersion = function (path) {
    context(`Getting version from ${path}.`, function() {
        it('Should return version object', function() {
            let api = instantiateAPI(path);
            return api.version().then(result => {
                expect(result).to.be.a('object');
                expect(result).to.have.property('body');
                expect(result.body).to.be.a('object');
                expect(result.body).to.have.property('version');
                expect(result.body).to.have.property('commit');
                expect(result.body).to.have.property('branch');
            });
        });
    });
};

describe('#nodeClient', function() {

    this.timeout(10000);

    checkVersion(config.HOST);

});
