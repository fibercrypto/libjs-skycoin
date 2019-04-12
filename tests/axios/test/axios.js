"use strict";

const localBasePath = 'http://localhost:6420/';
const developBasePath = 'https://staging.node.skycoin.net';
const prodBasePath = 'https://node.skycoin.net';

let axiosClient = require('libsky-axios');
var expect = require('chai').expect;

describe('#axiosClient', function() {

    context(`Getting version from ${developBasePath}.`, function() {
        it('Should return version object', function() {
            let apiConfig = new axiosClient.Configuration();
            let api = new axiosClient.DefaultApi(apiConfig, developBasePath);
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

    context(`Getting version from ${prodBasePath}.`, function() {
        it('Should return version object', function() {
            let apiConfig = new axiosClient.Configuration();
            let api = new axiosClient.DefaultApi(apiConfig, prodBasePath);
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

});
