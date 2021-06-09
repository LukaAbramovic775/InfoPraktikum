const chai = require("chai");
const { expect } = chai;

describe(" forEach vjezba", function(){
it("forEach vjezba brojevi", function(){
    const polje1 = ["1+9", "2+8", "3+7"];
    const polje2 = [];
    polje1.forEach(function (dodaj) {
      polje2.push(dodaj + "=10");
    });
    expect(polje2).to.eql([
      "1+9=10",
      "2+8=10",
      "3+7=10",
    ]);
  });

  it("forEach vjezba rijeci", function(){
    const polje1 = ["crna", "plava", "zelena"];
    const polje2 = [];
    polje1.forEach(function (dodaj) {
      polje2.push(dodaj + " boja");
    });
    expect(polje2).to.eql([
      "crna boja",
      "plava boja",
      "zelena boja",
    ]);
  });
});
 