var assert = require("assert");
var chai = require("chai");
var expect = chai.expect;
var should = chai.should;
const trigramGenerator = require("../trigramGenerator");


describe("trigram generator problem", function () {
    it("trigramGenerator should be a function", function () {
      trigramGenerator("");
    });
    it("function should throw error if argument is not a text", function (){
      expect(()=> trigramGenerator(1)).to.throw(Error);
    });
});