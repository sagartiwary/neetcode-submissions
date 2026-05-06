class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let n=nums.length;
        let mappedNums=nums.map((num,index)=>[num,index]).sort((a, b) => a[0] - b[0]);
        let i=0;
        let j=n-1;
        while(i<j){
            let sum=mappedNums[i][0] + mappedNums[j][0];
            if(sum===target){
                let result = [mappedNums[i][1],mappedNums[j][1]];
                return result.sort((a, b) => a - b);
            } else if(sum<target){
                i++
            } else{
                j--
            }
        }
    }
}