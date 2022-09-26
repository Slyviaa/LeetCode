/*
 * @Description: 
 * @Author: Dora
 * @Date: 2022-09-26 02:13:32
 * @LastEditTime: 2022-09-26 03:29:37
 */
/*
 * @lc app=leetcode.cn id=203 lang=typescript
 *
 * [203] 移除链表元素
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

 var removeElements = function (head, val) {
  // 判断头节点是否为目标值
  while (head ?.val === val) {
    head = head.next
  }
  // 申明前一个节点，和当前节点指针
  let pre = head
  let cur = head?.next
  // 头节点的节点，注意避免对空指针操作
  while (cur) {
    if (cur.val === val) {
      // 删除目标节点：将前一个节点的值指向当前节点
      pre.next = cur.next
    }else{
      pre = cur
    }
    cur = cur.next
  }

  // 返回虚拟节点后的节点
  return head

};

/* var removeElements = function(head, val) {
  // 新增虚拟节点
  const dummyHead = new ListNode(0,head)
  // 定义前一个节点，当前节点
  let pre = dummyHead 
  let cur = dummyHead.next
  // 循环遍历当前节点
  while(cur){
    if(cur.val === val){
      pre.next = cur.next
    }else{
      pre = cur
    }
    cur = cur.next
  }
  // 返回虚拟节点后的节点
  return dummyHead.next

}; */
// @lc code=end

