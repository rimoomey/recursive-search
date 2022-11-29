function recursiveSearch(arr, target) {
  console.log(arr);
  if (arr.length === 0) {
    return false;
  } else if (arr[0] === target) {
    return true;
  } else {
    return recursiveSearch(arr.slice(1), target);
  }
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: true");
  console.log("=>", recursiveSearch([1, 2, 3], 2));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", recursiveSearch([3, 2, 1], 4));
}

module.exports = recursiveSearch;

// Please add your pseudocode to this file
// And a written explanation of your solution
/**
 * function recursiveSearch(arr, target) {
 * if the array is empty return false
 * else if the first index in the array is target, return true
 * else recursiveSearch(arr.slice(1, target))
 * }
 */
