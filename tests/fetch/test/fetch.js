"use strict";

let config = require('../../config');

let fetchClient = require('libsky-fetch');
var expect = require('chai').expect;

const instantiateAPI = function (path) {
    let apiConfig = new fetchClient.Configuration();
    return new fetchClient.DefaultApi(apiConfig, path);
};

const checkVersion = function (path) {
    context(`Getting version from ${path}.`, function() {
        it('Should return version object', function() {
            let api = instantiateAPI(path);
            return api.version().then(result => {
                expect(result).to.be.a('object');
                expect(result).to.have.property('data');
                expect(result.data).to.be.a('object');
                expect(result.data).to.have.property('version');
                expect(result.data).to.have.property('commit');
                expect(result.data).to.have.property('branch');
            });
        });
    });
};

describe('#fetchClient', function() {

    this.timeout(10000);

    checkVersion(config.HOST);

});
