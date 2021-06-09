const chai = require("chai");
const { expect } = chai;

describe("Filter zadaci", function () {
  it("should return brojevi dijeljivi sa 5", function () {
        function brojSaPet(value) {
          return value % 5 == 0;
        }
        var brojevi= [100, 101, 95, 91, 80, 81, 75, 71].filter(brojSaPet);
        expect(brojevi).to.eql([100, 95, 80, 75]);
      });

  it("should return rijeci iznad 5 slova", function () {
    let rijeci = [
    "akademija",
    "fakultet",
    "cokolada",
    "TV",
    ];
    const result = rijeci.filter((rijec) => rijec.length > 5);
    expect(result).to.eql(["akademija", "fakultet", "cokolada"]);
  });

  it("should return rijeci ispod 5 slova", function () {
    let rijeci = [
        "akademija",
        "fakultet",
        "cokolada",
        "TV",,
    ];
    const result = rijeci.filter((rijec) => rijec.length < 5);
    expect(result).to.eql(["TV"]);
  });
});