var assert = require("assert");
var chai = require("chai");
const trigramGenerator = require("../trigramGenerator");
var expect = chai.expect;
var should = chai.should;

describe("trigramGenerator", function () {
    it("trigram should be a function", function () {
      trigramGenerator(1);
    });
})