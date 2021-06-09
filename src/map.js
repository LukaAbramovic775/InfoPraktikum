
function zbrajanje() {
  var poljeBrojeva = [20, 30, 40, 50];
  return poljeBrojeva.map((broj) => {
    return broj + 10;
  });
}

function oduzimanje() {
  var poljeBrojeva = [20, 30, 40, 50];
  return poljeBrojeva.map((broj) => {
    return broj - 10;
  });
}
function mnozenje() {
  const polje1 = [20, 30, 40, 50];
  const polje2 = polje1.map((vrijednost) => {
    return vrijednost * 2;
  });
  return polje2;
}

function dijeljenje() {
  var poljeBrojeva = [20, 30, 40, 50];
  return poljeBrojeva.map((broj) => {
    return broj / 2;
  });
}
module.exports = {
  zbrajanje,
  oduzimanje,
  mnozenje,
  dijeljenje,
};