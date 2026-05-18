class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let mapped={
          ")":"(",
          "]":"[",
          "}":"{"
        }

        let stack=[];
        for(let i=0;i<s.length;i++){
            let open=s[i]
            if(open==="(" || open==="[" || open==="{"){
                stack.push(open)
            } else{
                 let top=stack[stack.length-1];
                 if(top!=mapped[open]){
                    return false
                 }else{
                    stack.pop()
                 }
            }
        }

        return stack.length===0;

       
    }
}
