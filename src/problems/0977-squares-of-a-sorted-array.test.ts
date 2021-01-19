// https://leetcode.com/problems/squares-of-a-sorted-array

import Tests from '../TestHelpers'

function sortedSquares1(numbers: number[]): number[] {
  return numbers
    .map(n => n * n)        // T = O(n)
    .sort((a, b) => a - b)  // T = O(n log n)
}

function sortedSquares2(numbers: number[]): number[] {
  // For this solution, we will need to iterate positive numbers from
  // smallest to largest, and iterate negative numbers from largest to smallest.
  // Since the array is sorted, this effectively means that we will need to
  // iterate positive numbers in a forward direction from left to right, and
  // iterate negative numbers in reverse from right to left.
  //
  // We also need to account for duplicates runs of the same number.
  let result: number[] = []
  let i = 0

  // First, we need to find the index of the first positive number. We will
  // simply iterate until we find a number that is larger than `-1`.
  while (i < numbers.length) {
    if (numbers[i] > -1) break
    i++
  }

  // Since the array is sorted, it follows that the first negative number will
  // be right before the first positive number so we set `j` to `i - 1`.
  let j = i - 1

  while (i < numbers.length || j > -1) {
    // Using the 2 pointer technique, we will loop until both `i` and `j` are
    // out of the bounds of the array. `i` will eventually be greater than the
    // length of the array. `j` will eventually be less than zero.
    let n = numbers[i]
    let m = numbers[j]
    let a = n * n
    let b = m * m

    if (i < numbers.length && j > -1) {
      // In this case, we have both a positive number and a negative number to
      // compare. We simply compare and push the smaller of the two, and iterate
      // to collect any duplicates.
      if (a < b) {
        result.push(a)
        while (i < numbers.length && numbers[++i] === n) result.push(a)
      } else {
        result.push(b)
        while (j > -1 && numbers[--j] === m) result.push(b)
      }
    } else if (i < numbers.length) {
      // In this case, we have run out of negative numbers, and we can safely
      // push the square of the positive number.
      result.push(a)
      while (i < numbers.length && numbers[++i] === n) result.push(a)
    } else if (j > -1) {
      // In this case, we have run out of positive numbers, and we can safely
      // push the square of the negative number.
      result.push(b)
      while (j > -1 && numbers[--j] === m) result.push(b)
    }
  }

  return result
}

function sortedSquares3(numbers: number[]): number[] {
  // For this solution, we will use the 2 pointer technique, keeping track of
  // a low pointer and high pointer. Those pointers will converge towards the
  // middle. What's amazing about this solution is that it's linear and it still
  // accounts for duplicates.
  let result: number[] = []
  let lo = 0
  let hi = numbers.length - 1

  // Iterate in reverse from from right to left, filling in the squares from
  // largest to smallest.
  for (let i = numbers.length - 1; i >= 0; i--) {
    let loSquare = numbers[lo] * numbers[lo]
    let hiSquare = numbers[hi] * numbers[hi]

    // After calculating each square, we compare the squares. If the high
    // square is larger, then we set it in the result array and decrement the
    // high pointer. If the low square is larger or equal, then we set it in the
    // result array and increment the low pointer.
    if (hiSquare > loSquare) {
      result[i] = hiSquare
      hi--
    } else {
      result[i] = loSquare
      lo++
    }
  }

  return result
}

let tests = new Tests(
  [[-4, -1, 0, 3, 10], [0, 1, 9, 16, 100]],
  [[-7, -3, 2, 3, 11], [4, 9, 9, 49, 121]],
  [[-5, -3, -2, -1], [1, 4, 9, 25]],
  [[1, 2, 3], [1, 4, 9]],
  [[-10000, -9999, -7, -5, 0, 0, 10000], [0, 0, 25, 49, 99980001, 100000000, 100000000]],
  [[-1, 2, 2], [1, 4, 4]],
)

tests.run(
  sortedSquares1,
  sortedSquares2,
  sortedSquares3
)
