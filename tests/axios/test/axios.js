"use strict";

let config = require('../../config');

let axiosClient = require('libsky-axios');
var expect = require('chai').expect;

const instantiateAPI = function (path) {
    let apiConfig = new axiosClient.Configuration();
    return new axiosClient.DefaultApi(apiConfig, path);
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

describe('#axiosClient', function() {

    this.timeout(10000);

    checkVersion(config.HOST);

});
