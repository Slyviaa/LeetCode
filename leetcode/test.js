/*
 * @Description: 
 * @Author: Dora
 * @Date: 2022-09-21 19:48:11
 * @LastEditTime: 2022-09-21 19:58:05
 */
const arr = ['10','5','5','12','33']
console.log(arr.map((item,index)=>{
  console.log(item,index)
  return parseInt(item,index)
}))
console.log(parseInt(1,3))