class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
      let n=heights.length;
      let i=0;
      let j=n-1;
      let max=0;
      while(i<j){
        let w= j-i;
        let h= Math.min(heights[i],heights[j]);
        let area= w * h;
        max=Math.max(max,area);

        if(heights[i]<heights[j]){
          i++
        } else if(heights[j]<=heights[i]){
          j--
        }

        
      }

      return max;

    }
}
