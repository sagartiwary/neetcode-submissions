class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
     
     let obj={};
  for(let i=0;i<nums.length;i++){
    obj[nums[i]]===undefined ? obj[nums[i]]=1 : obj[nums[i]]+=1;
  }

  let answer=[];
  for(let key in obj){
    answer.push([Number(key),obj[key]])
  }

   let myFinalAnswer=[]
  answer.sort((a,b)=>b[1]-a[1]);
  
   for(let i=0;i<k;i++){
    myFinalAnswer.push(answer[i][0])
   }

   return myFinalAnswer
    



    

  
    }
}