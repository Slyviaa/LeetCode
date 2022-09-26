/*
 * @Description:
 * @Author: Dora
 * @Date: 2022-09-26 21:40:24
 * @LastEditTime: 2022-09-26 22:30:13
 */
/*
 * @lc app=leetcode.cn id=1 lang=typescript
 *
 * [1] 两数之和
 */

// @lc code=start
function twoSum(nums: number[], target: number): number[] {
  const record: Map<number, number> = new Map()
  for (let i = 0; i < nums.length; i++) {
    // 在map中查找到匹配的值并返回下标
    if (record.has(target - nums[i])) {
      return [i, record.get(target - nums[i])]
    } else {
      //存储map,需要返回index，那键值就存为index
      record.set(nums[i], i)
    }
  }
}
// @lc code=end
