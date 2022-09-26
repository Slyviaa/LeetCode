/*
 * @Description: 
 * @Author: Dora
 * @Date: 2022-09-26 02:35:20
 * @LastEditTime: 2022-09-26 03:34:50
 */
/*
 * @lc app=leetcode.cn id=206 lang=typescript
 *
 * [206] 反转链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function reverseList(head: ListNode | null): ListNode | null {
  let cur:ListNode|null = head
  let pre:ListNode|null = null
  // 临时节点
  let temp:ListNode
  while(cur){
    // 保存下一个节点
    temp = cur.next
    // 改变当前节点的指向
    cur.next = pre
    // 移动pre和cur
    pre = cur
    cur = temp
  }
  // 顺序链表的最后节点，反转链表的第一个节点
  return cur
};

/* // 递归写法（从前往后）
function reverseList(head: ListNode | null): ListNode | null {
  // 从前往后开始递归
  function reverse(pre:ListNode|null,cur:ListNode|null):ListNode | null{
    // 递归停止的条件
    if(!cur) return pre
    let temp:ListNode|null = cur.next
    cur.next = pre
    pre = cur
    cur = temp
    // 递归
    return  reverse(pre,cur)
  }
  return reverse(null,head)
}; */
// 递归写法（从后往前）
function reverseList(head: ListNode | null): ListNode | null {
  // 从前往后开始递归
  function reverse(pre:ListNode|null,cur:ListNode|null):ListNode | null{
    // 递归停止的条件
    if(!cur){
      return reverse(pre,cur) 
    }
    pre = cur
    // 递归
    
  }
  return reverse(null,head)
};
// @lc code=end

