/*
 * @Description: 
 * @Author: Dora
 * @Date: 2022-09-22 12:04:19
 * @LastEditTime: 2022-09-22 23:47:31
 */
/**
 * @param {number[]} nums
 * @return {number[]}
 */
// 先平方 后排序
var sortedSquares = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    nums[i] = nums[i] * nums[i]
  }
  return nums.sort((a, b) => a - b)
};
// 核心思想：数组本来是非递减的顺序的，所以平方后，最大数在数组两端
// 从前后两端分别遍历
var sortedSquares = function (nums) {
  const len = nums.length
  // 目标数组
  const newNums = []
  // 目标数组数组
  let k = len - 1
  // 前后两个指针
  let j = len - 1
  let i = 0
  for (let i = 0, j = len - 1; i <= j;) {
    if (nums[i] * nums[i] > nums[j] * nums[j]) {
      newNums[k--] = nums[i] * nums[i]
      i++
    } else {
      newNums[k--] = nums[j] * nums[j]
      j--
    }
  }
  // while(i<=j){
  //   if(nums[i]*nums[i]>nums[j]*nums[j]){
  //     newNums[k--] = nums[i]*nums[i]
  //     i++
  //   }else{
  //     newNums[k--] = nums[j]*nums[j]
  //     j--
  //   }
  // }
  return newNums
};

const nums = [-7, -3, 2, 3, 11]
console.log(sortedSquares(nums))