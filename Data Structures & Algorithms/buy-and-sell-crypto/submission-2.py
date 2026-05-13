class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        n=len(prices)
        if n==0:
          return 0

        minP=prices[0]
        maxProfit=0
        for i in range(len(prices)):
          maxP= prices[i]-minP;
          maxProfit=max(maxProfit,maxP)
          minP=min(prices[i],minP)
        return maxProfit