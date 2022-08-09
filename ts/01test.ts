/*
 * @Description: 
 * @Author: Dora
 * @Date: 2022-08-08 11:32:23
 * @LastEditTime: 2022-08-08 12:17:14
 */

(()=>{
  interface IMyname {
    first:string
    last:string
  }
  class Myname {
    // 类上的公共属性
    private first:string
    last:string
    full:string

    constructor(first:string,last:string){
      // 对象的私有属性
      this.first =first
      this.last = last
      this.full = first + last
    }

  }
  function consolemame (name:IMyname){
    console.log(name.last+name.last)
  }
  const mm = new Myname('haha','lala')
  consolemame(mm)
})()