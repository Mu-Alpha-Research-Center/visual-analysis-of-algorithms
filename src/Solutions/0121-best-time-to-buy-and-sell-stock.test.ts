// https://leetcode.com/problems/best-time-to-buy-and-sell-stock

import { Tests } from '../TestHelpers'

function maxProfit1(prices: number[]): number {
  let maxprofit:number = 0
  // Compare each element with every other element on order of n^2 using a
  // double for-loop; calculate profit and compare with maxprofit.
  for (let i = 0; i < prices.length; i++) {
    for (let j = i + 1; j < prices.length; j++) {
      let profit = prices[j] - prices[i]
      if (profit > maxprofit) {
        maxprofit = profit
      }
    }
  }
  return maxprofit
}

function maxProfit2(prices: number[]): number {
  // * You don't need to compare every item to every other item because you
  //   only need solutions where you make a profit, which means the buy price
  //   is less than the sell price or sequential.
  // * To achieve linear time, this solution keeps track of the lowest price
  //   so far and the highest profit so far. Essentially, once you hit a run
  //   of numbers that are higher than your minprice you start calcuating the
  //   profit and updating maxprofit. Once you hit a new low, you start over.
  //   This works because you don't need to compare non-sequential numbers.
  // * Perhaps the meta insight is that if you have to compare numbers
  //   sequentially then there is a linear solution by using extra variables.
  let minprice: number = Number.MAX_VALUE
  let maxprofit: number = 0
  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < minprice) {
      minprice = prices[i]
    } else if (prices[i] - minprice > maxprofit) {
      maxprofit = prices[i] - minprice
    }
  }
  return maxprofit
}

let tests = new Tests(
  [[], 0],
  [[1], 0],
  [[7, 1, 5, 3, 6, 4], 5],
  [[7, 6, 4, 3, 1], 0],
  [[2, 4, 1], 2],
  [[3, 2, 6, 5, 0, 3], 4],
  [[2, 1, 2, 1, 0, 1, 2], 2],
  [[3, 3, 5, 0, 0, 3, 1, 4], 4],
  [[7, 2, 4, 1], 2]
)

tests.run(maxProfit1, maxProfit2)
