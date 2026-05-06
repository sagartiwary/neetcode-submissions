class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(num) {
        
        let n=num.length;
        let obj={};
        for(let i=0;i<n;i++){
        if(obj[num[i]]===undefined){
          obj[num[i]]=1
        } else{
          obj[num[i]]=obj[num[i]]+1
        }
        }

        let count=1

        for(let key in obj){
            if(obj[key]>1){
               count++
            } 
        }

        if(count>1){
          return true
        } else{
          return false
        }
    }
}
