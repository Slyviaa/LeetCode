/*
 * @Description: 删除链表的倒数第N个节点 
 * @Author: Dora
 * @Date: 2022-08-09 11:46:57
 * @LastEditTime: 2022-08-09 19:05:19
 */

/* 提示：
  输入：head = [1,2,3,4,5], n = 2
  输出：[1,2,3,5]

  输入：head = [1], n = 1
  输出：[]

  链表中结点的数目为 sz
  1 <= sz <= 30
  0 <= Node.val <= 100
  1 <= n <= sz
 */

// 定义链表
function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}

// 第一种解法（单指针） 找到正数被删除的节点的前一个节点，改变指针指向
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  let pre = head
  const last = getListLen(head) - n
  if (last === 0) {
    return head.next
  }
  for (let i = 0; i < last - 1; i++) {
    pre = pre.next
  }
  //  被删除节点的前一个节点
  pre.next = pre.next.next
  return head
};
// 获取链表长度
function getListLen(head) {
  let len = 0
  while (head !== null) {
    len++
    head = head.next
  }
  return len
}

// 1end=====================================


// 第2种解法（双指针，快慢指针） 快指针先走n步；快指针遍历到最后一个节点时，慢指针刚好到达倒数第n+1个节点，然后再改变慢指针指向
/**
 * @param {ListNode} head 
 * @param {number} n 
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  let fast = slow = head
  for (let i = 0; i < n; i++) {
    fast = fast.next
  }
  //  删除的是第一个节点
  if (fast === null) {
    return head.next
  }
  //  fast遍历到最后一个节点
  while (fast.next !== null) {
    fast = fast.next
    slow = slow.next
  }
  //  倒数第n+1个节点
  slow.next = slow.next.next
  return head
};

// 2end=====================================


// 第3种解法（递归） 遍历长度时的递归
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  const pos = getListLen(head, n)
  //  如果删除的是第一个节点
  if (pos === n) {
    return head.next
  }
  return head
};
// 递归获取链表长度
function getListLen(head, n) {
  if (head === null) {
    return 0
  }
  // 递归直到最后一个节点为null,开始逆序返回长度
  let len = getListLen(head.next, n) + 1
  //  逆序找到第n+1个节点，改变指向
  if (len === n + 1) {
    head.next = head.next.next
  }
  return len
}

// 3end=====================================