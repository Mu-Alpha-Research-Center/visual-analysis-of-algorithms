## Recursion

The power of recursion evidently lies in the possibility of defining an infinite set of objects by a finite statement. In the same manner, an infinite number of computations can be described by a finite recursive program, even if this program contains no explicit repetitions.

--- Niklaus Wirth, Algorithms + Data Structures = Programs, 1976[^1]

[^1]: https://archive.org/details/algorithmsdatast00wirt/page/126]

### Fibonacci Sequence

$F_{0} = 0$  
$F_{1} = 1$  
$F_{n} = F_{n-1}+F_{n-2}\qquad for\ n > 1$

```python
def fib(n: int) -> int:
    if n <= 1:
        return n

    return fib(n-1) + fib(n-2)
```

### Binary Exponentiation

${\displaystyle x^{n}={\begin{cases}x\,(x^{2})^{(n-1)/2},&{\mbox{if }}n{\mbox{ is odd}}\\(x^{2})^{n/2},&{\mbox{if }}n{\mbox{ is even}}\end{cases}}}$
