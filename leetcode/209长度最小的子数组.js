/*
 * @Description: 
 * @Author: Dora
 * @Date: 2022-09-23 00:18:18
 * @LastEditTime: 2022-09-23 03:08:17
 */
/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
// var minSubArrayLen = function (target, nums) {
//   const len = nums.length
//   let count = nums.length
//   let sum = 0
//   let start = 0
//   let end = 0
//   const newnums =[]
//   for (let i = 0, j = 0; i < nums.length; i++) {
//     if (nums[i] >= target) {
//       return 1
//     } else {
//       newnums[end-start] = nums[i]
//       sum += nums[i]
//     }
//     console.log('---sum', sum, 'start', start, 'end', end)
//     if (sum < target) {
//       end++
//     } else {
//       // 合
//       count = count <= (end - start) ? count : (end - start)
//       start = i
//       end = i + 1
//       sum = 0
//       console.log('count', count)
//     }
//     console.log(nums.slice(start, end + 1))
//   }

//   return count
// }
/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
// 暴力求解
// var minSubArrayLen = function (target, nums) {
//   let count = undefined
//   let sum = 0
//   for (let i = 0; i < nums.length; i++) {
//     // 初始子数组的值
//     sum = 0
//     for (let j = i; j < nums.length; j++) {
//       sum += nums[j]
//      sum满足条件时,求职
//       if (sum >= target) {
//         count = count <= (j - i +1) ? count : (j - i+1)
//         sum = nums[i]
//         break
//       }
//     }
//   }
//   return count === undefined ? 0 : count
// }

var minSubArrayLen = function (target, nums) {
  let count = undefined
  let sum = 0
  // i决定符合条件终止位置，j为起始位置
  for (let i = 0, j = 0; i < nums.length; i++) {
    // 初始化符合条件的数组的长度
    sum += nums[i]
    // 循环判断sum,一直到目标子数组的长度为最短的
    while (sum >= target) {
      count = count <= (i - j + 1) ? count : (i - j + 1)
      sum = sum - nums[j]
      j++
    }
  }
  return count === undefined ? 0 : count
}
const target = 20
const nums = [2, 16, 14, 15]
console.log(minSubArrayLen(target, nums))