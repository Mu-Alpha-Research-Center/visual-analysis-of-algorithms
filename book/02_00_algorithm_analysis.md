# Algorithm Analysis

## Amortized Analysis

The motivation for amortized analysis is that looking at the worst-case run time can be too pessimistic. Instead, amortized analysis averages the running times of operations in a sequence over that sequence. Amortized analysis is a useful tool that complements other techniques such as worst-case and average-case analysis.

--- https://en.wikipedia.org/wiki/Amortized_analysis

Imagine a dynamic list backed by a fixed size array that doubles once capacity is reached and require n inserts into the new fixed size array.

| n   | # of inserts |
| :-- | :----------- |
| 1   | 1            |
| 2   | 1            |
| 3   | 1            |
| ... | 1            |
| n   | n            |
| ... | n + 1        |

$\text{\# of inserts} \over n $
$\to$
$n + n + 1 \over{n}$
$\to$
$2n + 1 \over n$
$\to$
$2n \over n$
$\to$
$2$
