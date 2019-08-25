/*
  Set implemetation by Ajay
*/

class MySet {
    setArr = [];
    count = 0;
     constructor() {}
 
     add(val) {
         if (!this.setArr.includes(val)) {
             this.setArr.push(val);
           return true;
         }
       return false;
     }
 
     has(val) {
         return this.setArr.includes(val);
     }
 
     size() {
         return this.setArr.length;
     }
 
     remove(val) {
         const index = this.setArr.findIndex(item => item === val);
         this.setArr.splice(index, 1);
     }
   
     getSetValues() {
       return this.setArr;
     }
 
     merge(otherSet) {
         const otherArr = otherSet.getSetValues();
         otherArr.forEach(val => {
             if (!this.setArr.includes(val)) {
                 this.setArr.push(val);
             }
         })
     }
 
     difference(otherSet) {
         const otherArr = otherSet.getSetValues();
         return otherArr.filter(item => {
             return !this.setArr.includes(item);
         })
     }
 
     same(otherSet) {
          const otherArr = otherSet.getSetValues();
         return otherArr.filter(item => {
             return this.setArr.includes(item);
         })
     }
 }
 
 const set1 = new MySet();
 
 set1.add(10);
 
 set1.add(20);
 
 set1.add(30);
 set1.add(10);
 
 console.log(set1.getSetValues());
 console.log(set1.has(20));
 
 const set2 = new MySet();
 
 set2.add(40);
 set2.add(50);
 
 set1.merge(set2);
 
 
 console.log(set1.getSetValues());
 
 