/*
 * @Description:
 * @Author: Dora
 * @Date: 2022-09-21 13:47:38
 * @LastEditTime: 2022-09-21 17:02:01
 */
/**
 * 解法一：边界左闭右闭
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// 确保每次区间划分不要有重复或缺少的部分
//  var search = function(nums, target) {
//   let start = 0
//   let end = nums.length-1
//   let midIndex
//   // start = 0，end = nums.length-1，边界范围为左闭右闭时
//   当target大于或小于nums[midIndex]的时候，说明nums[midIndex]一定不等于target
//   更新边界时，可将本轮midIndex排除，即左start = midIndex +1，右end=midIndex -1
//   while(start<=end){
//       // midIndex =  start + ((end - start) >> 1)
//       // 避免越界写法
//       midIndex =  start + Math.floor((end - start)/2)
//       if(target<nums[midIndex]){
//           end = midIndex-1
//       }else if(target>nums[midIndex]){
//           start = midIndex +1
//       }else {
//           return midIndex
//       }
//   }

//   return -1
// }
/**
 * 解法二：边界左闭右开
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// 确保每次区间划分不要有重复或缺少的部分
var search = function (nums, target) {
  let start = 0
  let end = nums.length
  let midIndex
  // start = 0,end = nums.length，边界范围为左闭右开时
 //   当target大于nums[midIndex]的时候，说明nums[midIndex]一定不等于target，左边界更新时start = midIndex +1
//   当target小于nums[midIndex]的时候，说明nums[midIndex]不一定不等于target，右边界更新时end=midIndex

  while (start < end) {
    // midIndex =  start +((end - start) >> 1)
    // 避免越界写法
    midIndex = start + Math.floor((end - start) / 2)
    if (target < nums[midIndex]) {
      end = midIndex
    } else if (target > nums[midIndex]) {
      start = midIndex + 1
    } else {
      return midIndex
    }
  }

  return -1
}

const nums = [2, 5]
const target = 2
console.log(search(nums, target))
