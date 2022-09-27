/*
 * @Description: 
 * @Author: Dora
 * @Date: 2022-09-21 20:05:32
 * @LastEditTime: 2022-09-27 17:00:04
 */

// 防抖：触发高频事件 N 秒后只会执行一次，如果 N 秒内事件再次触发，则会重新计时;
//  场景：输入验证或动态搜索，下拉刷新,按钮提交，页面滚动

// debounce防抖简易版本：
/* const debounce = function (fn, wait) {
  let timer
  return function () {
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      fn.apply(this, arguments)
    }, wait)
  }
} */

// 
/**
 * debounce防抖进阶版本:支持立即执行，和返回函数的返回值
 * @param {Function} fn 需要节流处理的函数
 * @param {Number} wait 防抖时间
 * @param {Boolean} immediate 是否执行第一次触发
 * @returns fn执行结果
 */
const debounce = function (fn, wait, immediate) {
  let timer
  return function () {
    let exec, result
    if (timer) {
      clearTimeout(timer)
    }
    /* 第一次触发函数的时候，timer为null,立即执行fn
       然后过了wait的时间,给timer赋值再次置null
       
       如果在防抖时间内再次触发了函数，clearTimeout会取消上一个将timer置null的操作，timer就有值了
       immediate里也不会立即执行fn
    */
    if (immediate) {
      exec = !timer
      timer = setTimeout(() => {
        console.log('置为null');
        timer = null
      }, wait)
      if (exec) {
        console.log(Date.now(), );
        result = fn.apply(this, arguments)
      }
    } else {
      timer = setTimeout(() => {
        result = fn.apply(this, arguments)
      }, wait)
    }
    return result
  }
}


// 节流场景：场景缩放，浏览器resize,scroll等；鼠标点击，页面触底加载；

/* const throttle = function (fn,delay,){
  let previous = 0
  return function(){
    let now = new Date().getTime()
    if(now - previous >delay){
      fn.apply(this,arguments)
      previous = now
    }
  }
} */

/**
 * 节流函数throttle进阶版：支持是否最后一次触发，和返回函数返回值
 * @param {Function} fn 需要节流处理的函数
 * @param {Number} delay 节流时间
 * @param {Boolean} needLast 是否执行最后一次触发
 * @returns fn执行结果
 */
const throttle = function (fn, delay, needLast) {
  let previous = new Date().getTime()
  let timer = null
  return function () {
    console.log('ippip',...arguments)
    let now = new Date().getTime()
    let result = null
    clearTimeout(timer)
    if (now - previous >= delay) {
      result =fn.apply(this, arguments)
      previous = now
    } else {
      // 如果设置最后一次触发，使用setTimeOut延迟执行
      if (needLast) {
        timer = setTimeout(() => {
          result = fn.apply(this, arguments)
        }, delay)
      }
    }
    return result
  }
}

function test(a){
  return a
  console.log('aaaa',a)
}