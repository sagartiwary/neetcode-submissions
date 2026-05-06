class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
    
    const filterA= (str)=>{
    let newFilter= str.split("").filter((s)=>s!=" ").sort().join("");
    return newFilter
  }

  if(filterA(s)===filterA(t)){
    return true
  } else{
    return false
  }

    }


     
}
