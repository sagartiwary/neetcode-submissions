class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
     let n=filterOnlyLetters(s);
     let m=filterOnlyLetters(t);
     console.log(n);
     console.log(m)
     if(n.length!=m.length) return false;
     if(n===m){
      return true
     }else{
      return false;
     }
    }

     
}


function filterOnlyLetters(str){
      let filterWords= str.split("").filter((s)=>s!=" ").sort().join("");
      return filterWords;
    }
