class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
      let filters = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, ""); 
      let reverseFilters=filters.split("").reverse().join("");
      return filters===reverseFilters;
    }
}
