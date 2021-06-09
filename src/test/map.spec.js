const chai = require("chai");
const { expect } = chai;
const {
  zbrajanje,
  oduzimanje,
  mnozenje,
  dijeljenje,
} = require("../map.js");

describe("Map zadaci", function () {
  it("should return brojeve zbrojane za 10", function () {
    expect(zbrajanje()).to.eql([30, 40, 50, 60]);
  });
  it("should return brojebe oduzete za  10", function () {
    expect(oduzimanje()).to.eql([10, 20, 30, 40]);
  });
  it("should return pomnozene brojeve", function () {
    expect(mnozenje()).to.eql([40, 60, 80, 100]);
  });
  it("should return brojeve podijeljne za 2", function () {
    expect(dijeljenje()).to.eql([10, 15, 20, 25]);
  });
  });
