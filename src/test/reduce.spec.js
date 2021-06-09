const chai = require("chai");
const { expect } = chai;

describe("Reduce zadaci", function () {
  it("reduce test zbrajanje", function () {
    let zbrajanje2 = [5, 10, 15, 20, 25].reduce((value, curr) => value + curr);
    expect(zbrajanje2).to.eql(75);
  });
  it("reduce test oduzimanje", function () {
    let oduzimanje2 = [20, 15, 10, 5].reduce((value, curr) => value - curr);
    expect(oduzimanje2).to.eql(-10);
  });
  it("reduce test mnozenje", function () {
    let mnozenje2 = [5, 10, 15, 20].reduce((value, curr) => value * curr);
    expect(mnozenje2).to.eql(15000);
  });
  it("reduce test dijeljenje", function () {
    let dijeljenje2 = [100, 2, 10, 5].reduce((value, curr) => value / curr);
    expect(dijeljenje2).to.eql(1);
  });
});