function fizzBuzz(num) {
    if(isNaN(num)) throw Error();
    let result = "";
    if(!(num % 3)) result += "Fizz";
    if(!(num % 5)) result += "Buzz";
    if(!(num % 7)) result += "Suzz";
    return result;
}
console.log(fizzBuzz(21));
module.exports = fizzBuzz;