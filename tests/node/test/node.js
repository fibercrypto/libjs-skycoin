"use strict";

const localBasePath = 'http://localhost:6420/';
const developBasePath = 'https://staging.node.skycoin.net';
const prodBasePath = 'https://node.skycoin.net';

let nodeClient = require('libsky-node');
var expect = require('chai').expect;

describe('#nodeClient', function() {

    this.timeout(10000);

    context(`Getting version from ${developBasePath}.`, function() {
        it('Should return version object', function() {
            let api = new nodeClient.DefaultApi(developBasePath);
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

    context(`Getting version from ${prodBasePath}.`, function() {
        it('Should return version object', function() {
            let api = new nodeClient.DefaultApi(prodBasePath);
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

});
