/*       slice       */
const foods1 = ["pizza", "burger", "fingerChips", "donuts", "springRoll"];
let modifiedFood1 = [];
modifiedFood1 = foods1.slice(1, 4);
console.log(modifiedFood1);


/*       splice       */
var foods2 = ["pizza", "burger", "fingerChips", "donuts", "springRoll"];
let modifiedFood2 = [];
modifiedFood2 = foods2.splice(2, 0, "noodles", "icecream");
console.log(foods2);
console.log(modifiedFood2);

/*   filter */
const numberArray1 = [12, 324, 213, 4, 2, 3, 45, 4234];
const numberArray2 = [12, 324, 213, 4, 2, 3, 45, 4234];
function isPrime(num) {
    if (num === 2) {
        return true;
    }
    else if (num > 1) {
        for (var i = 2; i < num; i++) {

            if (num % i !== 0) {
                return true;
            }

            else if (num === i * i) {
                return false
            }

            else {
                return false;
            }
        }
    }
    else {
        return false;
    }

}
function isEven(x) {
    return x % 2 == 0;
}
let arr1 = [];
let arr2 = [];
arr1 = numberArray1.filter(isEven);
console.log(arr1);
arr2 = numberArray2.filter(isPrime);
console.log(arr2);


/*  map   */
const myArray = [11, 34, 20, 5, 53, 16];
arr = [];
function findSquareOfNumbers(x) {
    return x * x;
}
arr = myArray.map(findSquareOfNumbers);
console.log(arr);

/* reduce */
const myArray1 = [2, 3, 5, 10];
array = [];
array = myArray1.reduce((a, b) => { return a * b; })
console.log(array);
