/*
 * @Description:
 * @Author: Dora
 * @Date: 2022-08-08 11:32:23
 * @LastEditTime: 2022-08-08 12:17:14
 */
(() => {
    class Myname {
        constructor(first, last) {
            // 对象的私有属性
            this.first = first;
            this.last = last;
            this.full = first + last;
        }
    }
    function consolemame(name) {
        console.log(name.last + name.last);
    }
    const mm = new Myname('haha', 'lala');
    consolemame(mm);
})();
