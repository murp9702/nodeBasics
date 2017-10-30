
// Part 1
// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

// console.log("hello world");

// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// Part 2
// -=-=-=-=-=-=-=-=-=-=-=-=-==-=-=-=-=-


var arrayOfNumbers = [];
for (var i=2; i < process.argv.length; i++) {
  arrayOfNumbers.push(Number(process.argv[i]));
  console.log(arrayOfNumbers)
}

var sum = arrayOfNumbers.reduce((a, b) => a + b, 0);
console.log(sum);

// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// Part 3
// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
