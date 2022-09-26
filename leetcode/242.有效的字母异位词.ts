/*
 * @Description:
 * @Author: Dora
 * @Date: 2022-09-26 11:07:05
 * @LastEditTime: 2022-09-26 20:56:51
 */
/*
 * @lc app=leetcode.cn id=242 lang=typescript
 *
 * [242] 有效的字母异位词
 */

// @lc code=start
/* function isAnagram(s: string, t: string): boolean {
  // 长度不等，直接发挥false
  if (s.length !== t.length) {
    return false
  }
  // 使用
  const newMap: Map<string, number> = new Map()
  // 遍历字符串
  for (let item of s) {
    // 字母为键,出现次数为val 存入哈希
    // 重复出现的键,更新次数
    newMap.set(item, (newMap.get(item) || 0) + 1)
  }
  // 比较两个字符串
  for (let item of t) {
    //每个字母出现一次，次数的值就-1
    newMap.set(item, (newMap.get(item) || 0) - 1)
    // 长度一样的情况下，只要出现某个字母的次数<0时，即可说明t和s字符不一致
    if(newMap.get(item) <0){
      return false
    }
  }
  return true
} */
// unicode解法
// 因为字符a到字符z的ASCII也是26个连续的数值，所以可以使用长度为26的数组存储
function isAnagram(s: string, t: string): boolean {
  // 长度不等，直接发挥false
  if (s.length !== t.length) {
    return false
  }
  // 使用长度为26的数组，数组下标即为不同的元素
  const record:Array<number> = new Array(26).fill(0)
  // 存入x-'a'相对的unicode值
  const base:number ='a'.charCodeAt(0)
  // 遍历字符串
  for (let item of s) {
    // 根据数据下标，更新元素出现的次数
    let index:number = item.charCodeAt(0) - base
    record[index] = record[index] + 1 
    
  }
  // 比较两个字符串
  for (let item of t) {
    //每个字母出现一次，次数的值就-1
    let index = item.charCodeAt(0) - base
    record[index] = record[index] - 1 
    // 长度一样的情况下，只要出现某个字母的次数<0时，即可说明t和s字符不一致
    if(record[index] <0){
      return false
    }
  }
  return true
}
// @lc code=end
