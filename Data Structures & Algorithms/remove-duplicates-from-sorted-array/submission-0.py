class Solution:
    def removeDuplicates(self, nums: List[int]) -> int:
        slow=0
        fast=1
        while(fast<len(nums)):
          if nums[slow]!=nums[fast]:
            slow=slow+1
            temp=nums[slow]
            nums[slow]=nums[fast]
            nums[fast]=temp
          fast=fast+1
        return slow+1