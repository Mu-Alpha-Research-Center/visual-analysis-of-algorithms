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

${\displaystyle x^{n}={
    \begin{cases}
        1,&{\mbox{if }}n{\mbox{ is zero}}\\
        \left({\frac {1}{x}}\right)^{\lvert {n} \rvert},&{\mbox{if }}n{\mbox{ is negative}}\\
        x\,(x^{2})^{(n-1)/2},&{\mbox{if }}n{\mbox{ is odd}}\\
        (x^{2})^{n/2},&{\mbox{if }}n{\mbox{ is even}}
    \end{cases}
}}$

```python
def pow(x: int, n: int) -> int:
    if n == 0:
        return 1
    elif n < 0:
        return pow(1 / x, abs(n))
    elif n % 2 == 0:
        return pow(x * x, n / 2)
    else:
        return x * pow(x * x, (n - 1) / 2)
```
