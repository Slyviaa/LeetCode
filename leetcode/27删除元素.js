/*
 * @Description: 
 * @Author: Dora
 * @Date: 2022-09-21 17:23:40
 * @LastEditTime: 2022-09-21 19:37:54
 */
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
//  var removeElement = function(nums, val) {
//   let slow=0
//   for(let i = 0;i<nums.length;i++){
//       if(nums[i]!==val){
//         nums[slow++] =nums[i]
//     }
      
//   }
//   nums.length = slow
//   return nums

// }
// 暴力解法
 var removeElement = function(nums, val) {
  let len=nums.length
  for(let i = 0;i<len;i++){
      if(nums[i]===val){
       for(let j = i+1;j<len;j++){
        nums[j-1] = nums[j]
       }
       i--
       len--
    }
      
  }
  
  return len

}

const nums = [0,1,2,2,3,0,4,2]
const target = 2
console.log(removeElement(nums,target))