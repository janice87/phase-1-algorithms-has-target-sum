function hasTargetSum(array, target) {
  // Write your algorithm here
  for(let i = 0; i < array.length; i++) {
    for(let j = i + 1; j < array.length; j++) {
      if(array[i] + array[j] === target) {
        return true;
       }     
    }
  }
  return false;
}
//function hasTargetSum([1, 2, 5], 4)
/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here
  we take 2 arguments, an array and target integer
  should return TRUE if any pair of nums in the array adds to the target num
  use nested for loop
  ([1, 2, 5], 4) length is 3
  i = 1 j = 2
  i = 2 j = 5
  i = 5

*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
