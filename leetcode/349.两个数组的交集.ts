/*
 * @Description:  
 * @Author: Dora
 * @Date: 2022-09-26 21:02:26
 * @LastEditTime: 2022-09-26 21:25:40
 */
/*
 * @lc app=leetcode.cn id=349 lang=typescript
 *
 * [349] 两个数组的交集
 */

// @lc code=start
function intersection(nums1: number[], nums2: number[]): number[] {
  const recordSet2:Set<number> = new Set(nums2)
  // 使用set结构存储过滤出的相同的元素，并转为数组
  return Array.from(new Set(nums1.filter(item =>recordSet2.has(item))))
};
// @lc code=end

