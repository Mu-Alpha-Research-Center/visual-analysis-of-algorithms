// https://leetcode.com/problems/lemonade-change

import Tests from '../TestHelpers'

function lemonadeChange(bills: number[]): boolean {
  // Remember that we're dealing with physical bills.
  let $5 = 0
  let $10 = 0

  for (let bill of bills) {
    if (bill === 5) {
      // No change is required for a $5.
      $5++
    } else if (bill === 10) {
      // Change for a $10 is a $5.
      if ($5 > 0) {
        $5--
        $10++
      } else {
        return false
      }
    } else {
      // Change for a $20 is $15 and can be paid as a $5 and a $10 or three $5s.
      if ($5 > 0 && $10 > 0) {
        $5--
        $10--
      } else if ($5 >= 3) {
        $5 -= 3
      } else {
        return false
      }
    }
  }

  return true
}

let tests = new Tests(
  [[5, 5, 5, 10, 20], true],
  [[5, 5, 10], true],
  [[10, 10], false],
  [[5, 5, 10, 10, 20], false],
)

tests.run(lemonadeChange)
