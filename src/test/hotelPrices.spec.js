var assert = require('assert');
var chai = require("chai");
var expect = chai.expect;
var should = chai.should;
const priceListFormatter = require('../hotelPrices');

describe('hotel price list test', function() {
    it('priceListFormatter should be a function', function () {
        priceListFormatter(1);
    });
});