/*
 * @Description:
 * @Author: Dora
 * @Date: 2022-09-26 21:38:57
 * @LastEditTime: 2022-09-26 23:40:11
 */
/*
 * @lc app=leetcode.cn id=202 lang=typescript
 *
 * [202] 快乐数
 */

// @lc code=start
// 方法一：哈希集合法
function isHappy(n: number): boolean {
  // 获取平方和
  function getNextSum(n: number): number {
    let sum: number = 0
    while (n > 0) {
      sum += (n % 10) * (n % 10)
      n = Math.floor(n / 10)
    }
    return sum
  }
  // 申明平方和的set结构
  const sumReCord: Set<number> = new Set()
  while (n) {
    // 获取平方和
    let sum: number = getNextSum(n)
    if (sum === 1) {
      return true
      // 将新的平方和存在sumReCord中
    } else if (!sumReCord.has(sum)) {
      sumReCord.add(sum)
      // 更新平方数
      n = sum
    } else {
      // 如果sumReCord中，表明出现了循环平方和，则不是平方数
      return false
    }
  }
}
// @lc code=end
