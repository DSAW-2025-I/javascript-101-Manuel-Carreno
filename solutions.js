// Sum of Two Numbers
function sum(a, b) {
  if(typeof a!== "number" || typeof b!=="number"){
    console.log("Los datos de entrada no son adecuados")
    return;
  }
  return a+b;
}

// Factorial of a Number
function factorial(n) {
  if(typeof n!== "number" || !Number.isInteger(n) || n < 0){
    console.log("Los datos de entrada no son adecuados")
    return;
  }
  let resultado=1;
  for (let i=2; i<=n; i++){
    resultado*=i;
  }
  return resultado;
  }

// Find the Largest Number
function findLargest(arr) {
  if (!Array.isArray(arr) || arr.some(num => typeof num !== "number")) {
    console.log("Los datos de entrada no son adecuados");
    return;
  }
  return Math.max(...arr);
}

// Count Vowels in a String
function countVowels(str) {
  if(typeof str !== "String"){
    console.log("Los datos de entrada no son adecuados")
    return;
  }
  const vowels = "aeiouAEIOU";
  return [...str].filter(char => vowels.includes(char)).length;
}

// Check if a Number is Prime
function isPrime(n) {
  if (typeof n !== "number" || !Number.isInteger(n) || n<2) {
    console.log("Los datos de entrada no son adecuados");
    return;
  }
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}

module.exports = {
  sum,
  factorial,
  findLargest,
  countVowels,
  isPrime,
};
