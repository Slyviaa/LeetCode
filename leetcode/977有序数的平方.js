/*
 * @Description: 
 * @Author: Dora
 * @Date: 2022-09-22 12:04:19
 * @LastEditTime: 2022-09-22 12:50:47
 */
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
  let slow = 0
  let fast = nums.length
  for(let i =1;i<nums.length;i++){
    if(Math.abs(nums[i])>Math.abs(nums[i-1])){
    } 
  }
  return nums  
};
const nums = [-7, -3, 2, 3, 11]
console.log(sortedSquares(nums))